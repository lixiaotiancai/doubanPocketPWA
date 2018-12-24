/*********************************************************************************
 *                                                                                *
 *                                                                                *
 * 项目配置页，在这里可以尽情的改变配置哦(但是要保证配置的正确与合理性哦！！)^_^  *
 *                                                                                *
 *                                                                                *
 ********************************************************************************/

const config = {
  currentPageId: 'book', // 初始显示的页面

  searchListCount: 10, // 搜索 和 刷新每次显示的条目数

  // 页面加载状态
  pageLoading: {
    text: '页面加载中...'
  },

  // 无搜索记录状态
  noSearchResource: {
    text: '无相关记录: ('
  },

  // 无图片时使用的备用图片
  nullImg: {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528109510447&di=8146537462e97ec23ab612ddb1fa691a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fwh%3D450%2C600%2Fsign%3D316363b838fa828bd17695e7c82f6d02%2Fcb8065380cd791231a8073c9a6345982b2b7802f.jpg'
  },

  // 下拉刷新状态
  refresh: {
    status: {
      prepare: {
        text: '下拉刷新'
      },
      start: {
        text: '松开刷新'
      },
      refreshing: {
        text: '正在刷新...'
      },
      complete: {
        text: '刷新完成!!!'
      },
      fail: {
        text: '刷新失败...'
      }
    }
  },

  // 上拉加载状态
  loadmore: {
    status: {
      prepare: {
        text: '上拉加载更多'
      },
      loading: {
        text: '正在加载...'
      },
      fail: {
        text: '加载失败...'
      },
      loadAll: {
        text: '已全部加载'
      }
    }
  },

  // 页面配置 (只注释第一页 下同)
  page: [{
    pageId: 'book', // 每个page独有的ID，用于识别
    pageName: '图书', // 页面名称
    icon: 'book', // 图标
    // 搜索页配置
    searchPage: {
      searchPlaceholder: '书名、作者、ISBN', // 搜索框的placeholder
      searchURL: 'https://api.douban.com/v2/book/search', // 搜索url
      searchResultArrName: 'books' // json中包含搜索信息的key值
    },
    // 详情页配置
    detailPage: {
      returnBtnTxt: '图书', // 返回按钮文本
      headerText: '图书详情' // 头部文本
    }
  }, {
    pageId: 'movie',
    pageName: '电影',
    icon: 'movie',
    searchPage: {
      searchPlaceholder: '电影、电视剧、影人',
      searchURL: 'https://api.douban.com/v2/movie/search',
      searchResultArrName: 'subjects'
    },
    detailPage: {
      returnBtnTxt: '电影',
      headerText: '电影详情'
    }
  }, {
    pageId: 'music',
    pageName: '音乐',
    icon: 'music',
    searchPage: {
      searchPlaceholder: '唱片名、表演者、ISRC',
      searchURL: 'https://api.douban.com/v2/music/search',
      searchResultArrName: 'musics'
    },
    detailPage: {
      returnBtnTxt: '音乐',
      headerText: '音乐详情'
    }
  }]
}

export default config
