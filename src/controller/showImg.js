import Evnet from '../mwx/event'
// image
import Image from '../mwx/image'

export default {
  /**
   * 点击查看当前图片
   * @param {any} e 
   */
  one(e) {
    const src = Evnet.src(e)
    Image.previewImage(src, [src])
  },
}