import Product from '../../../controller/product'

export default {
  onLoad(options) {
    Product.onLoad(options)
  },
  onShow() {
    Product.init()
  },
  onReady() {},
  onHide() {},
  onUnload() {},
}