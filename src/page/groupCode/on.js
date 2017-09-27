import Config from '../../config'
import SetCode from '../../set/code'

export default {
  onLoad(ops) {
    // Create.onLoad()
    const id = ops.id
    const codeUrl = `${Config.ApiHost}api/code/${id}/v1`
    SetCode.codeURL(codeUrl)
  },
  onShow() {

  },
}