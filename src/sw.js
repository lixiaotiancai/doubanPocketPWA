var cacheName = 'bs-0-0-0'
var apiCacheName = 'api-0-0-0'
var cacheFiles = [
  './#/',
  './index.html',
  './bundle.js',
  './style.css'
]

// 监听install事件，安装完成后，进行文件缓存
self.addEventListener('install', function (e) {
  console.log('Service Worker 状态： install')
  var cacheOpenPromise = caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheFiles)
  })
  e.waitUntil(cacheOpenPromise)
})

// let cacheData = null

// self.addEventListener('message', function (e) {
//   cacheData = e.data
// })

self.addEventListener('fetch', function (e) {
  // 需要缓存的xhr请求
  var cacheRequestUrls = [
    '/book/search?',
    '/movie/search?',
    '/music/search?',
    '.jpg',
    '.png',
    '.gif'
  ]

  // 判断当前请求是否需要缓存
  var needCache = cacheRequestUrls.some(function (url) {
    return e.request.url.indexOf(url) > -1
  })

  if (needCache) {
    // 需要缓存
    // 使用fetch请求数据，并将请求结果clone一份缓存到cache
    // 此部分缓存后在browser中使用全局变量caches获取
    let cacheUrl = e.request.url.replace(/&callback.*?$/, '')

    e.respondWith(
      caches.match(cacheUrl).then(function (cache) {
        return cache || fetch(e.request).then(function (response) {
          caches.open(apiCacheName).then(function (cache) {
            cache.put(cacheUrl, response)
          })
          return response.clone()
        })
      })
    )

    // caches.match(e.request).then(function (cache) {
    //   return cache || fetch(e.request).then(function (response) {
    //     caches.open(apiCacheName).then(function (cache) {
    //       cache.put(cacheUrl, response)
    //     })
    //   })
    // })

    // caches.open(apiCacheName).then(function (cache) {
    //   return fetch(e.request).then(function (response) {
    //     let cacheUrl = e.request.url.replace(/&callback.*?$/, '')
    //     cache.put(cacheUrl, response.clone())
    //   })
    // })
  }
  /* ******************************* */
  else {
    // 非api请求，直接查询cache
    // 如果有cache则直接返回，否则通过fetch请求
    e.respondWith(
      caches.match(e.request).then(function (cache) {
        return cache || fetch(e.request)
      }).catch(function (err) {
        console.log(err)
        return fetch(e.request)
      })
    )
  }
})

self.addEventListener('activate', function (e) {
  // console.log('Service Worker 状态： activate')
  var cachePromise = caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (key) {
      if (key !== cacheName && key !== apiCacheName) {
        return caches.delete(key)
      }
    }))
  })
  e.waitUntil(cachePromise)
  return self.clients.claim()
})
