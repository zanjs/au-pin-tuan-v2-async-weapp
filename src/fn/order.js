/**
 * Created by Anla-E on 2017/7/24.
 */

export default {
  orderCount(list) {
    const len = list.length
    let i
    let count = 0
    for (i = 0; i < len; i += 1) {
      const item = list[i]
      count += item.quantity
    }
    return count
  },
  myQuantity(product, myorder) {
    const len = myorder.length
    let i
    let quantity = 0
    const pId = product.id
    for (i = 0; i < len; i++) {
      const item = myorder[i]
      const productId = item.product_id
      if (productId == pId) {
        quantity = item.quantity
        break
      }
      console.log(product)
      console.log(item)
    }

    return quantity
  },
}