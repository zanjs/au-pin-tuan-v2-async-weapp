import {
  Promise,
} from '../libs/es6-promise'
import MSG from '../mwx/msg'

export default {
  create() {
    return new Promise((resolve) => {
      const content = '确定要发起吗?'
      const asy = MSG.showModalCancelAsync(content)
      asy.then((bool) => {
        resolve(bool)
      })
    })
  },
}