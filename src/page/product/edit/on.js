import Product from '../../../controller/productEdit'

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