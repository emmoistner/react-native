const settings = {
  'base_url': 'http://jsonplaceholder.typicode.com'
}

class SettingsDao {

  get(setting) {
    return settings[setting]
  }

}

export default SettingsDao
