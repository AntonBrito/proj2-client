'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const events = require('../api/events')

const memberLogin = () => {
  console.log('Member Login Working')
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#already-member').addClass('hidden')
}

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#already-member').click(memberLogin)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#get-games').click(events.onGetGames)
  $('#create-game').click(events.onCreateGame)
  $('#edit-game').click(events.onEditGame)
  $('#delete-game').click(events.onDeleteGame)
})
