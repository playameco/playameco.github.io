export const loggingIn = () => {
  return {
    type: 'LOGGING_IN'
  }
}

export const loggedIn = (token, username) => {
  console.log(token, username)
  return {
    type: 'LOGGED_IN',
    token,
    username
    // token,
    // clientId
  }
}

export const loggedInError = (error) => {
  return {
    type: 'LOGGED_IN_ERROR',
    error
  }
}

export const signingUp = (username, email) => {
  return {
    type: 'SIGNING_UP',
    username,
    email
  }
}

export const signedUp = (identityId, username) => {
  return {
    type: 'SIGNED_UP',
    identityId,
    username
  }
}

export const loggingOut = () => {
  return {
    type: 'LOGGING_OUT'
  }
}

export const loggingOutError = (error) => {
  return {
    type: 'LOGGING_OUT_ERROR',
    error
  }
}

export const loggedOut = () => {
  return {
    type: 'LOGGED_OUT'
  }
}

export const passwordChangeError = (error) => {
  return {
    type: 'PASSWORD_CHANGE_ERROR',
	error
  }
}

export const passwordChangeSuccess = () => {
  return {
    type: 'PASSWORD_CHANGE_SUCCESS'
  }
}

export const verificationCodeSent = (emailAddress) => {
  return {
    type: 'VERIFICATION_CODE_SENT',
	emailAddress
  }
}

export const sendVerificationCodeFailed = (error) => {
  return {
    type: 'SEND_VERIFICATION_CODE_FAILED',
	error
  }
}

export const checkingSession = () => {
  return {
    type: 'CHECKING_SESSION'
  }
}

export const checkingSessionError = (error) => {
  return {
    type: 'CHECKING_SESSION_ERROR',
    error
  }
}

export const checkedSession = (token) => {
  return {
    type: 'CHECKED_SESSION',
    token
  }
}

export const clearingUserMessages = () => {
  return {
    type: 'CLEARING_USER_MESSAGES'
  }
}

export const noUserInfoAvail = (error) => {
  return {
    type: 'NO_USER_INFO_AVAILABLE',
    error
  }
}


