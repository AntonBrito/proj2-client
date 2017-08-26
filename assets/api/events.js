'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields.js')
const app = require('../scripts/app.js')

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

const onChangePassword = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.onChangePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onGetGames = function (event) {
  event.preventDefault()
  let data = app.user.game
  console.log(data)
  api.index(data)
    .then(ui.getSuccess)
    .catch(ui.fail)
  console.log(api.index())
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetGames
}
