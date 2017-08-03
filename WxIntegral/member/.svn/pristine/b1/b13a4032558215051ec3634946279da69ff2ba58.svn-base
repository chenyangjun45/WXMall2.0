// pages/member/member.js
Page({

   data: {
      showModalStatus: false,
      num: 1,
      userid: '1',
      mobile:"",
      integralCount: 0,
      money:0,
      userName:"未登录",
      userSex:"",
      birthday:"1992-12-17",
      userImage: "../../images/user.png",
      cardNumber:"",
      province:"湖北省",
      memberType:"会员等级",
      memberNum:"",
   },

   powerDrawer: function (e) {
      var currentStatu = e.currentTarget.dataset.statu;
      if (currentStatu == "open") {
         this.setData({
            num: 0.3
         });
      } else {
         this.setData({
            num: 1
         });
      }
      this.util(currentStatu)
   },

   util: function (currentStatu) {
      var animation = wx.createAnimation({
         duration: 200,
         timingFunction: "linear",
         delay: 0
      });

      this.animation = animation;

      animation.opacity(0).rotateX(-100).step();

      this.setData({
         animationData: animation.export()
      })

      setTimeout(function () {

         animation.opacity(1).rotateX(0).step();

         this.setData({

            animationData: animation

         })

         if (currentStatu == "close") {
            this.setData(

               {
                  showModalStatus: false

               }
            );
         }

      }.bind(this), 200)

      if (currentStatu == "open") {

         this.setData(
            {
               showModalStatus: true
            }
         );
      }

   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
   },
   /**
    *页面实现跳转 
    */
   myinter: function () {
      wx.navigateTo({
         url: '../../pages/store/',
      })
   },
   bindtapPersonageMessage: function () {
      wx.navigateTo({
         //url: '../store/personageMessage/personageMessage?V_userid=' + this.data.member.userid,
         url: '../user/register/register',
      })
   },
   bindtapIntegral: function () {
      wx.navigateTo({
         url: '../store/integral/integral?userId=' + this.data.member.userid,
      })
   },
   bindtapMyCoupon: function () {
      wx.navigateTo({
         url: '../store/myCoupon/myCoupon',
      })
   },
   bindtapMemberPrivilege: function () {
      wx.navigateTo({
         url: '../store/memberPrivilege/memberPrivilege?V_userid=' + this.data.member.userid,
      })
   },
   bindtapBirthday: function () {
      wx.navigateTo({
         url: '../store/birthday/birthday',
      })
   },
   bindtapIntegralStore: function () {
      wx.navigateTo({
         url: '../store/integralStore/integralStore',
      })
   },
   bindtapCoupon: function () {
      wx.navigateTo({
         url: '../store/coupon/coupon',
      })
   },
})