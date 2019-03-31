wx.cloud.init();
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    jccp: [],
    zhcx: [],
    hp: [],
    gdxc: [],
    wgcp: []
  },
  goTypeItems: function(e) {
    if (e.currentTarget.dataset.typeitems != []) {
      wx.navigateTo({
        url: '../typeItems/typeItems?typeItems=' + JSON.stringify(e.currentTarget.dataset.typeitems)
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '该类别暂无项目',
        showCancel: false
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
    db.collection('caiPu').where({
      foodtype: '家常菜谱'
    }).get({
      success: (res) => {
        this.setData({
          jccp: res.data
        });
      }
    })
    db.collection('caiPu').where({
      foodtype: '中华菜系'
    }).get({
      success: (res) => {
        this.setData({
          zhcx: res.data
        });
      }
    })
    db.collection('caiPu').where({
      foodtype: '烘焙'
    }).get({
      success: (res) => {
        this.setData({
          hp: res.data
        });
      }
    })
    db.collection('caiPu').where({
      foodtype: '各地小吃'
    }).get({
      success: (res) => {
        this.setData({
          gdxc: res.data
        });
      }
    })
    db.collection('caiPu').where({
      foodtype: '外国菜谱'
    }).get({
      success: (res) => {
        this.setData({
          wgcp: res.data
        });
      }
    })
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