import React, { Component, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class UserItem extends Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={this.props.onPress}
      >
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 20,
  },
  info: {
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    color: 'black',
    fontWeight: '300',
    paddingTop: 5,
  },
})

export default UserItem
