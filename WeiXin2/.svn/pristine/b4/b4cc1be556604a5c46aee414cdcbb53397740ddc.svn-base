// pages/member/member.js
// var url = 'http://www.clr.org.cn/member/';
var url = 'https://66567266.qcloud.la/';
var userId = '';
var integralCount = 0;

var app = getApp();//获取应用实例

Page({

  data: {
    showModalStatus: false,
    num: 1,
  },

  powerDrawer: function (e) {
    if (userId == null) {
      wx.navigateTo({
        url: '../user/register/register',
      })
    } else {
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
    }
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
        this.setData({
          showModalStatus: false
        });
      }

    }.bind(this), 200)

    if (currentStatu == "open") {
      this.setData({
        showModalStatus: true
      });
    }

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hasLogin = true;
    var that = this;
    userId = options.userId;
    wx.getUserInfo({
      success: function (res) {
        if (res.userInfo.nickName != null)
          hasLogin = false;
        that.setData({
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl,
        })
      }
    });
    if (!hasLogin) {
      wx.openSetting({
        success: function (res) {
          if (!res.authSetting["scope.userInfo"] || !res.authSetting["scope.userLocation"]) {
            //这里是授权成功之后 填写你重新获取数据的js
            that.getLogiCallback('', function () {
              wx.getUserInfo({
                success: function (res) {
                  that.setData({
                    nickName: res.userInfo.nickName,
                    userInfoAvatar: res.userInfo.avatarUrl,
                  })
                },
              });
              // callback('')
            })
          }
        }
      })
    };
    if (userId != null) {
      wx.request({
        url: url + 'findUserById?userId=' + userId,
        data: {},
        dataType: 'json',
        method: 'GET',
        header: { 'content-type': 'application/json' },
        success: function (res) {
          integralCount = res.data.integralCount;
          that.setData({
            money: res.data.money,
            integralCount: res.data.integralCount,
            mobile: res.data.mobile,
            memberType: res.data.memberType,
            memberNum: res.data.memberNum,
            userName: res.data.userName,
          });
        },
      });
      wx.request({
        url: url + 'findCouponTypeById?userId=' + userId,
        data: {},
        dataType: 'json',
        method: 'GET',
        header: { 'content-type': 'application/json' },
        success: function (res) {
          var count = 0;
          for (var i = 0; i < res.data.length; i++) {
            count += res.data[i].couponNum;
          }
          that.setData({
            count: count,
          });
        }
      });
    };
  },
  /**
* 生命周期函数--监听页面显示
*/
  onShow: function () {
    var hasLogin = true;
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        if (res.userInfo.nickName != null)
          hasLogin = false;
        that.setData({
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl,
        })
      }
    });
    if (!hasLogin) {
      wx.openSetting({
        success: function (res) {
          if (!res.authSetting["scope.userInfo"] || !res.authSetting["scope.userLocation"]) {
            //这里是授权成功之后 填写你重新获取数据的js
            that.getLogiCallback('', function () {
              wx.getUserInfo({
                success: function (res) {
                  that.setData({
                    nickName: res.userInfo.nickName,
                    userInfoAvatar: res.userInfo.avatarUrl,
                  })
                },
              });
              // callback('')
            })
          }
        }
      })
    };
    if (userId != null) {
      wx.request({
        url: url + 'findUserById?userId=' + userId,
        data: {},
        dataType: 'json',
        method: 'GET',
        header: { 'content-type': 'application/json' },
        success: function (res) {
          integralCount = res.data.integralCount;
          that.setData({
            money: res.data.money,
            integralCount: res.data.integralCount,
            mobile: res.data.mobile,
            memberType: res.data.memberType,
            memberNum: res.data.memberNum,
            userName: res.data.userName,
          });
        },
      });
      wx.request({
        url: url + 'findCouponTypeById?userId=' + userId,
        data: {},
        dataType: 'json',
        method: 'GET',
        header: { 'content-type': 'application/json' },
        success: function (res) {
          var count = 0;
          for (var i = 0; i < res.data.length; i++) {
            count += res.data[i].couponNum;
          }
          that.setData({
            count: count,
          });
        }
      });
    };
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
    if (userId == null) {
      wx.navigateTo({
        url: '../user/register/register',
      })
    } else {
      wx.navigateTo({
        url: '../store/personageMessage/personageMessage?V_userid=' + userId,
      })
    }
  },
  userRegister: function () {
    wx.navigateTo({
      url: '../user/register/register',
    })
  },
  bindtapIntegral: function () {
    if (userId == null) {
      wx.navigateTo({
        url: '../user/register/register',
      })
    } else {
      wx.navigateTo({
        url: '../store/integral/integral?userId=' + userId + '&integralCount=' + integralCount,
      })
    }
  },
  bindtapMyCoupon: function () {
    if (userId == null) {
      wx.navigateTo({
        url: '../user/register/register',
      })
    } else {
      wx.navigateTo({
        url: '../store/myCoupon/myCoupon?userId=' + userId,
      })
    }
  },
  bindtapMemberPrivilege: function () {
    if (userId == null) {
      wx.navigateTo({
        url: '../user/register/register',
      })
    } else {
      wx.navigateTo({
        url: '../store/memberPrivilege/memberPrivilege?V_userid=' + userId,
      })
    }
  },
  bindtapBirthday: function () {
    wx.navigateTo({
      url: '../store/birthday/birthday',
    })
  },
  bindtapIntegralStore: function () {
    wx.navigateTo({
      url: '../store/integralStore/integralStore?userId=' + userId + '&integralCount=' + integralCount,
    })
  },
  bindtapCoupon: function () {
    wx.navigateTo({
      url: '../store/coupon/coupon?userId=' + userId + '&integralCount=' + integralCount,
    })
  },
  buildding: function () {
    wx.showModal({
      showCancel: false,
      title: '',
      content: '该功能正在建设中，敬请期待！',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
        }
      }
    })
  }
})