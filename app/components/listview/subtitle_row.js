import React, { Component, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles'

class SubtitleRow extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.row} onPress={this.props.onPress}>
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.subtitle}>{this.props.email}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

export default SubtitleRow
