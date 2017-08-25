'use strict'
const app = require('../scripts/app.js')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp
}
