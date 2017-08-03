// fullReduction.js
//变量要定义在外面才能调用
var countAll=1;
var points=3000;
var ticket;
Page({

  /**
   * 页面的初始数据
   */
  // full_reduction_name: '满300立减30',
  // term_of_validity: '<ul><li>使用时间：2017-07-01 ～ 2018-07-01（周末、节假日通用）</li></ul>',
  // condition: '<ul><li>积分达到3000</li></ul>',
  // illustrate: '<ul><li>发生退货时，最多可退买家实际付款金额，满减券不可退</li><li>说明具体内容</li></ul>',
  // count: countAll,
  // allPoints: points,
  // hidden: hidden,
  // hideLoader: false
  //  + ticket.startime + ticket.endtime,
  data: {
    full_reduction_name: '满300立减30',
    term_of_validity: '<ul><li></li></ul>',
    condition: '<ul><li></li></ul>',
    illustrate: '<ul><li>发生退货时，最多可退买家实际付款金额，满减券不可退</li><li>说明具体内容</li></ul>',
    count:countAll,
    allPoints: points,
    hidden:true,
    hideLoader: false
  },
  addOne: function (event) {
    countAll++;
    this.setData({
      count:countAll,
      allPoints: points * countAll,
    });
  },
  reduceOne: function(event){
    countAll--;
    if(countAll<=0){
      countAll=1;
      wx.showModal({
        title: "兑换提示",
        content: "已到最小数量！",
        showCancel: false,
        confirmText: "确定"
      })
    }
    this.setData({
      count: countAll,
      allPoints: points * countAll,
    });
  },
  exchange:function(event){
    this.setData({
      hidden: false
    });
  },
  cancel: function(event){
    this.setData({
      hidden: true
    });
  },
  //提交积分兑换信息
  confirm:function(event){
    console.log('测试积分');
    console.log(points);
    console.log(countAll);
    wx.request({
      url: 'http://www.clr.org.cn/member/findUser',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    });
    // this.setData({
    //   hidden: true
    // });
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
  getFullReduction: function (options){
    var that = this;
    wx.request({
      url: 'http://www.clr.org.cn/member/findCouponByType?couponType=01',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data[0]);
        ticket = res.data[0];
        console.log(ticket.startime);
        //优惠券有效期
        var s = ticket.startime;
        var e = ticket.endtime;
        ticket.startime = s.substring(0, 10);
        ticket.endtime = s.substring(0, 10);
        var term_val = '<ul><li>使用时间：' + ticket.startime + ' ～ ' + ticket.endtime+'（周末、节假日通用）</li></ul>';
        //优惠券使用条件
        var tmp_condition = '<ul><li>' + ticket.condition +'</li></ul>'
        that.setData({
          term_of_validity: term_val,
          condition: tmp_condition,
        });
      }
    });
  },
  getPoints: function (options) {
    var that = this;
    wx.request({
      url: 'http://www.clr.org.cn/member/findUserById?userId=1',
      method:'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        // points = res.data.integralCount;
        that.setData({
          allPoints: res.data.integralCount,
        });
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获得积分信息
    this.getPoints();
    //加载满减券的信息
    this.getFullReduction();
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