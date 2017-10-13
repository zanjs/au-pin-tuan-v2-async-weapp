import Print from '../util/print'
import Option from '../model/option'

export default {
  source(id, user) {
    Print.Log(`进入${id}`)
    Option.store(id, user)
  },
}