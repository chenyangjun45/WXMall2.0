// pages/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  currentTab:0,
  allcouponlist: [
    {
      price: 30,

      range: "无限制",
      condition: "满3000积分且消费满300元",
      startime: "2017-07-01",
      endtime: "2018-07-01",
      coupontype: "01"
    }],
  salecouponlist: [
    {
      price: 30,
   
      range: "无限制",
      condition: "满3000积分且消费满300元",
      startime: "2017-07-01",
      endtime: "2018-07-01",
      coupontype: "03"
    }
   
  ],
  timecouponlist: [
    {
      price: 30,
   
      range: "无限制",
      condition: "满3000积分且消费满300元",
      startime: "2017-07-01",
      endtime: "2018-07-01",
      coupontype: "01"
    }

  ],
 luckycouponlist: [
    {
      price: 30,
      
      range: "无限制",
      condition: "满3000积分且消费满300元",
      startime: "2017-07-01",
      endtime: "2018-07-01",
      coupontype: "04"
    }

  ],
  discouponlist: [
    {
      price: 30,
    
      range: "无限制",
      condition: "满3000积分且消费满300元",
      startime: "2017-07-01",
      endtime: "2018-07-01",
      coupontype: "01"
    }

  ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
   wx:wx.request({
     url: 'http://www.clr.org.cn/member/findCoupon',
     data: {
      
     },
     header: {'content-type': 'application/json'},
     method: 'GET',
    
     success: function(res) {
       //测试是否能获取数据,已成功,成功之后将其赋值给allcouponlist
      //console.log(res.data);
      for(var i=0;i<res.data.length;i++)
      {var s = res.data[i].startime;
       var e=res.data[i].endtime;
      res.data[i].startime=s.substring(0,10);
      res.data[i].endtime = s.substring(0, 10);
      }
      console.log(res.data);
      
      that.setData({
       allcouponlist:res.data,
      });
       
     },
   
     
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
  
  },


  swichNav: function (e) {
    console.log(e);
    var that = this;
   
   
      that.setData({
        currentTab: e.target.dataset.current,
      })
    
  }
 


})