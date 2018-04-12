// components/RecipeCard/recipecard.js
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
    // 菜谱名称
    name: {
      type: String,
      value: '菜谱名称'
    },
    // 菜谱作者
    author: {
      type: String,
      value: '菜谱作者'
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
      this.triggerEvent("goToDetails", this.properties)
    }
  }
})
