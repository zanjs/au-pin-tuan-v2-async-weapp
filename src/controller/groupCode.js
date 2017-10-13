import SetCode from '../set/code'
import StorageWx from '../mwx/storage'

export default {
  QRCode(codeUrl) {
    const userInfo = StorageWx.get(StorageWx.userInfo)
    if (!userInfo) {
      return
    }
    const userId = userInfo.id
    const CodeUrl2 = `${codeUrl}?id=${userId}`
    SetCode.codeURL(CodeUrl2)
  },
}