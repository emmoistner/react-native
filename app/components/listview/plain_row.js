import React, { Component, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles'

class PlainRow extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

export default PlainRow
