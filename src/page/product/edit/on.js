import Product from '../../../controller/placardEdit'

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