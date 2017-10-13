import Config from '../../config'
import GroupCode from '../../controller/groupCode'

export default {
  onLoad(ops) {
    // Create.onLoad()
    const id = ops.id
    const codeUrl = `${Config.ApiHost}api/code/${id}/v1`
    GroupCode.QRCode(codeUrl)
  },
  onShow() {

  },
}