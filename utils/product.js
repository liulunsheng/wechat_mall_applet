const app = getApp()

function getProducts (resolve) {
  app.request({
    url: `${app.globalData.API_URL}/products`,
    header: { 'Content-Type': 'application/json' },
    success: resolve,
    fail: function(){}
  })
}

function getSlides (resolve) {
  app.request({
    url: `${app.globalData.API_URL}/home_slides`,
    header: { 'Content-Type': 'application/json' },
    success: resolve,
    fail: function(){}
  })
}

function getCategories (data, resolve, reject) {
  app.request({
    url: `${app.globalData.API_URL}/products?type=${data}`,
    header: { 'Content-Type': 'application/json'},
    success: resolve,
    fail: reject
  })
}


module.exports = {
  getProducts (resolve) {
    return getProducts(resolve)
  },

  getSlides (resolve) {
    return getSlides(resolve)
  },

  getCategories (data, resolve, reject) {
    return getCategories(data, resolve, reject)
  }
}
