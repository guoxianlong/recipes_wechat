// components/MySearch/mysearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // placeholer文字
    inputText: {
      type: String,
      value: "请输入......"
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
    search: function(value){
      var myEventDetail = {}
      this.triggerEvent("search",value)
    }
  }
})
