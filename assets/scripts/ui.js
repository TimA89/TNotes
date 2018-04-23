const store = require('./store')

const signUpSuccess = () => {
  $('#message').text('Welcome to TPad expirience! Please sign in to start!')
  setTimeout(() => $('#message').text(''), 5000)
  $('#modal1').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const signUpFailure = () => {
  $('.failedmessage1').text('Failed to Sign Up')
}

const signInSuccess = (data) => {
  $('#message').text('Your Personal TPad welcomes you')
  store.user = data.user
}

const signInFailure = () => {
  $('.failedmessage2').text('Failed to Sign In')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // changePWSuccess,
  // changePWFailure,
  // signOutSuccess,
  // signOutFailure
}
