export default function userUpdate(state = {}, { type, payload }) {
  if(type === 'USER_LOGGED_IN') {
    return payload
  }
  else if(type === 'USER_LOGGED_OUT') {
    return {}
  }
  return state
}