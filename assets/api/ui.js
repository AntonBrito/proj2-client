'use strict'
// remove signIn and signOut
const app = require('../scripts/app.js')

const onSignUpSuccess = (data) => {
  app.user = data.user
  console.log('Sign Up Working')
  // $('#sign-up').addClass('hidden')
  // $('#sign-in').removeClass('hidden')
  // $('#already-member').addClass('hidden')
  $('#suError').addClass('hidden')
  $('.error-handling').children().remove()
  $('.error-handling').append('<p class="success-message">Sign Up Successfull')
  $('#su-modal').click()
  $('input:not([type="submit"]), textarea').val('')
}

const onSignUpFailure = () => {
  $('#suError').removeClass('hidden')
  $('input:not([type="submit"]), textarea').val('')
}

const onSignInSuccess = (data) => {
  app.user = data.user
  console.log('Sign in Working')
  // console.log('Log of data.game => ' + data.user)
  // $('#sign-in').addClass('hidden')
  // $('#sign-out').removeClass('hidden')
  // $('#change-password').removeClass('hidden')
  $('#gameStats').removeClass('hidden')
  $('#get-games').removeClass('hidden')
  $('#siError').addClass('hidden')

  $('#si-modal').click()
  $('.introduction').hide()
  $('.landing-auth-container').hide()
  $('.error-handling').children().remove()
  $('.error-handling').append('<p class="success-message">Signed In!').delay(3000).fadeOut()
  $('input:not([type="submit"]), textarea').val('')
  $('footer').removeClass('hidden')
  $('.game-actions').removeClass('hidden')
  $('.collection-header').removeClass('hidden')

}

const onSignInFail = () => {
  $('#siError').removeClass('hidden')
}

const changePasswordSuccess = () => {
  $('#cpwSuccess').removeClass('hidden')
  $('#cpwError').addClass('hidden')
}

const onChangePasswordFail = () => {
  $('#cpwError').removeClass('hidden')
  $('#cpwSuccess').addClass('hidden')
}

const signOutSuccess = () => {
  app.user = null
  console.log('Sign Out Successful')
  // $('#change-password').addClass('hidden')
  // $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#already-member').removeClass('hidden')
  $('#gameStats').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('.gameRow').remove()

  $('.introduction').show()
  $('.landing-auth-container').show()
  $('.error-handling').children().remove()
  $('footer').addClass('hidden')
  $('.game-actions').addClass('hidden')
  $('.collection-header').addClass('hidden')
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
  onSignUpFailure,
  onSignInFail,
  onChangePasswordFail
}
