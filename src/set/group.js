// stack
import Stack from '../mwx/stack'
import FnString from '../fn/string'
import Istorage from '../mwx/storage'
// env
import Env from '../env'
import EventM from '../mwx/event'
import DateTool from '../util/date'
import SetImage from './image'

export default {
  Group(data) {
    const vm = Stack.page()
    const group = data
    const title = group.title
    const description = group.description
    let desc = group.description
    let descMore = false
    let descBtn = false
    if (group.image) {
      group.image = group.image.split(',')
      SetImage.ImageList(group.image)
        // group.image = FnImage.AddHost(group.image)
    }

    if (description.length > 50) {
      desc = FnString.subString(description, 50, '...')
      descMore = true
      descBtn = true
    }

    const qrCodePath = group.qr_code_path || false

    let codeSrc = Env.codeApi + group.id

    if (qrCodePath) {
      codeSrc = Env.storagePath + qrCodePath
    }

    group.time = DateTool.format(group.created_at)

    vm.setData({
      group,
      title,
      description,
      descMore,
      descBtn,
      desc,
      codeSrc,
      required_u_name: group.required_u_name || 0,
      required_u_phone: group.required_u_phone || 0,
      required_u_wechat: group.required_u_wechat || 0,
      required_u_address: group.required_u_address || 0,
    })
  },
  ImageListAdd() {
    const vm = Stack.page()
    const imageList = vm.data.imageList
    const obj = {
      src: '',
    }
    imageList.push(obj)
    vm.setData({
      imageList,
    })
  },
  comment(comment) {
    const vm = Stack.page()
    if (comment) {
      vm.setData({
        comment: comment.comment,
      })
    }
  },
  isOpenAsyn(userInfo) {
    const vm = Stack.page()
    const data = vm.data
    const group = data.group

    const headId = group.head_id.toString() || ''
    const userId = userInfo.id.toString() || ''

    vm.setData({
      switch: headId === userId,
    })
  },
  description(e) {
    const vm = Stack.page()
    const description = EventM.value(e)
    // vm.setData({
    //   description,
    // })
    vm.data.description = description
    Istorage.set(Istorage.description, description)
  },
  title(e) {
    const vm = Stack.page()
    const title = EventM.value(e)
    vm.data.title = title
    // vm.setData({
    //   title,
    // })
    Istorage.set(Istorage.title, title)
  },
  products(products) {
    const vm = Stack.page()
    vm.setData({
      products,
    })
  },
}