// 来源控制层
import Print from '../util/print'

import Option from '../provider/option'

export default {
  source(ops) {
    Print.Log(ops)
    const source = ops.source
    const id = ops.id
    const user = ops.user
    if (!id) {
      return
    }
    if (!source) {
      return
    }
    if (!user) {
      return
    }
    Option.source(id, user)
  },
}