const user = (state = {error:null,token:null,clientId:null, email:null, pwdUpdated:null}, action) => {
  switch (action.type) {
    case 'LOGGING-IN':
        return Object.assign({}, state, {
          error: '',
          token: '',
          clientId:''
        })
    case 'LOGGED-IN-ERROR':
      return Object.assign({}, state, {
          error: action.error,
          token: '',
          clientId:''
        })
    case 'LOGGED-IN':
      return Object.assign({}, state, {
        identityId: action.identityId,
        token: action.token,
        clientId: action.clientId
      })

    case 'SIGNING_UP':
      return {
        ...state
      }

    case 'SIGNED_UP':
      return {
        ...state,
        username: action.username
      }

    case 'LOGGING_OUT':
        return Object.assign({}, state, {
          token: '',
          clientId:''
        })

    case 'LOGGING_OUT_ERROR':
      return {
        error: action.error
      }

    case 'LOGGED_OUT':
        return {}
    case 'CLEARING_USER_MESSAGES':
        return {}

    case 'CHECKING_SESSION':
        return Object.assign({}, state, {
        })

    case 'CHECKING_SESSION_ERROR':
      return {
        error: action.error
      }
    case 'CHECKED_SESSION':
      return Object.assign({}, state, {
        token: action.token
      })

    case 'VERIFICATION_CODE_SENT':
        return Object.assign({}, state, {
          email: action.emailAddress
        })

    case 'PASSWORD_CHANGE_ERROR':
       return Object.assign({}, state, {
        error: action.error
      })

    case 'PASSWORD_CHANGE_SUCCESS':
       return Object.assign({}, state, {
        pwdUpdated: 'true'
      })


  	case 'SEND_VERIFICATION_CODE_FAILED':
         return Object.assign({}, state, {
          error: action.error
        })

  	case 'NO_USER_INFO_AVAILABLE':
         return Object.assign({}, state, {
          error: action.error
        })

    default:
        return Object.assign({}, state, {
        })
  }
}

export default user
