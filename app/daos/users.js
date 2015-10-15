import { UsersService } from '../services'

const Users = new UsersService()

class UsersDao {

  getAll(dispatch, finish, error) {
    Users.fetch(dispatch, finish, error)
  }

}

export default UsersDao
