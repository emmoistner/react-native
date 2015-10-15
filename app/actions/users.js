import { actions } from '../constants'
import { UsersDao } from '../daos'

const Users = new UsersDao()

function requestUsers() {
  return {
    type: actions.REQUEST_USERS
  }
}

function receiveUsers(body) {
  return {
    type: actions.RECEIVE_USERS,
    users: body
  }
}

function errorUsers(response) {
  return {
    type: actions.ERROR_USERS,
    response: response
  }
}

function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers())
    return Users.getAll(dispatch, receiveUsers, errorUsers)
  }
}

function shouldFetchUsers(state) {
  const users = state.users
  if (!users) {
    return true
  } else if (users.isFetching) {
    return false
  } else {
    return true
  }
}

function fetchIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchUsers(getState())) {
      return dispatch(fetchUsers())
    }
  }
}

export default {
  fetchIfNeeded
}
