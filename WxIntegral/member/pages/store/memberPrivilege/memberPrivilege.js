// pages/store/memberPrivilege/memberPrivilege.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    memImg: '',
    usrImg: '',
    hideLoader: false,
    memberGrade: '',
    memberNumber: '',
    tipsText: "提示：会员特权跟商户活动或会员等级有关，若有疑问请咨询商户。",
    //样式
    bg1: '',
    bg2: '',
    bg3: '',
    bg4: '',
    bg5: '',
    //特权数组
    prevArray: [{
      imgPath: "../../../images/member7.png",
      txt: "免费停车",
    },
    {
      imgPath: "../../../images/member8.png",
      txt: "生日礼遇",
    },
    {
      imgPath: "../../../images/member9.png",
      txt: "新品体验",
    },
    {
      imgPath: "../../../images/member10.png",
      txt: "积分通享",
    },
    ]
  },
  getRull: function () {
    wx.navigateTo({
      url: '../integralRule/integralRule',
      complete: function (res) {
        console.log(res)
      }
    });

    console.log("跳转")
  }, disappear: function () {
    this.setData({
      hideLoader: true,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userId0;
    var userImage0;
    var memberNum0;
    var memberType0;
    var CardImg0;
    var hideLoad;
    var bg10;
    var bg20;
    var bg30;
    var bg40;
    var bg50;
    wx.request({
      url: 'http://www.clr.org.cn/member/findUserById?userId=' + options.V_userid,
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        userId0 = options.V_userid;
        userImage0 = res.data.userImage;
        memberNum0 = res.data.memberNum;
        memberType0 = res.data.memberType;
        hideLoad = true;
        console.log(memberNum0);
      },
      complete: function () {
        if (userImage0 == null) {
          userImage0 = "../../../images/user1.png";
        }
        switch (memberType0) {
          case "普通会员":
            CardImg0 = "../../../images/memberCard.png";
            bg10 = "full bg1";
            bg20 = "bg";
            bg30 = "bg";
            bg40 = "bg";
            bg50 = "bg bg5";
            break;
          case "白银会员":
            CardImg0 = "../../../images/memberCard1.png";
            bg10 = "full bg1";
            bg20 = "full";
            bg30 = "bg";
            bg40 = "bg";
            bg50 = "bg bg5";
            break;
          case "黄金会员":
            CardImg0 = "../../../images/memberCard2.png";
            bg10 = "full bg1";
            bg20 = "full";
            bg30 = "full";
            bg40 = "bg";
            bg50 = "bg bg5";
            break;
          case "白金会员":
            CardImg0 = "../../../images/memberCard3.png";
            bg10 = "full bg1";
            bg20 = "full";
            bg30 = "full";
            bg40 = "full";
            bg50 = "bg bg5";
            break;
          case "钻石会员":
            CardImg0 = "../../../images/memberCard4.png";
            bg10 = "full bg1";
            bg20 = "full";
            bg30 = "full";
            bg40 = "full";
            bg50 = "full bg5";
            break;
          default:
            CardImg0 = "../../../images/memberCard.png";
            bg10 = "full bg1";
            bg20 = "bg";
            bg30 = "bg";
            bg40 = "bg";
            bg50 = "bg bg5";
            break;

        }
        that.setData({
          userId: userId0,
          usrImg: userImage0,
          memberNumber: memberNum0,
          memberGrade: memberType0,
          memImg: CardImg0,
          hideLoader: hideLoad,
          bg1: bg10,
          bg2: bg20,
          bg3: bg30,
          bg4: bg40,
          bg5: bg50,
        })
      },
    });
  },
})