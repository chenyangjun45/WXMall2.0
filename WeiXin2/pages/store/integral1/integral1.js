// pages/store/integral1/integral1.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      currentID: 0,
      currentId: 0,
      showView: true,
      hidden: true,
      num: '506000',
      quick: '3000',
      unuse: '3000',
      integralType: ['全部积分', '餐饮积分', '影院积分', '购物积分', "购物积分"],
      payment: ['全部收支', '只看收入', '只看支出'],
      integralDetail: [
         {
            time: '07:01',
            money: '5000',
            tipNum: '45678765',
            forType: '购物积分',
            getNum: '+500'
         }, {
            time: '07:01',
            money: '5000',
            tipNum: '45678765',
            forType: '购物积分',
            getNum: '+500'
         }, {
            time: '07:01',
            money: '5000',
            tipNum: '45678765',
            forType: '购物积分',
            getNum: '+500'
         }
      ]
   },

   //监听页面加载
   onLoad: function (options) {
      showView: (options.showView == "true" ? true : false);
   },

   //改变显示状态属性
   onChangeShowState: function () {
      var that = this;
      that.setData({
         showView: (!that.data.showView)
      })
   },

   //改变点击事件后的颜色背景
   onChangeType: function (e) {
      var that = this;
      that.setData({
         currentID: e.currentTarget.dataset.idx
      })
   },
   onChangeWay: function (e) {
      var that = this;
      that.setData({
         currentId: e.currentTarget.dataset.idx
      })
   },
   showChoose: function () {
      this.setData({
         hidden: (!this.data.hidden)
      });
   },
   searchIntegral:function(e){
      this.setData({
         hidden: (!this.data.hidden)
      });
   },
   turnStore:function(){
      wx.navigateTo({
         url: '../integralStore/integralStore',
      })
   },
   turnRule:function(){
      wx.navigateTo({
         url: '../integralRule/integralRule',
      })
   },
})