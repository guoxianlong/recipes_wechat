// pages/recipesdt/recipesdt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipeName:'黄瓜',
    imgUrl: 'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Cucumber_preview.jpeg',
    steps:[
      {step:'eat'},
      {step:'eat'},
      {step:'eat'},
      {step:'eat'}]
  },

  /**
   * 生命周期函数--监听页面加载
   * options 菜谱名称 后期可能是id
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.id,
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})