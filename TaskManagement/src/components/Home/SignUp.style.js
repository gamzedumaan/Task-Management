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
  Clik: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textAndIconcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Icon: {
    marginLeft: 5,
    top: 6,
    left: 28,
  },
  Text: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    top: 10,
    right: 30,
  },

  Click: {
    width: '90%',
    height: 43,
    backgroundColor: '#4267B2',
    marginBottom: 30,
    borderRadius: 3,
  },
  emailInput: {
    width: '90%',
    height: 43,
    borderBottomColor: '#648491',
    borderBottomWidth: 1,
    borderRadius: 3,
    marginTop: 10,
    borderTopColor: '#648491',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderRightColor: '#648491',
    borderLeftColor: '#648491',
    borderLeftWidth: 1,

  },
  Button: {
    width: '90%',
    height: 43,
    backgroundColor: '#D8367F',
    borderRadius: 3,
  },
  containerButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  SignUp: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    marginTop: 10,
  },
  alreadyAccountText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,


  },
  textLogin: {
    color: '#4267B2',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    right: 65,
  },
  containerLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  inputContainer:{
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerIcon: {
    margin: 10,
  },
  Input:{
    color:'white',
  }
});

export default styles;
