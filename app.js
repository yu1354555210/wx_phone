//app.js
var appConfig = ({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  getExpressInfo: function(phone,cb){
      wx.request({
        url: 'http://apis.juhe.cn/mobile/get?phone='+ phone +'&dtype=&key=10cf9f44a04392ed032aaf6526060ac3',
        data: {
          x: '' ,
          y: ''
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
          // console.log(res.data)
          cb(res.data)
        }
      })
  },

  globalData:{
    userInfo:null
  }
})

App(appConfig)