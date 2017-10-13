import {
  Promise,
} from '../libs/es6-promise'
import HTTP from '../util/http'
import CONFIG from '../config'


export default {
  /**
   * Display the specified resource.
   * @param {any} id
   * @returns
   */
  store(id) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group/option/${id}`

      const group = HTTP.get(url)

      group.then((res) => {
        console.log(`create++${res}`)
        console.log(res)
        resolve(res)
      })

      group.catch((err) => {
        console.log(`create++${err}`)
        resolve(false)
      })
    })
  },
}