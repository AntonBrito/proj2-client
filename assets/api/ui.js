'use strict'
// remove signIn and signOut
const app = require('../scripts/app.js')

const onSignUpSuccess = (data) => {
  app.user = data.user
  console.log('Sign Up Working')
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
}

// TODO Create function for SignUp Failure

const onSignInSuccess = (data) => {
  app.user = data.user
  console.log('Sign in Working')
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
}

// TODO Create function for SignIn failure

module.exports = {
  onSignUpSuccess,
  onSignInSuccess
}
