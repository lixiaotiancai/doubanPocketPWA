import config from '../config'

/**
 * 获取URL
 *
 * @param    {string}  type        搜索类型（图书？电影？音乐？or more...）
 * @param    {string}  text        搜索字段
 * @param    {number}  start       取结果的offset
 *
 * @return   {string}              URL
 */
const getURL = (type, text, start = 0) => {
  const pageConfig = getPageConfig(type)
  const searchURL = pageConfig.searchPage.searchURL

  return searchURL + `?q=${text}&start=${start}&count=${config.searchListCount}`
}

/**
 * 接口专区
 */

/**
 * 获取页面信息
 *
 * 描述: 如果找到该页面信息则返回, 若没找到则报错且返回pageList的第一项
 *
 * @param    {string}    pageName       页面内容（图书？电影？音乐？or more...）
 * @return   {object}                   页面信息
 */
export const getPageConfig = (pageId) => {
  const pageList = config.page

  for (let i = 0; i < pageList.length; i++) {
    if (pageId === pageList[i].pageId) {
      return pageList[i]
    }
  }

  console.log(new Error('No Page Found!!!'))

  return pageList[0]
}

/**
 * 获取所有页面名称
 *
 * @return   {array}                    所有页面名称
 */
export const getAllPageId = () => {
  const pageArr = []

  for (var i = 0; i < config.page.length; i++) {
    pageArr.push(config.page[i].pageId)
  }

  return pageArr
}

/**
 * 获取当前活动页面名称
 *
 * @return   {string}                    活动页面
 */
export const getCurrentPageId = (pageId = config.currentPageId) => {
  return getPageConfig(pageId).pageId
}

/**
 * 获取搜索栏的placeholder
 *
 * @param    {string}  searchType        搜索类型（图书？电影？音乐？or more...）
 * @return   {string}                    placeholder
 */
export const getPlaceholder = (pageId) => {
  return getPageConfig(pageId).searchPage.searchPlaceholder
}

export const getPageName = (pageId) => {
  return getPageConfig(pageId).pageName
}

export const getSearchResultArrName = (pageId) => {
  return getPageConfig(pageId).searchPage.searchResultArrName
}

export const getHeaderText = (pageId) => {
  return getPageConfig(pageId).detailPage.headerText
}

export const getReturnButtonText = (pageId) => {
  return getPageConfig(pageId).detailPage.returnBtnTxt
}

/**
 * fetchJsonp
 */
const fetchJsonp = (url, option) => {
  function jsonp (url, callback) {
    let _opt = {
      callbackName: 'callback',
      functionName: getJsonpFunctionName(url),
      data: {},
      ...option
    }

    let {
      callbackName,
      functionName,
      data
    } = _opt

    data[callbackName] = functionName

    url = parseUrl(url, serialize(data))

    addGlobalMethod()

    createScipt(url)

    function addGlobalMethod () {
      if (window[functionName]) return

      window[functionName] = function (res) {
        let p = new Promise((resolve, reject) => {
          callback(res)
          resolve()
        })

        p.then(() => {
          delete window[functionName]
          let script = document.querySelector(`script[src='${url}']`)
          script.parentNode.removeChild(script)
        })
      }
    }

    function getJsonpFunctionName (url) {
      let str = 'jsonp_'
      let reg = url.match(/[^?|&]*?=.*?(?=&|$)/g)
      reg.forEach(item => {
        str += item.replace('=', '_') + '_'
      })

      return str
    }

    function serialize (obj) {
      if (typeof obj !== 'object') return ''

      let ret = []
      for (var key in obj) {
        ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
      }

      return ret.join('&')
    }

    function parseUrl (url, param) {
      return url + (url.indexOf('?') === -1 ? '?' : '&') + param
    }

    function createScipt (url) {
      let script = document.createElement('script')
      script.src = url
      document.body.appendChild(script)
    }
  }

  return new Promise((resolve, reject) => {
    jsonp(url, res => resolve(res))
  })
}

/**
 * 获取json
 *
 * @param    {string}  type        搜索类型（图书？电影？音乐？or more...）
 * @param    {string}  text        搜索字段
 * @param    {number}  start       取结果的offset
 * @param    {func}    callback    回调函数
 * @return   json
 */
export const getJson = async (type, text, start) => {
  const url = getURL(type, text, start) // 取到请求的url

  try {
    let res = await fetchJsonp(url)
    return res
  } catch (err) {
    console.log(err)
  }
}
