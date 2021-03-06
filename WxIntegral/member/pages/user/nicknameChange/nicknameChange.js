// pages/user/nicknameChange/nicknameChange.js
var url = 'http://www.clr.org.cn/member/';

Page({
   data: {
      focus: false,
      nick: '',
   },
   bindKeyInput: function (e) {
      this.setData({
         nick: e.detail.value
      })
   },
   bindReplaceInput: function (e) {
      var value = e.detail.value
      var pos = e.detail.cursor
      var left
      if (pos !== -1) {
         // 光标在中间
         left = e.detail.value.slice(0, pos)
         // 计算光标的位置
         pos = left.replace(/11/g, '2').length
      }

      // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
      return {
         value: value.replace(/11/g, '2'),
         cursor: pos
      }

      // 或者直接返回字符串,光标在最后边
      // return value.replace(/11/g,'2'),
   },
   bindHideKeyboard: function (e) {
      if (e.detail.value === '123') {
         wx.hideKeyboard()
      }
   },
   changeName: function (e) {
      var nickname1 = this.data.nick;
      var userId=this.data.userId;
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面 
      //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
      prevPage.setData({
         nickname: nickname1,
      })
      wx.navigateBack()
      wx.request({
         url: url + 'modifyName?userName='+nickname1+'&userId='+userId,
         method:'POST',
         data:{},
         dataType:'json',
         header: { "content-type": "application/x-www-form-urlencoded" },
         success:function(res){}
      })
   },
   clrarInput: function (e) {
      this.setData({
         nick: ''
      });
   },/**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
      this.setData({
         nick: options.V_nickname,
         userId: options.userId,
      });
   },

})
