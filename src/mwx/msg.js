import Lang from '../lang/lang'
import {
  Promise,
} from '../libs/es6-promise'

export default {
  /**
   * loding 状态
   * @param {any} string
   */
  loading(title) {
    wx.showLoading({
      title,
    })
  },
  /**
   * 关闭loading状态
   */
  loadingClose() {
    wx.hideLoading()
  },
  /**
   * 消息提示
   * @param {string} [title='成功']
   * @param {number} [time=1000]
   */
  title(title = Lang.Success, time = 1000) {
    wx.showToast({
      title,
      duration: time,
    })
  },
  warnTitle(title = '遇到错误啦', time = 1000) {
    wx.showToast({
      title,
      // image: '/img/warn-circle.svg',
      image: '/img/warning.png',
      duration: time,
    })
  },
  /**
   * 微信模态框显示内容
   * @param {any} content
   */
  showModal(content, title = '') {
    wx.showModal({
      title,
      content,
      showCancel: false,
    })
  },
  /**
   * 微信模态框显示内容 是否执行操作
   * @param {any} content
   */
  showModalNoCancel(content, title = '', cb) {
    wx.showModal({
      showCancel: false,
      title,
      content,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          cb(true)
        } else if (res.cancel) {
          console.log('用户点击取消')
          cb(false)
        }
      },
    })
  },
  /**
   * 微信模态框显示内容 是否执行操作
   * @param {any} content
   */
  showModalNoCancelAsync(content, title = '') {
    return new Promise((resolve) => {
      wx.showModal({
        showCancel: false,
        title,
        content,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            resolve(true)
          } else if (res.cancel) {
            console.log('用户点击取消')
            resolve(false)
          }
        },
      })
    })
  },
  /**
   * 微信模态框显示内容 是否执行操作
   * @param {any} content
   */
  showModalCancel(content, title = '', cb) {
    wx.showModal({
      title,
      content,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          cb(true)
        } else if (res.cancel) {
          console.log('用户点击取消')
          cb(false)
        }
      },
    })
  },
  /**
   * 微信模态框显示内容 是否执行操作
   * @param {any} content
   */
  showModalCancelAsync(content, title = '') {
    return new Promise((resolve) => {
      wx.showModal({
        title,
        content,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            resolve(true)
          } else if (res.cancel) {
            console.log('用户点击取消')
            resolve(false)
          }
        },
      })
    })
  },
}