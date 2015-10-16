import { actions } from '../constants'

let initState = {
  isFetching: false,
  items: [],
}

function users(state = initState, action) {

  switch(action.type) {

    case actions.REQUEST_USERS: {
      return Object.assign({}, state, {
        isFetching: true,
      })
    }

    case actions.RECEIVE_USERS: {
      return Object.assign({}, state, {
        isFetching: false,
        items: action.users,
      })
    }

    default:
      return state
  }
}

export default users
