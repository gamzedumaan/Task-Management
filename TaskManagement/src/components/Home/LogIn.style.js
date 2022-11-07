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
  Input: {
    width: '90%',
    height: 43,
    borderRadius: 3,
    borderColor: '#313840',
    borderWidth: 2,
    color:'white',

  },
  InputPassword: {
    width: '90%',
    height: 43,
    borderRadius: 3,
    borderColor: '#313840',
    borderWidth: 1,
    marginTop: 10,
    color:'white',
  },
  forgetText: {
    color: 'blue',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 60,
  },
  containerInput: {
    marginTop: 35,
    flexDirection: 'column',
    alignItems: 'center',
  },
  ClikGoogle: {
    marginTop: 50,
  },

  Icon: {
    marginLeft: 5,
    top: 5,
  },

  containerClik: {
    margin: 15,
    left: 16,
    marginTop: 35,
  },
  logınText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    width: '90%',
    height: 43,
    backgroundColor: '#D8367F',
    borderRadius: 3,
    marginTop: 20,
  },
  containerIcon: {
    marginTop: 15,
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  orText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },
  Line: {
    height: 1,
    width: '35%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  containerLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    alignItems: 'center',
    left: 11,
  },
  forgetAccountText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  forgetAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    margin: 18,
    padding: 10,
    fontSize: 13,
  },
  SignUpText: {
    color: 'blue',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    right: 70,
  },
});

export default styles;
