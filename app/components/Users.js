import React, { Component, ListView, View, Text, InteractionManager } from 'react-native'
import UserItem from './UserItem'
import DetailsScreen from '../screens/details'
import debounce from 'debounce'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
})

function makeDataSource(data) {
  return ds.cloneWithRows(data)
}

class Users extends Component {

  constructor(props, ctx) {
    super(props, ctx)

    const update = this.forceUpdate.bind(this)
    this.forceUpdate = debounce(() => {
      InteractionManager.runAfterInteractions(update)
    }, 500)

    this.state = {
      ds: makeDataSource(props.data),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data != nextProps.data) {
      InteractionManager.runAfterInteractions(() => {
        this.setState({
          ds: this.state.ds.cloneWithRows(nextProps.data),
        })
        InteractionManager.runAfterInteractions(this.forceUpdate)
      })
    }
  }

  navigate(data) {
    const { navigator } = this.props
    navigator.push({
      component: DetailsScreen,
      data,
    })
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.ds}
          renderRow={(rowData) =>
            <UserItem
              {...rowData}
              onPress={() => this.navigate(rowData)}
            />
          }
        />
      </View>
    )
  }
}

export default Users
