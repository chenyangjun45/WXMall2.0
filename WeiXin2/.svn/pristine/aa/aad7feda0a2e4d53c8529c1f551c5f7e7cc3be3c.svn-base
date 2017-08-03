// fullReduction.js
var url = 'https://66567266.qcloud.la/';
//变量要定义在外面才能调用
var countAll = 1;
//var points = 3000;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    integral: '',
    couponTypeId: '',
    price: '',
    couponType: '',
    full_reduction_name: '满300立减30',
    startTime: '',
    endTime: '',
    // term_of_validity: '<ul><li>使用时间：2017-07-01 ～ 2018-07-01（周末、节假日通用）</li></ul>',
    condition: '',
    illustrate: '<ul><li>发生退货时，最多可退买家实际付款金额，优惠券不可退</li><li>说明具体内容</li></ul>',
    count: countAll,
    allPoints: '',
    hideLoader: false
  },
  addOne: function (event) {
    countAll++;
    var p_prices = this.data.price * countAll;//计算总积分价格
    this.setData({
      count: countAll,
      allPoints: p_prices,
    });
  },
  reduceOne: function (event) {
    countAll--;
    if (countAll <= 0) {
      countAll = 1;
      wx.showModal({
        title: "兑换提示",
        content: "已到最小数量！",
        showCancel: false,
        confirmText: "确定"
      })
    }
    var p_prices = this.data.price * countAll;//计算总积分价格
    this.setData({
      count: countAll,
      allPoints: p_prices,
    });
  },
  exchange: function (event) {
    var that = this;
    wx.showModal({
      title: '确定使用' + this.data.allPoints + '积分兑换' + this.data.count + '张？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          var V_integral = that.data.integral - that.data.allPoints;
          console.log(V_integral);
          //确定购买，发起请求
          //注：这是为了演示使用，实际开发时应使用一个接口，将所有操作在后台定义为一个事务。
          //这个操作类似购物，只有事务才能保证交易的安全性
          //向领券记录表插入记录
          wx.request({
            url: url + 'addMember',
            method: 'POST',
            data: {
              couponTypeId: that.data.couponTypeId,
              userId: that.data.userId,
              couponNum: that.data.count,
              conversion: '0',
              price: that.data.allPoints,
            },
            dataType: 'json',
            header: { "content-type": "application/x-www-form-urlencoded" },
            success: function (res) { }
          })
          //修改原始积分
          wx.request({
            url: url + 'modifyIntegral',
            method: 'POST',
            data: {
              integralCount: V_integral,
              userId: that.data.userId,
            },
            dataType: 'json',
            header: { "content-type": "application/x-www-form-urlencoded" },
            success: function (res) { }
          })
          //添加积分收支记录
          wx.request({
             url: url + 'addIntergral?userId=' + that.data.userId + '&integralType=' + 3 + '&integralNum=' + that.data.allPoints + '&payment=' + that.data.allPoints + '&payType=' + 1,
            method: 'POST',
            data: {
            },
            dataType: 'json',
            header: { "content-type": "application/x-www-form-urlencoded" },
            success: function (res) { }
          })
          wx.navigateBack({
          });
        } else if (res.cancel) {
          //放弃购买，什么也不做
        }
      }
    })
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
    var jsonget = JSON.parse(options.couponData);
    console.log(jsonget);
    wx.setNavigationBarTitle({
      title: jsonget.couponType,
    })
    this.setData({
      hideLoader: true,
      couponTypeId: jsonget.couponTypeId,
      couponType: jsonget.couponType,
      condition: jsonget.condition,
      startTime: jsonget.startime,
      endTime: jsonget.endtime,
      price: jsonget.price,
      allPoints: jsonget.price,

      userId: options.userId,
      integral: options.integral,
    })
    console.log('integral:' + this.data.integral);
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

  }
})