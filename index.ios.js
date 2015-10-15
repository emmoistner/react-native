import React, { AppRegistry, Navigator, StatusBarIOS, Component } from 'react-native'
import configureStore from './app/utils/configureStore'
import { Provider } from 'react-redux/native'
import UsersScreen from './app/screens/users'

let store = configureStore();

class Core extends Component {

  componentDidMount() {
    StatusBarIOS.setStyle('light-content');
  }

  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return (
      <RouteComponent
        style={{ flex: 1}}
        navigator={navigator}
        route={route}
      />
    )
  }

  render() {
    let navigator = <Navigator
      renderScene={this.renderScene}
      initialRoute={{ component: UsersScreen }}
    />
    return (
      <Provider store={store}>
        { () => navigator }
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Core', () => Core)
