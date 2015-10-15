import React, { Component, View, Text, TouchableOpacity, StyleSheet, InteractionManager } from 'react-native'
import Users from '../components/Users'
import theme from '../utils/theme'
import { UsersActions } from '../actions'
import { connect } from 'react-redux/native'

class UsersScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const { dispatch } = this.props
      dispatch(UsersActions.fetchIfNeeded())
    })
  }

  render() {
    const users = this.props.state.users.items
    return (
      <View style={{ flex: 1 }}>
        <View style={theme.header}>
          <Text ref={'title'} style={theme.caption}>USERS</Text>
        </View>
        <View>
          <Users
            {...this.props}
            data={users}
          />
        </View>
      </View>
    )
  }

}

export default connect(state => ({ state, }))(UsersScreen)
