//logs.js
const util = require('../../utils/util.js')

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
  onTapClick: function (e) {
    console.log(e.currentTarget.dataset.postid)
    wx.navigateTo({
      url: '../postlist/postlist',
    })
  },
})
