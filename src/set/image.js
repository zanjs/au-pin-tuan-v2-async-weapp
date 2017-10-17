import Stack from '../mwx/stack'
import Config from '../config'

export default {
  ImageList(arr) {
    const vm = Stack.page()
    const len = arr.length
    const imageList = [{}, {}, {}, {}]
    const image = []
    let i
    for (i = 0; i < len; i += 1) {
      const item = arr[i]
      if (item) {
        const obj = {
          wxfile: Config.FileHost + item,
          src: Config.FileHost + item,
          path: item,
        }

        // imageList.push(obj)
        imageList[i] = obj
        image.push(Config.FileHost + item)
      }
    }

    vm.setData({
      imageList,
      image,
    })
  },
}