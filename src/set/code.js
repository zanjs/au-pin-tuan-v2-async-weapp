import Stack from '../mwx/stack'

export default {
  codeURL(codeURL) {
    const vm = Stack.page()
    vm.setData({
      codeURL,
    })
  },
}