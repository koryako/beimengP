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
    var tapname=e.currentTarget.dataset.tapname;
    console.log(tapname);
    wx.navigateTo({
      url: '../'+tapname+'/'+tapname,
    })
  },
})
