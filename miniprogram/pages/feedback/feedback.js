// miniprogram/pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback: ''
  },
  getFeedback: function(e) {
    this.setData({
      feedback: e.detail.value
    });
  },
  handleSubmit: function() {
    if (this.data.feedback.trim()) {
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 3000
      })
      this.setData({
        feedback: ''
      });
    } else if (!this.data.feedback.trim()) {
      wx.showToast({
        title: '请输入你的意见',
        icon: 'none',
        duration: 3000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})