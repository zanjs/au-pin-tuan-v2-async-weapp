
import Msg from '../mwx/msg'

export default {
  open(title = '加载中...') {
    Msg.loading(title)
  },
  close() {
    Msg.loadingClose()
  },
}