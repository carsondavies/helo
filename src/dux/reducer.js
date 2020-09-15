const initialState = {
  username: '',
  id: 0,
  profilePicture: ''
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'

export function loginUser(username, id, profilePicture) {
  return {
    type: LOGIN_USER,
    payload: {
      username: username,
      id: id,
      profilePicture: profilePicture
    }
  }
}

export function logoutUser(id) {
  return {
    type: LOGOUT_USER,
    payload: null
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload.username, id: action.payload.id, profilePicture: action.payload.profilePicture }
    case LOGOUT_USER:
      return initialState
    default:
      return initialState
  }

}