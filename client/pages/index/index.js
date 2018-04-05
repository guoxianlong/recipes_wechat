//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
Page({
  data:{
    adImg: [
      'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Cauliflower_preview.jpeg',
      'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Beetroot_preview.jpeg',
      'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Chicory_preview.jpeg'
    ],
    news: [
      { title: "南天菜市场倒闭了", date:new Date().toLocaleDateString() },
      { title: "东天菜市场开业了" ,date:new Date().toLocaleDateString()},
      { title: "北天菜市场开业了" ,date:new Date().toLocaleDateString()}
    ],
    shoppingList: [{
      id: 0,
      label: 'default',
      checked: true
    }]
  },
  onLoad: function(options){
    qcloud.request({
      url: 'https://easy-mock.com/mock/5ab3141317cfc314f32c4c23/api/shoppinglist',
      login: true,
      success: function(result) {
        this.setData({
          shoppingList: result.data.data.shoppingList,
        })
      }.bind(this)
    })
  }
    
})
