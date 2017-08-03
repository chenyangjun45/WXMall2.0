// integralStore.js
// var url = 'http://www.clr.org.cn/member/';
var url = 'https://66567266.qcloud.la/';
var userId = '';
var integralCount = '';
var ticket1_name = '10元优惠券';
var ticket1_des = '满20元立减';
var ticket2_name = '小鹿公仔';
var ticket2_des = '100积分特大优惠';
var tickets = [{
   ticket_type: 1,
   ticket_price: '30',
   pic: '',
   ticket_name_info: '价值30元优惠券',
   ticket_scope: '使用范围：无限制',
   ticket_condition: '使用条件：满3000积分且消费满300元',
   ticket_term_of_validity: '有效时间：2017-07-01～2018-07-01'
},
{
   ticket_type: 2,
   ticket_price: '30',
   pic: '../../../images/integralStore1.png',
   ticket_name_info: '价值30元优惠券',
   ticket_scope: '使用范围：无限制',
   ticket_condition: '使用条件：满3000积分且消费满300元',
   ticket_term_of_validity: '有效时间：2017-07-01～2018-07-01'
},
{
   ticket_type: 3,
   ticket_price: '30',
   pic: '',
   ticket_name_info: '价值30元优惠券',
   ticket_scope: '使用范围：无限制',
   ticket_condition: '使用条件：满3000积分且消费满300元',
   ticket_term_of_validity: '有效时间：2017-07-01～2018-07-01'
},
{
   ticket_type: 3,
   ticket_price: '30',
   pic: '',
   ticket_name_info: '价值30元优惠券',
   ticket_scope: '使用范围：无限制',
   ticket_condition: '使用条件：满3000积分且消费满300元',
   ticket_term_of_validity: '有效时间：2017-07-01～2018-07-01'
},
{
   ticket_type: 3,
   ticket_price: '30',
   pic: '',
   ticket_name_info: '价值30元优惠券',
   ticket_scope: '使用范围：无限制',
   ticket_condition: '使用条件：满3000积分且消费满300元',
   ticket_term_of_validity: '有效时间：2017-07-01～2018-07-01'
}
]
Page({

   /**
    * 页面的初始数据
    */
   data: {
      ticket1_name: ticket1_name,
      ticket1_des: ticket1_des,
      ticket2_name: ticket2_name,
      ticket2_des: ticket2_des,
      tickets: tickets,
      hideLoader: false,
      hideSmallLoader: true,
      hideDrowDown1: true,
      hideDrowDown2: true,
      drowdown_data: '',
      drowdown_data2: '',
      allposition: ''
   },
   disappear: function (options) {
      this.setData({
         hideLoader: true
      });
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      userId = options.userId;
      integralCount = options.integralCount;
      this.setData({
         userId: options.userId,
         integralCount: options.integralCount,
      });
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
   bindtapIntegral: function () {
      if (userId == 'undefined') {
         wx.navigateTo({
            url: '../../user/register/register',
         });
      } else {
         wx.navigateTo({
            url: '../integral/integral?userId=' + userId + '&integralCount=' + integralCount,
         });
      }
   },
   bindtapConversion: function () {
      if (userId == 'undefined') {
         wx.navigateTo({
            url: '../../user/register/register',
         });
      } else {
         wx.navigateTo({
            url: '../conversion/conversion?userId=' + userId,
         })
      }
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
         ticket_type: 1,
         ticket_price: '30',
         pic: '',
         ticket_name_info: '价值30元优惠券',
         ticket_scope: '使用范围：无限制',
         ticket_condition: '使用条件：满3000积分且消费满300元',
         ticket_term_of_validity: '有效时间：2017-07-01～2018-07-01'
      };
      tickets.push(x);
      if (this.data.hideDrowDown1 == false) {
         this.setData({
            hideDrowDown1: true,
            tickets: tickets,
            hideSmallLoader: true,
         });
      }
      if (this.data.hideDrowDown2 == false) {
         this.setData({
            hideDrowDown2: true,
            tickets: tickets,
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