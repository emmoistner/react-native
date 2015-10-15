import React, { Component, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import UserItem from '../components/UserItem'
import Profile from '../components/Profile'

class DetailsScreen extends Component {

  render() {
    const { data } = this.props.route

    return (
      <View style={{ flex: 1, backgroundColor: 'white', }}>
        <ScrollView>
          <UserItem {...data} />
          <Profile {...data} />
        </ScrollView>
      </View>
    )
  }

}

export default DetailsScreen
