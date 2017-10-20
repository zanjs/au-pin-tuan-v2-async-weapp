import Product from '../../../controller/product'

export default {
  onLoad() {
    Product.onLoad()
  },
  onShow() {
    Product.init()
  },
}