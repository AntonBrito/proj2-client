'use strict'
// remove signIn and signOut
const app = require('../scripts/app.js')

const onSignUpSuccess = (data) => {
  app.user = data.user
  console.log('Sign Up Working')
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#already-member').addClass('hidden')
}

// TODO Create function for SignUp Failure

const onSignInSuccess = (data) => {
  app.user = data.user
  console.log('Sign in Working')
  // console.log('Log of data.game => ' + data.user)
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
}

// TODO Create function for SignIn failure

const changePasswordSuccess = () => {
  console.log('Password Change Successful')
}

// TODO Create function for Change Password Failure

const signOutSuccess = () => {
  app.user = null
  console.log('Sign Out Successful')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#already-member').removeClass('hidden')
}

const loopGames = function (data) {
  for (let i = 0; i < data.games.length; i++) {
    $('#gameStats').append('<p>' + data.games[i].id + '    ' + data.games[i].game_name + '    ' + data.games[i].game_platform + '    ' + data.games[i].game_year + '</p>')
  }
}

const getSuccess = function (data) {
  console.log('got here')
  console.log(data.games.length)
  $('#gameStats').click(loopGames(data))

  // $('#gameStats').html('<div class="successMessage"> Gams Played:' + data.games.length + '</div>')
}

const onCreateGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
}

const onEditGameSuccess = (data) => {
  // app.game = data.game
  // app.game.id = data.game.id
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  getSuccess,
  onCreateGameSuccess,
  onEditGameSuccess
}
