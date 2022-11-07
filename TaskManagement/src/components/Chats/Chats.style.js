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
  messageText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
  },
  containerSearchAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    top: 5,
  },
  nameText: {
    color: 'white',
    fontFamily: 'Montserrat-ExtraBold',
  },
  chatsDataContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#648491',
    borderTopWidth: 1,
    borderTopColor: '#648491',
    marginTop: 20,
  },
  titleText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },

  Image: {
    position: 'absolute',
    height: 40,
    width: 40,
    margin: 5,
    padding: 5,
  },
  hourText: {
    color: '#D8367F',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  hourTextcontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    bottom: 16,
  },
  nameAndtitleContainer: {
    flexDirection: 'column',
    marginLeft: 50,
    top: 5,
  },
  textText: {
    color: 'white',
    height: 17,
    width: 17,
    backgroundColor: '#4681B4',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 12,
  },
  textTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    bottom: 10,
    right: 5,
  },
});

export default styles;
