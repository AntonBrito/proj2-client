'use strict'
// remove signIn and signOut
const app = require('../scripts/app.js')

const onSignUpSuccess = (data) => {
  app.user = data.user
  console.log('Sign Up Working')
  $('#sign-up').addClass('hidden')
}
// TODO Create function for SignUp Failure

module.exports = {
  onSignUpSuccess
}
