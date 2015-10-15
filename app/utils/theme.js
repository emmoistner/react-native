const React = require('react-native')
const { StyleSheet } = React

module.exports = StyleSheet.create({
  header: {
    backgroundColor: '#009bdf',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  caption: {
    color: 'white',
    flex: 1,
    fontSize: 16,
    paddingTop: 34,
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },
  prevBtnContainer: {
    height: 36,
    width: 50,
    left: 10,
    justifyContent: 'center',
  },
})
