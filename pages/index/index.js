//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    expressNu : null,
    expressInfo: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  btnClick : function(){
    var that = this
    app.getExpressInfo(this.data.expressNu,function(data){
        // console.log(data.result)
        that.setData({expressInfo:data.result})
    })
  },
  input: function(e){
    // console.log(e)
    this.setData({expressNu:e.detail.value})
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
