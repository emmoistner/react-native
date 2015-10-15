import React, { Component, View, Text, TouchableOpacity, StyleSheet, InteractionManager } from 'react-native'
import Users from '../components/Users'
import { UsersActions } from '../actions'
import { connect } from 'react-redux/native'
import { BBDListView } from '../components/listview'
import DetailsScreen from '../screens/details'

class UsersScreen extends Component {

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const { dispatch } = this.props
      dispatch(UsersActions.fetchIfNeeded())
    })
  }

  navigate(data) {
    const { navigator } = this.props
    navigator.push({
      component: DetailsScreen,
      name: 'User Details',
      data,
    })
  }

  render() {
    const users = this.props.state.users.items
    return (
      <View style={{ flex: 1 }}>
        <View>
          <BBDListView
            data={users}
            onItemPress={this.navigate.bind(this)}
            template='subtitle'
          />
        </View>
      </View>
    )
  }

}

export default connect(state => ({ state, }))(UsersScreen)
