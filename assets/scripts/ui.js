const store = require('./store')

const showNotesTemplate = require('./templates/note-listing.handlebars')

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
  $('.user-message').text('Your Personal TPad welcomes you')
  setTimeout(() => $('.user-message').text('\n'), 5000)
  $('#modal2').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('.a-sign-up').hide()
  $('.a-sign-in').hide()
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
  store.user = null
}

const signOutFailure = () => {
  $('.user-message').text('Your Password was changed successfully')
  setTimeout(() => $('.user-message').text(''), 5000)
}

const getNotesSuccess = (data) => {
  console.log(data)
  const showNotesHtml = showNotesTemplate({ notes: data.notes })
  $('#allContent').html(showNotesHtml)
}

const getNotesFailure = () => {
  $('.message').text('Sorry public notes are not available at the moment')
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
  getNotesFailure
}
