// pages/register/register.js
var url = 'https://66567266.qcloud.la/';
Page({

   /**
    * 页面的初始数据
    */
   data: {
      teltext: "手机号:",
      inputwidth: 270,
      valitext: "验证码:",
      buttontext: "获取验证码",
      tips: "提示：补充您的手机号，我们能为您提供更加优质的会员服务。",
      telnumber: '',

      vernumber: '',

      time: 60,
      getbuttonshow: true,
      timebuttonshow: false,

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

   },

   /**
  * 点击关闭按钮事件
  */
   closetel: function () {
      this.setData({
         telnumber: '',


      })
   },
   closever: function () {
      this.setData({
         vernumber: '',

      })
   },
   /**
    * 响应用户输入手机号事件
    */
   bindTelInput: function (e) {

      this.setData({
         telnumber: e.detail.value,
      })
   },
   /**
  * 响应用户输入验证码事件
  */
   bindVerInput: function (e) {

      this.setData({
         vernumber: e.detail.value,
      })
   },
   /**
    * 响应登录事件
    */
   getVerification: function () {

      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
      if (this.data.telnumber.length == 0) {
         wx.showToast({
            title: '请输入手机号',
            duration: 2000,
            mask: true,

         })
      }
      else if (!myreg.test(this.data.telnumber)) {
         wx.showToast({
            title: '手机号格式错误',
            duration: 2000,
            mask: true,
         })
      }
      else {
         var c = 60;
         var that = this;
         var interval = setInterval(function () {
            c = c - 1;
            that.setData({
               time: c,
               timebuttonshow: true,
               getbuttonshow: false,
               inputwidth: 370
            });
            if (c == 0) {
               that.setData({
                  timebuttonshow: false,
                  getbuttonshow: true,
                  inputwidth: 270
               })
               clearInterval(interval);

            }

         }, 1000);


      }
   },
   /**
    * 响应登录事件
    */
   register: function () {
      //首先判断输入的验证码和手机接收到的验证码是否一致
      var userId = 0;
      var that = this;

      wx.request({
         url: url + 'login',
         data: {
            mobile: this.data.telnumber,
         },
         header: { 'content-type': 'application/json' },
         method: 'GET',
         success: function (res) {
            var input = that.data.vernumber;
            userId = res.data.userId;
            if (userId != null && input == '123456') {
               wx.navigateTo({
                  url: '../../member/member?userId=' + userId,
               })
            };
            if (input != '123456') {
               wx.showModal({
                  showCancel: false,
                  title: input,
                  content: '验证码错误，请重新输入！',
                  success: function (res) {
                     if (res.confirm) {
                        console.log('用户点击确定');
                     }
                  }
               })
            };

         },
      })
      
   }

})