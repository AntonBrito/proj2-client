'use strict'
const app = require('../scripts/app.js')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createGame = function (nameText, platformText, genreText, yearText) {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'game_name': nameText,
        'game_platform': platformText,
        'game_genre': genreText,
        'game_year': yearText,
        'user_id': app.user.id,
        'created_at': 'current_timestamp',
        'updated_at': 'current_timestamp'
      }
    }
  })
}

const editGame = function (idText, nameText, platformText, genreText, yearText) {
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'id': idText,
        'game_name': nameText,
        'game_platform': platformText,
        'game_genre': genreText,
        'game_year': yearText,
        'user_id': app.user.id,
        'created_at': 'current_timestamp',
        'updated_at': 'current_timestamp'
      }
    }
  })
}

const deleteGame = function (idText) {
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'id': idText
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  index,
  createGame,
  editGame,
  deleteGame
}
