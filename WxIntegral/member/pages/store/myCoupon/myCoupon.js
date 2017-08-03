// pages/store/myCoupon/myCoupon.js
var allcouponlist = [
  {
    price: 30,
    title: "价值30元的优惠券",
    range: "无限制",
    condition: "满3000积分且消费满300元",
    usetime: "2017-07-01～2018-07-01",
    coupontype: "01"
  },
  {
    price: 30,
    title: "价值30元的优惠券",
    range: "无限制",
    condition: "满3000积分且消费满300元",
    usetime: "2017-07-01～2018-07-01",
    coupontype: "04"
  },
  {
    price: 30,
    title: "价值30元的优惠券",
    range: "无限制",
    condition: "满3000积分且消费满300元",
    usetime: "2017-07-01～2018-07-01",
    coupontype: "02"
  },
  {
    price: 30,
    title: "价值30元的优惠券",
    range: "无限制",
    condition: "满3000积分且消费满300元",
    usetime: "2017-07-01～2018-07-01",
    coupontype: "03"
  },
  {
    price: 30,
    title: "价值30元的优惠券",
    range: "无限制",
    condition: "满3000积分且消费满300元",
    usetime: "2017-07-01～2018-07-01",
    coupontype: "03"
  }


];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    allcouponlist:allcouponlist,
    salecouponlist: [
      {
        price: 30,
        title: "价值30元的优惠券",
        range: "无限制",
        condition: "满3000积分且消费满300元",
        usetime: "2017-07-01～2018-07-01",
        coupontype: "03"
      }

    ],
    timecouponlist: [
      {
        price: 30,
        title: "价值30元的优惠券",
        range: "无限制",
        condition: "满3000积分且消费满300元",
        usetime: "2017-07-01～2018-07-01",
        coupontype: "01"
      }

    ],
    luckycouponlist: [
      {
        price: 30,
        title: "价值30元的优惠券",
        range: "无限制",
        condition: "满3000积分且消费满300元",
        usetime: "2017-07-01～2018-07-01",
        coupontype: "04"
      }

    ],
    discouponlist: [
      {
        price: 30,
        title: "价值30元的优惠券",
        range: "无限制",
        condition: "满3000积分且消费满300元",
        usetime: "2017-07-01～2018-07-01",
        coupontype: "01"
      }

    ],
    hideLoader: false,
    hideSmallLoader: true,
    hideDrowDown1: true,
    hideDrowDown2: true,
    drowdown_data: '',
    drowdown_data2: '',
    allposition: ''
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

  
  swichNav: function (e) {
    console.log(e);
    var that = this;


    that.setData({
      currentTab: e.target.dataset.current,
    })

  },
  toCoupon:function(){
   wx.navigateTo({
     url: '../../../pages/store/coupon/coupon',
    
   })
  },

   upper: function () {

    this.setData({
      drowdown_data: '下拉刷新',
      hideSmallLoader: false,
      hideDrowDown1: false
    });
  },
  scroll_touchmove: function () {
    console.log("滑动");
    if (this.data.hideDrowDown1 == false || this.data.hideDrowDown2 == false) {
      this.setData({
        drowdown_data: '松开刷新',
        drowdown_data2: '松开刷新'
      });
    }
  },
  scroll_touchend: function () {
    console.log("滑动结束");
    var x = {
      price: 30,
      title: "价值30元的优惠券",
      range: "无限制",
      condition: "满3000积分且消费满300元",
      usetime: "2017-07-01～2018-07-01",
      coupontype: "03"
    };
    allcouponlist.push(x);
    if (this.data.hideDrowDown1 == false) {
      this.setData({
        hideDrowDown1: true,
        allcouponlist: allcouponlist,
        hideSmallLoader: true,
      });
    }
    if (this.data.hideDrowDown2 == false) {
      this.setData({
        hideDrowDown2: true,
        allcouponlist: allcouponlist,
      });
    }
  },
  lower: function () {
    this.setData({
      drowdown_data2: '上拉刷新',
      hideDrowDown2: false
    });
  },
  scroll: function () {
    if (true) {
    }
  }
})