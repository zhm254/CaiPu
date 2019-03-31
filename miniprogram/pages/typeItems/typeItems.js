// miniprogram/pages/typeItems/typeItems.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeItems: []
  },
  goItem: function(e) {
    wx.navigateTo({
      url: '../item/item?item=' + JSON.stringify(e.currentTarget.dataset.item)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (this.data.typeItems != []) {
      this.data.typeItems = [];
      this.setData({
        typeItems: this.data.typeItems
      });
    }
    this.data.typeItems = JSON.parse(options.typeItems);
    this.setData({
      typeItems: this.data.typeItems
    });
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