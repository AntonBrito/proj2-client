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

const onSignUpFailure = () => {
  $('#suError').removeClass('hidden')
}

const onSignInSuccess = (data) => {
  app.user = data.user
  console.log('Sign in Working')
  // console.log('Log of data.game => ' + data.user)
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#gameStats').removeClass('hidden')
  $('#get-games').removeClass('hidden')
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
  $('#gameStats').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('.gameRow').remove()
}

const loopGames = function (data) {
  for (let i = 0; i < data.games.length; i++) {
    $('#gameStats').append(
      '<tr class="gameRow">' +
        '<td>' + data.games[i].id + '</td>' +
        '<td>' + data.games[i].game_name + '</td>' +
        '<td>' + data.games[i].game_platform + '</td>' +
        '<td>' + data.games[i].game_genre + '</td>' +
        '<td>' + data.games[i].game_year + '</td>' +
      '</tr>'
    )
  }
}

const getSuccess = function (data) {
  console.log('got here')
  console.log(data.games.length)
  $('.gameRow').remove()
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

const onDeleteGameSuccess = (data) => {
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
  onEditGameSuccess,
  onDeleteGameSuccess,
  onSignUpFailure
}
