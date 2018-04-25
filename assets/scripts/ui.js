const store = require('./store')

const showNotesTemplate = require('./templates/note-listing.handlebars')

const showMyNotesTemplate = require('./templates/my-note-listing.handlebars')

// const eve = require('./events.js')
// const api = require('./api.js')

const signUpSuccess = () => {
  $('.user-message').text('Welcome to TPad expirience! Please sign in to start!')
  // setTimeout(() => $('.user-message').text(''), 5000)
  $('#modal1').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const signUpFailure = () => {
  $('.failedmessage1').text('Failed to Sign Up')
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log(data)
  $('.user-message').text('Your Personal TPad welcomes you')
  $('#modal2').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('.a-sign-up').hide()
  $('.a-sign-in').hide()
  $('.public-link').show()
  $('.my-notes').show()
  $('.sign-out').show()
  $('.a-change-pass').show()
}

const signInFailure = () => {
  $('.failedmessage2').text('Failed to Sign In')
}

const changePWSuccess = () => {
  $('.user-message').text('Your Password was changed successfully')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('#modal3').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const changePWFailure = () => {
  $('.failedmessage3').text('Failed to Change Password')
}

const signOutSuccess = () => {
  $('.user-message').text('Please come back again!')
  setTimeout(() => $('.user-message').text(''), 5000)
  $('.a-sign-up').show()
  $('.a-sign-in').show()
  $('.public-link').hide()
  $('.my-notes').hide()
  $('.sign-out').hide()
  $('.a-change-pass').hide()
  store.user = null
}

const signOutFailure = () => {
  $('.user-message').text('Your Password was changed successfully')
  setTimeout(() => $('.user-message').text(''), 5000)
}

const getNotesSuccess = (data) => {
  store.notes = data.notes
  $('.personal').hide()
  $('.public').show()
  const showNotesHtml = showNotesTemplate({ notes: store.notes })
  $('#allContent').html(showNotesHtml)
}

const getNotesFailure = () => {
  $('.message').text('Sorry public notes are not available at the moment')
}

const getMyNotesSuccess = (data) => {
  $('.user-message').text('')
  // console.log(data.user.notes)
  $('.public').hide()
  $('#createContent').hide()
  $('.personal').show()
  const showNotesHtml = showMyNotesTemplate({ notes: data.user.notes })
  $('#myAllContent').html(showNotesHtml)
}

const getMyNotesFailure = () => {
  $('.message').text('Sorry, but your notes are not available at the moment')
}

const updateNoteSuccess = () => {
  $('.modal').modal('hide')
  console.log('update worked')
}

const updateNoteFailure = () => {
  console.log('at')
}

const onCreateSuccess = () => {
  $('#createForm')[0].reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure,
  getNotesSuccess,
  getNotesFailure,
  getMyNotesSuccess,
  getMyNotesFailure,
  updateNoteSuccess,
  onCreateSuccess,
  updateNoteFailure
}
