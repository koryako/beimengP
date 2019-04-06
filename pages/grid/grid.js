//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    logs: []
  },
  onLoad: function () {
   // this.setData({
      //logs: (wx.getStorageSync('logs') || []).map(log => {
       // return util.formatTime(new Date(log))
     // })
    //})
  },
  onShow: function () {

    var that = this
    console.log("posts.js - onShow")
    if (this.data.update) {
      wx.startPullDownRefresh()
      that.refresh()
      this.setData({
        update: false
      })
    }

   

    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
       
   
           console.log(res);
      },
      fail: function () {
        that.userInfoAuthorize()
      }
    })
  },
  userInfoAuthorize: function () {
    var that = this
    console.log('authorize')
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) { // 存储用户信息
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo.nickName)
              console.log(util.formatTime(new Date()))
             
              wx.setStorage({
                key: app.globalData.userInfo,
                data: res.userInfo,
              })
              app.globalData.wechatNickName = res.userInfo.nickName
              app.globalData.wechatAvatarUrl = res.userInfo.avatarUrl
            }
          })
        } else { // 跳转到授权页面 
          wx.navigateTo({
            url: '/pages/authorize/authorize',
          })
        }
      }
    })
  },
  onTapClick: function (e) {
    var tapname=e.currentTarget.dataset.tapname;
    console.log(tapname);

    if(tapname){
      wx.navigateTo({
        url: '../'+tapname+'/'+tapname,
      })
    }else {
        wx.showModal({
          title: '敬请期待',
          content: '功能开发中',
          showCancel: false
        })
    }
  
  },
})
