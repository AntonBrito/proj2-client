'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.onSignUpSuccess)
    .fail(ui.onSignUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .fail(ui.onSignInFail)
}

module.exports = {
  onSignUp,
  onSignIn
}
