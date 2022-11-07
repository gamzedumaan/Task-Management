import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerBorder: {
    width: '95%',
    alignSelf: 'center',
  },
  profileText: {
    color: 'white',
    position: 'absolute',
    left: 138,
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
  },
  containerImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  jacopText: {
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    fontSize: 20,
  },
  userNameText: {
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    fontSize: 13,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  editContainer: {
    height: 36,
    width: 138,
    backgroundColor: '#102840',
    borderRadius: 10,
  },
  editProfileText: {
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    top: 7,
    color: '#2579C1',
  },
  Touchable: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 35,
  },
  containerCrown: {
    flex: 0.3,
  },
  upgradeText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    flex: 1,
  },
  containerStopwatch: {
    flex: 0.3,
  },
  setText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    flex: 1,
  },
  containerSetting: {
    flex: 0.3,
  },
  containerHelp: {
    flex: 0.3,
  },
  containerIconandText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

});

export default styles;
