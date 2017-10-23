import Product from '../../../controller/productShow'
import Option from '../../../controller/options'

export default {
  onLoad(options) {
    Product.onLoad(options)
    Product.init(options.id)
    Option.source(options)
  },
  onShow() {
    // Product.init()
  },
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh() {
    Product.init()
    wx.stopPullDownRefresh()
  },
  /**
   * 分享
   * @returns
   */
  onShareAppMessage() {
    const data = this.data
    const title = data.title || '澳洲群一键接龙'
    const desc = data.group ? data.group.description || '' : ''
    return {
      'title': title,
      'desc': desc,
      'path': `/page/product/show/show?id=${data.id}`,
    }
  },
  onReady() {},
  onHide() {},
  onUnload() {},
}