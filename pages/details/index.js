// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://wx.yogalt.com/file/images/img1.jpeg',
      'https://wx.yogalt.com/file/images/img2.jpeg',
      'https://wx.yogalt.com/file/images/img3.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabIs:true,
    specIs:false,
  },
  tabFun(e){
    console.log(e)
    if (e.currentTarget.dataset.state == 1){
      this.setData({
        tabIs:true
      })
    }else{
      this.setData({
        tabIs: false
      })
    }
  },
  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/cart/index"
    });
  },
  specFun(){
    this.setData({
      specIs: !this.data.specIs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.request({
      url: 'https://wx.yogalt.com/api/v1/home/getItem',
      data:{
        id:options.id
      },
      success: (res) => {
        console.log(res.data)
      }
    })
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