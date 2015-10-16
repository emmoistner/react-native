/* @flow */

import { actions } from '../constants'

const initState: {
  isFetching: boolean,
  items: Array<Object>,
} = {
  isFetching: false,
  items: [],
}

function users(state: Object = initState, action: Object): Object {

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
