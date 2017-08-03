// pages/component/integral/integral.js
var url = 'http://www.clr.org.cn/member/';
Page({

   /**
    * 页面的初始数据
    */
   data: {
      currentTab: 0,
      num: '506000',
      loadingHidden: false,
      time:'',
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      var payType = this.data.currentTab + 1;
      var userId = options.userId;
      var that = this;
      that.setData({
         userId: options.userId,
      });

      wx.request({
         url: url + 'findByPayType?payType=' + payType + '&userId=' + userId,
         data: {},
         dataType: 'json',
         method: 'GET',
         header: { 'content-type': 'application/json' },
         success: function (res) {
            var time=that.data.time;
            for (var i = 0; i < res.data.length; i++) {
               var integralDate = res.data[i].integralDate
               time=integralDate.substring(11,16)
               res.data[i].integralDate = integralDate.substring(5,10)
               if (res.data[i].integralType==1){
                  res.data[i].integralType='购物积分';
               }
            }
            that.setData({
               integralDetail: res.data,
               time:time,
            });
            setTimeout(function () {
               loadingHidden: true;
            }, 1500);
         }
      })
   },

   swichNav: function (e) {
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
         return false;
      } else {
         that.setData({
            currentTab: e.target.dataset.current,
         })
      }
   },

   turnStore: function () {
      wx.navigateTo({
         url: '../integralStore/integralStore',
      })
   },
   turnRule: function () {
      wx.navigateTo({
         url: '../integralRule/integralRule',
      })
   },

})