import BaseService from './base'

class UsersService extends BaseService {

  fetch(dispatch, finish, error) {
    return super.get(super.getEndpoint() + '/users')
            .then(response => {
              switch(response.status) {
                case 200:
                  response.json()
                    .then(body => dispatch(finish(body)))
                  break
                default:
                  console.error('Error fetching users')
                  //dispatch(error(response))
                  return
              }
            })
  }

}

export default UsersService
