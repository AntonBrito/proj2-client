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

const getSuccess = function () {
  console.log('got here')
  console.log('Log of User ID => ' + app.user)
  console.log('Log of Users => ' + app.user.games)

  // $('#gameStats').html('<div class="successMessage"> Gams Played:' + data.games.length + '</div>')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  getSuccess
}
