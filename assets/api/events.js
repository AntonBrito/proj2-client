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
    .fail(ui.onSignUpFailure)
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

const onCreateGame = function (event) {
  event.preventDefault()
  const nameText = $('#gName').val()
  const platformText = $('#gPlatform').val()
  const genreText = $('#gGenre').val()
  const yearText = $('#gYear').val()
  api.createGame(nameText, platformText, genreText, yearText)
    .then(ui.onCreateGameSuccess)
    .catch(ui.fail)
}

const onEditGame = function (event) {
  event.preventDefault()
  const idText = $('#egId').val()
  const nameText = $('#egName').val()
  const platformText = $('#egPlatform').val()
  const genreText = $('#egGenre').val()
  const yearText = $('#egYear').val()
  api.editGame(idText, nameText, platformText, genreText, yearText)
    .then(ui.onEditGameSuccess)
    .catch(ui.fail)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  const idText = $('#dgId').val()
  api.deleteGame(idText)
    .then(ui.onDeleteGameSuccess)
    .catch(ui.fail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetGames,
  onCreateGame,
  onEditGame,
  onDeleteGame
}
