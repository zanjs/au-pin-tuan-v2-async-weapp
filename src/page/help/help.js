Page({
  data: {},
  onLoad() {
  },
  onShow() {},
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  /**
   * 分享
   * @param {any} page
   * @returns
   */
  onShareAppMessage() {
    return {
      'title': 'title',
      'desc': 'desc',
      'path': '/page/group/group',
    }
  },
  onReady() {},
  onHide() {},
  onUnload() {},
})