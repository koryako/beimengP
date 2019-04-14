// pages/my/about/about.js
import {$wuxSelect} from '../../../dist/index'
import data from './data'
const isTel = (value) => !/^1[34578]\d{9}$/.test(value)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gitUrl:"https://github.com/xc1255178487/web_learn",
    visible3:false,
    moblevalue:'',
    title2:'上海/松江老城',
    title3:'中山街道',
    options1: data,
        value1: [],
        options2: [
            {
                value: 'shanghai',
                label: '上海',
                isLeaf: false,
            }
           
        ],
        value2: [],
        value3: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  copy:function(e){
    let that = this;
    let type = e.currentTarget.dataset.type-0;
    wx.setClipboardData({
      data: type==0?that.data.gitUrl:that.data.csdnUrl,
      success:function(){
        wx.showToast({
          title: '复制成功',
          icon:"success",
          duration:1000,
        })
      }
    })
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
        error: isTel(e.detail.value),
        value: e.detail.value,
    })
},
onFocus(e) {
    this.setData({
        error: isTel(e.detail.value),
    })
    console.log('onFocus', e)
},
onBlur(e) {
    this.setData({
        error: isTel(e.detail.value),
    })
    console.log('onBlur', e)
},
onConfirm(e) {
    console.log('onConfirm', e)
},
onClear(e) {
    console.log('onClear', e)
    this.setData({
        error: true,
        value: '',
    })
},
onError() {
    wx.showModal({
        title: 'Please enter 11 digits',
        showCancel: !1,
    })
},
onOpen1() {
  this.setData({ visible1: true })
},
onClose1() {
  this.setData({ visible1: false })
},
onChange1(e) {
  this.setData({ title1: e.detail.options.map((n) => n.label).join('/') })
  console.log('onChange1', e.detail)
},
onOpen2() {
  this.setData({ visible2: true })
},
onClose2() {
  this.setData({ visible2: false })
},
onChange2(e) {
  console.log('onChange2', e.detail)
  this.setData({ value2: e.detail.value, title2: e.detail.done && e.detail.options.map((n) => n.label).join('/') })
},
onLoadOptions(e) {
  console.log('onLoadOptions', e.detail)
  const { value } = e.detail
  const options2 = [...this.data.options2]

  wx.showLoading({ mask: true })

  setTimeout(() => {
      if (value[value.length - 1] === 'shanghai') {
          options2.forEach((n) => {
              if (n.value === 'shanghai') {
                  n.children = [
                      {
                          value: 'songjiangold',
                          label: '松江老城'
                      },
                      {
                          value: 'songjiangnew',
                          label: '松江新城'
                      },
                  ]
              }
          })
      } else if (value[value.length - 1] === 'hangzhou') {
          options2.forEach((n) => {
              if (n.value === 'hangzhou') {
                  n.children = [
                      {
                          value: 'ali',
                          label: '阿里巴巴'
                      },
                      {
                          value: '163',
                          label: '网易'
                      },
                  ]
              }
          })
      }

      wx.hideLoading()

      this.setData({ value2: value, options2 })
  }, 1000)
},
onClick1() {
  $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: [
          '荣都东侧',
          '荣都西侧',
          '同济雅筑',
          
      ],
      onConfirm: (value, index, options) => {
          console.log('onConfirm', value, index, options)
          if (index !== -1) {
              this.setData({
                  value1: value,
                  title1: options[index],
              })
          }
      },
  })
},

onClick2() {
  $wuxSelect('#wux-select2').open({
      value: this.data.value3,
      options: [
          '中山街道',
          '岳阳街道',
          
          
      ],
      onConfirm: (value, index, options) => {
          console.log('onConfirm', value, index, options)
          if (index !== -1) {
              this.setData({
                  value3: value,
                  title3: options[index],
              })
          }
      },
  })
},
})