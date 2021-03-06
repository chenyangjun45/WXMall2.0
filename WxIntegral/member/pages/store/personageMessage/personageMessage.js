// pages/component/personageMessage/personageMessage.js
var sourceType = [['camera'], ['album'], ['camera', 'album']]
var sizeType = [['compressed'], ['original'], ['compressed', 'original']]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    hideLoader: false,
    userImage: '',
    nickname: '',
    male: '',
    birthday: '',
    numberPlate: '',
    address: '',
    otherInformation: '',
    //
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  chooseImage: function () {
    var that = this;
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    wx.chooseImage({
      count: 1,
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      success: function (res) {
        console.log(res)
        that.setData({
          userImage: res.tempFilePaths,
        });
        //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
          usrImg: res.tempFilePaths,
        })
        //向端口发起请求，上传照片到服务器，同时将图片路径发送给服务器相关字段
      }
    })
  },
  disappear: function () {
    this.setData({
      hideLoader: true,
    })
  },
  setBirth: function () {
    wx.navigateTo({
      url: '../../user/setBirthday/setBirthday?v_userid=' + this.data.userId + '&V_birthday=' + this.data.birthday,
    })
  },
  setMale: function () {
    wx.navigateTo({
      url: '../../user/setGender/setGender?V_male=' + this.data.male + '&userId=' + this.data.userId,
      complete: function (res) {
        console.log(res)
      }
    })
  },
  setCar: function () {
    wx.navigateTo({
      url: '../../user/setCardNo/setCardNo?V_numberPlate=' + this.data.numberPlate + '&userId=' + this.data.userId,
      complete: function (res) {
        console.log(res)
      }
    })
  },
  setNick: function () {
    wx.navigateTo({
      url: '../../user/nicknameChange/nicknameChange?V_nickname=' + this.data.nickname + '&userId=' + this.data.userId,
      complete: function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userId0;
    var userImage0;
    var nickname0;
    var male0;
    var birthday0;
    var numberPlate0;
    var address0;
    wx.request({
      url: 'http://172.27.50.159:8080/ums-openApi/register',
      method: "POST",
      async:true,
      data: {
        "sign": "9D0E87DBB8B63F34D74B7FDF17F3B989",
        "wxId": "wxId02613",
        "methodVer": "1.0",
        "method": "register",
        "nonceStr": "nonceStr00727",
        "mobile": "mobile50994",
        "appKey": "chinaumsandroidpos"
      },
      dataType:"JSON"
      ,
      header: {
        //'content-type': 'application/json'
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        // userImage0 = res.data.userImage;
         nickname0 = res.data.memName;
         male0 = res.data.sex;
        // birthday0 = res.data.birthday.substring(0,10);
        numberPlate0 = res.data.carNumber;
       address0 = res.data.address;
      },
      complete: function () {
        if (userImage0 == null) {
          userImage0 = getApp().globalData.userInfo.avatarUrl;
        }
        that.setData({
          userId: userId0,
          userImage: userImage0,
          nickname: nickname0,
          male: male0,
          birthday: birthday0,
          numberPlate: numberPlate0,
          address: address0,
          hideLoader: true,
        })
      },

    });
  }
})