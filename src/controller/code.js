import Go from '../go'
import Stack from '../mwx/stack'

export default {
  goTo() {
    const vm = Stack.page()
    const data = vm.data
    const id = data.id
    Go.groupCode(id)
  },
}