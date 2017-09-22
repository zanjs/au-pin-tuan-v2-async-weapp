import Product from '../../../controller/productShow'
import CodeController from '../../../controller/code'

export default {
  bindKeyInput(e) {
    Product.bindKeyInput(e)
  },
  bindKeyInputPhone(e) {
    Product.bindKeyInputPhone(e)
  },
  bindKeyInputName(e) {
    Product.bindKeyInputName(e)
  },
  bindKeyInputWechat(e) {
    Product.bindKeyInputWechat(e)
  },
  bindKeyInputAddress(e) {
    Product.bindKeyInputAddress(e)
  },
  tapOpen() {
    Product.tapOpen()
  },
  tapDesc() {
    Product.tapDesc()
  },
  tapEdit() {
    Product.tapEdit()
  },
  tapEmail() {
    Product.tapEmail()
  },
  tapImage(e) {
    Product.tapImage(e)
  },
  tapCodeImage() {
    Product.tapCodeImage()
  },
  tapCreateCode() {
    CodeController.goTo()
  },
  tabAvatar() {
    Product.tabAvatar()
  },
  tabSecrecy() {
    Product.tabSecrecy()
  },
  tabCommentDel(e) {
    Product.tabCommentDel(e)
  },
  tabPlusCut(e) {
    Product.tabPlusCut(e)
  },
  formSubmit(e) {
    Product.formSubmit(e)
  },
  submit() {},
}