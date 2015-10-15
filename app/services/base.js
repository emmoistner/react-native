import { SettingsDao } from '../daos'

/**
 * Reusable service class.
 */
 class BaseService {

  getEndpoint() {
    let Settings = new SettingsDao()
    return Settings.get('base_url')
  }

  get(path) {
    return fetch(path)
  }

  post(path, body) {
    return new Promise(resolve, reject => { resolve(body) })
  }

  del(path, body) {
    return new Promise(resolve, reject => { resolve(body) })
  }

  put(path, body) {
    return new Promise(resolve, reject => { resolve(body) })
  }

 }

export default BaseService
