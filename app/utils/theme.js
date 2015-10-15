const React = require('react-native')
const { StyleSheet } = React

module.exports = StyleSheet.create({
  header: {
    backgroundColor: '#009bdf',
    height: 65,
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
    width: 36,
    top: 26,
    right: 10,
    justifyContent: 'center',
  },
})
