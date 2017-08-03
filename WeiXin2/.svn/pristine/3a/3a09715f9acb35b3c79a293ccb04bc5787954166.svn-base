// pages/user/setBirthday/setBirthday.js
// var url ='http://www.clr.org.cn/member/';
var url = 'https://66567266.qcloud.la/';

const date = new Date()
const years = []
const months = []
const days = []
const days31 = []
const days30 = []
const days29 = []
const days28 = []
for (let i = 1910; i <= date.getFullYear(); i++) {
   years.push(i)
}

for (let i = 1; i <= 12; i++) {
   months.push(i)
}

for (let i = 1; i <= 31; i++) {
   days.push(i)
}
for (let i = 1; i <= 31; i++) {
   days31.push(i)
}
for (let i = 1; i <= 30; i++) {
   days30.push(i)
}
for (let i = 1; i <= 29; i++) {
   days29.push(i)
}
for (let i = 1; i <= 28; i++) {
   days28.push(i)
}
function StringBuffer() {
   this.buffer = [];
}
StringBuffer.prototype = {
   constructor: StringBuffer,
   append: function (str) {
      this.buffer.push(str);
      return this;
   },
   toString: function () {
      return this.buffer.join("");
   }
},
   Page({

      /**
       * 页面的初始数据
       */
      data: {
         userid: '',
         pickerHidden: true,
         hidden: true,
         nocancel: false,
         birthday: '1988-04-10',
         tips: '重要提醒：生日只能输入一次，不可修改。根据所填生日，能够享受关于生日的优惠或特权，请认真输入。',
         confirmText: '生日只能输入一次，不可修改。根据所填生日，能够享受关于生日的优惠或特权',
         confirmText1: '确定是:',
         confirmText2: ' ?',

         years: years,
         year: date.getFullYear(),
         months: months,
         month: date.getMonth() + 1,
         days: days,
         days31: days31,
         days30: days30,
         days29: days29,
         days28: days28,
         day: 1,
         year: date.getFullYear(),
         value: [date.getFullYear(), date.getMonth(), 0],
      },
      choseDate: function () {
         this.setData({
            pickerHidden: false
         });
      },
      bindChange: function (e) {

         const val = e.detail.value;
         /**
          * 判断是否是闰年，然后级联变化天数
          */
         var Year = this.data.years[val[0]];
         var days1 = this.data.days31;
         if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
            switch (this.data.months[val[1]]) {
               case 1:
                  days1 = this.data.days31;
                  break;
               case 2:
                  days1 = this.data.days29;
                  break;
               case 3:
                  days1 = this.data.days31;
                  break;
               case 4:
                  days1 = this.data.days30;
                  break;
               case 5:
                  days1 = this.data.days31;
                  break;
               case 6:
                  days1 = this.data.days30;
                  break;
               case 7:
                  days1 = this.data.days31;
                  break;
               case 8:
                  days1 = this.data.days31;
                  break;
               case 9:
                  days1 = this.data.days30;
                  break;
               case 10:
                  days1 = this.data.days31;
                  break;
               case 11:
                  days1 = this.data.days30;
                  break;
               case 12:
                  days1 = this.data.days31;
                  break;
            }
         } else {
            switch (this.data.months[val[1]]) {
               case 1:
                  days1 = this.data.days31;
                  break;
               case 2:
                  days1 = this.data.days28;
                  break;
               case 3:
                  days1 = this.data.days31;
                  break;
               case 4:
                  days1 = this.data.days30;
                  break;
               case 5:
                  days1 = this.data.days31;
                  break;
               case 6:
                  days1 = this.data.days30;
                  break;
               case 7:
                  days1 = this.data.days31;
                  break;
               case 8:
                  days1 = this.data.days31;
                  break;
               case 9:
                  days1 = this.data.days30;
                  break;
               case 10:
                  days1 = this.data.days31;
                  break;
               case 11:
                  days1 = this.data.days30;
                  break;
               case 12:
                  days1 = this.data.days31;
                  break;
            }
         }
         this.setData({
            days: days1,
            year: this.data.years[val[0]],
            month: this.data.months[val[1]],
            day: this.data.days[val[2]]
         })
      },
      btn_sure: function (event) {
         var uId = this.data.userid;
         var bir = this.data.birthday;
         var pages = getCurrentPages();
         var prevPage = pages[pages.length - 2]; //上一个页面
         wx.showModal({
            title: '',
            content: '生日只能输入一次，不可修改。根据所填生日，能够享受关于生日的优惠或特权。\n确定是：' + bir + '？',
            success: function (res) {
               if (res.confirm) {
                  console.log('用户点击确定');
                  //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
                  prevPage.setData({
                     birthday: bir,
                  })
                  wx.navigateBack();
                  //发起修改云端数据库数据请求
                  wx.request({
                     url: url + 'modifyBirthday',
                     header: {
                        "content-type": "application/x-www-form-urlencoded"
                     },
                     method: "POST",
                     data: {
                        userId: uId,
                        birthday: bir,
                     },
                     success: function (res) {
                        console.log("修改成功");
                     },
                     fail: function () {
                        console.log("修改失败");
                     }
                  });
               } else if (res.cancel) {
                  console.log('用户点击取消')
               }
            }
         })
      },
      cancel0: function () {
         this.setData({
            pickerHidden: true
         });
      },
      confirm0: function () {
         var buffer = new StringBuffer();
         var y = this.data.year.toString();
         var m = this.data.month.toString();
         var d = this.data.day.toString();
         buffer.append(y).append("-")
            .append(m).append("-").append(d);
         var result = buffer.toString();
         this.setData({
            birthday: result,
            pickerHidden: true,
         });
         console.log("clicked confirm");
      },
      btn_today: function (e) {
         this.setData({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            value: [date.getFullYear(), date.getMonth(), date.getDate() - 1],
         });
      },
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
         this.setData({
            birthday: options.V_birthday,
            userid: options.v_userid,

         });
         console.log(options.V_birthday);
         console.log(options.v_userid)
      },
   })