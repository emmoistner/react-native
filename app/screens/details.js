import React, { Component, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import UserItem from '../components/UserItem'
import Profile from '../components/Profile'
import theme from '../utils/theme'

class DetailsScreen extends Component {

  constructor(props, ctx) {
    super(props, ctx)
  }

  render() {
    const { data } = this.props.route

    return (
      <View style={{ flex: 1, backgroundColor: 'white', }}>
        <View style={theme.header}>
          <Text ref={'title'} style={theme.caption}>USER DETAILS</Text>
          <TouchableOpacity
            style={[theme.prevBtnContainer, { left: 0, }, ]}
            onPress={() => this.props.navigator.pop()}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <UserItem {...data} />
          <Profile {...data} />
        </ScrollView>
      </View>
    )
  }

}

export default DetailsScreen
