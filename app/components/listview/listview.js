import React, { PropTypes, Component, ListView, View, Text, } from 'react-native'
import PlainRow from './plain_row'
import SubtitleRow from './subtitle_row'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
})

function makeDataSource(data) {
  return ds.cloneWithRows(data)
}

class BBDListView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: makeDataSource(props.data)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data != nextProps.data) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data),
      })
    }
  }

  renderRow(rowData) {
    let { template, onItemPress } = this.props
    if (template == 'list-44dp') {
      return (
        <PlainRow {...rowData} onPress={() => onItemPress(rowData)} />
      )
    } else {
      return (
        <SubtitleRow {...rowData} onPress={() => onItemPress(rowData) } />
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }

}

BBDListView.defaultProps = {
    data: [],
    template: 'list-44dp',
    onItemPress: () => { }
  }

BBDListView.propTypes = {
    data: PropTypes.array.isRequired,
    template: PropTypes.string,
    onItemPress: PropTypes.func
  }

export default BBDListView
