const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#sign-in')[0].reset()
}

const onChangePW = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

const onGetNotes = () => {
  api.getNotes()
    .then(ui.getNotesSuccess)
    .catch(ui.getNotesFailure)
}

const onGetMyNotes = () => {
  api.getMyNotes()
    .then(ui.getMyNotesSuccess)
    .catch(ui.getMyNotesFailure)
}

const onUpdateNote = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const gameId = $(event.target).closest('div').attr('data-id')
  api.updateNote(data, gameId)
    .then(ui.updateNoteSuccess)
}

const createShows = () => {
  $('.user-message').text('')
  $('#createContent').show()
  $('.personal').hide()
  $('.public').hide()
}

// const onCreateNote = () => {
//   api.
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('.sign-out').on('click', onSignOut)
  $('#change_pass').on('submit', onChangePW)
  $('#brand').on('click', onGetNotes)
  $('.public-link').on('click', onGetNotes)
  $('.all-notes').on('click', onGetMyNotes)
  $('#myAllContent').on('submit', '.updating-note-form', onUpdateNote)
  $('.create-note').on('click', createShows)
  // $('#createForm').on('click', onCreateNote)
}

module.exports = {
  addHandlers,
  onGetNotes
}
