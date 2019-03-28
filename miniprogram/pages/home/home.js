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
  goJccp: function() {
    if (this.data.jccp != []) {
      wx.navigateTo({
        url: '../jccp/jccp?jccp=' + JSON.stringify(this.data.jccp)
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '该类别暂无项目',
        showCancel: false
      })
    }

  },
  goZhcx: function() {
    if (this.data.zhcx != []) {
      wx.navigateTo({
        url: '../zhcx/zhcx?zhcx=' + JSON.stringify(this.data.zhcx)
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '该类别暂无项目',
        showCancel: false
      })
    }

  },
  goHp: function() {
    if (this.data.hp != []) {
      wx.navigateTo({
        url: '../hp/hp?hp=' + JSON.stringify(this.data.hp)
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '该类别暂无项目',
        showCancel: false
      })
    }
  },
  goGdxc: function() {
    if (this.data.gdxc != []) {
      wx.navigateTo({
        url: '../gdxc/gdxc?gdxc=' + JSON.stringify(this.data.gdxc)
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '该类别暂无项目',
        showCancel: false
      })
    }
  },
  goWgcp: function() {
    if (this.data.wgcp != []) {
      wx.navigateTo({
        url: '../wgcp/wgcp?wgcp=' + JSON.stringify(this.data.wgcp)
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
        console.log(this.data.jccp);
      }
    })
    db.collection('caiPu').where({
      foodtype: '中华菜系'
    }).get({
      success: (res) => {
        this.setData({
          zhcx: res.data
        });
        console.log(this.data.zhcx);
      }
    })
    db.collection('caiPu').where({
      foodtype: '烘焙'
    }).get({
      success: (res) => {
        this.setData({
          hp: res.data
        });
        console.log(this.data.hp);
      }
    })
    db.collection('caiPu').where({
      foodtype: '各地小吃'
    }).get({
      success: (res) => {
        this.setData({
          gdxc: res.data
        });
        console.log(this.data.gdxc);
      }
    })
    db.collection('caiPu').where({
      foodtype: '外国菜谱'
    }).get({
      success: (res) => {
        this.setData({
          wgcp: res.data
        });
        console.log(this.data.wgcp);
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