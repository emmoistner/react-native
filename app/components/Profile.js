import React, { Component, View, Text, StyleSheet } from 'react-native'

class Profile extends Component {

  render() {

    const company = this.props.company ?
      <View>
        <Text style={styles.title}>Company: </Text>
        <Text style={styles.textBlock}>{this.props.company.name}</Text>
      </View> : null

    return (
      <View>
        {company}
      </View>
    )
  }

}

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 2,
  },
  textBlock: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    color: '#ccc',
  },
})

export default Profile
