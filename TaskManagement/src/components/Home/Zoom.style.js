import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  joinText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    margin: 5,
    padding: 5,
    right: 12,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60,
  },
  Image: {
    height: 250,
    width: 250,
  },
  ImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Button: {
    marginTop: 16,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  textSignUp: {
    textAlign: 'center',
    color: '#D8367F',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',

  },

  textLogIn: {
    textAlign: 'center',
    color: '#D8367F',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',

  },
  button: {
    height: 43,
    width: '55%',
    backgroundColor: '#D8367F',
    borderRadius: 20,
  },
  meetingText: {
    textAlign: 'center',
    top: 10,
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
