import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router } from 'react-router-dom'
import rootReducer from './reducers'
import history from './router/history'
import App from './containers/App'

import './scss/style.scss'
import './assets/fonts/iconfont.css'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {scope: './'})
    .then(function (registration) {
      return new Promise(resolve => {
        Notification.requestPermission()
        resolve(registration)
      })
    })
    .then(function (registration) {
      var title = '口袋豆瓣PWA'
      var options = {
        icon: 'images/icons/book-128.png',
        body: '欢迎使用口袋豆瓣PWA~~',
        tag: 'pwa-starter',
        renotify: true
      }

      let timer = null

      if (!timer) {
        timer = setTimeout(() => {
          registration.showNotification(title, options)
          timer = null
        }, 3000)
      }
    })
}

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
