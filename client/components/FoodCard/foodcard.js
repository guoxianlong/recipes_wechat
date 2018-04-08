// components/FoodCard/foodcard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 食材图片地址
    imgUrl: {
      type: String,
      value: 'https://s1.ax1x.com/2018/03/20/9Tz0J0.jpg'
    },
    // 食材名称
    name: {
      type: String,
      value: '食材名称'
    },
    // 食材价格
    price: {
      type: Number,
      value: 1
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
    goToDetails: function() {
      this.triggerEvent("goToDetails")
    }
  }
})
