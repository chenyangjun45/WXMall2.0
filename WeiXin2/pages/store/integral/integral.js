// pages/component/integral/integral.js
// var url = 'http://www.clr.org.cn/member/';
var url = 'https://66567266.qcloud.la/';
var num = 1;
var userId = '';
var integralCount='';
Page({

   /**
    * 页面的初始数据
    */
   data: {
      currentTab: 0,
      loadingHidden: false,
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      userId = options.userId;
      var that = this;
      integralCount = options.integralCount;
      var overCount = integralCount - 100;
      var willCount = integralCount - 50;
      that.setData({
         userId: options.userId,
         integralCount: integralCount,
         overCount: overCount,
         willCount: willCount,
      });

      wx.request({
         url: url + 'findByPayType?payType=0' + '&userId=' + userId,
         data: {},
         dataType: 'json',
         method: 'GET',
         header: { 'content-type': 'application/json' },
         success: function (res) {
            var time = that.data.time;
            for (var i = 0; i < res.data.length; i++) {
               var integralDate = res.data[i].integralDate
               time = integralDate.substring(11, 16)
               res.data[i].integralDate = integralDate.substring(5, 10)
               if (res.data[i].integralType == 1) {
                  res.data[i].integralType = '购物积分';
               } else if (res.data[i].integralType == 2) {
                  res.data[i].integralType = '影院积分';
               } else {
                  res.data[i].integralType = '餐饮积分';
               }
            }
            that.setData({
               integralDetail: res.data,
               time: time,
            });
            setTimeout(function () {
               loadingHidden: true;
            }, 1500);
         }
      })
   },

   swichNav: function (e) {
      var that = this;
      num = e.target.dataset.current;
      if (this.data.currentTab === e.target.dataset.current) {
         return false;
      } else {
         that.setData({
            currentTab: e.target.dataset.current,
         })
      }
      wx.request({
         url: url + 'findByPayType?payType=' + num + '&userId=' + userId,
         data: {},
         dataType: 'json',
         method: 'GET',
         header: { 'content-type': 'application/json' },
         success: function (res) {
            var time = that.data.time;
            for (var i = 0; i < res.data.length; i++) {
               var integralDate = res.data[i].integralDate
               time = integralDate.substring(11, 16)
               res.data[i].integralDate = integralDate.substring(5, 10)
               if (res.data[i].integralType == 1) {
                  res.data[i].integralType = '购物积分';
               } else if (res.data[i].integralType == 2) {
                  res.data[i].integralType = '影院积分';
               } else {
                  res.data[i].integralType = '餐饮积分';
               }
            }
            that.setData({
               integralDetail: res.data,
               time: time,
            });
            setTimeout(function () {
               loadingHidden: true;
            }, 1500);
         }
      })
   },

   turnStore: function () {
      wx.navigateTo({
         url: '../integralStore/integralStore?userId=' + userId + '&integralCount=' + integralCount,
      })
   },
   turnRule: function () {
      wx.navigateTo({
         url: '../integralRule/integralRule',
      })
   },

})