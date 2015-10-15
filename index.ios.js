import React, { AppRegistry, Navigator, StatusBarIOS, Component, Text, TouchableOpacity, View } from 'react-native'
import configureStore from './app/utils/configureStore'
import { Provider } from 'react-redux/native'
import UsersScreen from './app/screens/users'

let store = configureStore();

let NavigationBarMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null
    } else {
      return (
        <View>
          <TouchableOpacity
            style={{
              height: 36,
              width: 50,
              left: 10,
              justifyContent: 'center',
            }}
            onPress={() => navigator.pop()}
          >
            <Text style={{ color: 'white' }}>Back</Text>
          </TouchableOpacity>
        </View>
      )
    }
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={{ color: 'white', paddingTop: 10 }}>{route.name}</Text>
    )
  },
}

class Core extends Component {

  componentDidMount() {
    StatusBarIOS.setStyle('light-content');
  }

  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return (
      <RouteComponent
        style={{ flex: 1 }}
        navigator={navigator}
        route={route}
      />
    )
  }

  render() {
    let navigator = <Navigator
      sceneStyle={{ top: 64 }}
      renderScene={this.renderScene}
      initialRoute={{ component: UsersScreen, name: 'Users' }}
      navigationBar={
        <Navigator.NavigationBar
          style={{ backgroundColor: '#009bdf' }}
          routeMapper={NavigationBarMapper}
        />
      }
    />
    return (
      <Provider store={store}>
        { () => navigator }
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Core', () => Core)
