// stack
import Stack from '../mwx/stack'
import StorageWX from '../mwx/storage'

export default {
  description() {
    const vm = Stack.page()
    const description = StorageWX.get(StorageWX.description)
    if (description) {
      vm.setData({
        description,
      })
    }
    const imageList = StorageWX.get(StorageWX.imageList)
    const image = StorageWX.get(StorageWX.image)

    if (imageList) {
      vm.setData({
        imageList,
        image,
      })
    }
  },
}