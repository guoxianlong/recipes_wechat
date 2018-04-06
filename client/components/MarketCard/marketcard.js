// components/MarketCard/marketcard.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 图片地址
    imgUrl: {
      type: String,
      value: 'https://s1.ax1x.com/2018/03/20/9Tz0J0.jpg'
    },
    // 菜市场名称
    name: {
      type: String,
      value: '菜市场名称'
    },
    // 菜市场地址
    address: {
      type: String,
      value: '菜市场地址'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToDetails: function(){
      this.triggerEvent("goToDetails")
    }
  }
})
