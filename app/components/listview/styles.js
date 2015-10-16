import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 72,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  subtitle: {
    color: '#aaa',
    fontWeight: '300',
    paddingTop: 5,
  },
})

export default styles
