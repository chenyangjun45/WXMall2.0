// pages/store/birthday/birthday.js

Page({

   /**
    * 页面的初始数据
    */
  // loadingHidden: false
   data: {
      privileges_details1: '1、生日当天会员酒水免费；',
      privileges_details2: '2、充值或者消费金额（元）按照1:1转化为积分；',
      privileges_details3: '3、参与活动获得对应经验值；',
      privileges_details4: '* 注：具体活动能获得的经验值数根据具体活动内容决定，有疑问请联系商家。',
      privileges_method1: '1、可在积分商城兑换优惠券；',
      privileges_method2: '2、可在积分商城兑换优惠券；',
      hideLoader:false
   },
   disappear: function (options) {
     this.setData({
       hideLoader: true
     });
     //  wx.showToast({
     //    title: "loading",
     //    icon: "loading"
     //  })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
    //  wx.showToast({
    //    title: "loading",
    //    icon: "loading"
    //  })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {
 
    //  wx.hideToast();
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