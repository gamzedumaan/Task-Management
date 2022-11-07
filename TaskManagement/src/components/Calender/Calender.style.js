import {StyleSheet} from 'react-native';
import {color, sizes} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerBorder: {
    width: sizes.width * 0.95,
    alignSelf: 'center',
  },
  containerIcon: {
    margin: 10,
  },
  ProfileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  calanderText: {
    color: 'white',
    fontSize: 20,
    left: 130,
    fontFamily: 'Montserrat-Medium',
  },
  containerTextImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  juneText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
  },
  dailyTask: {
    color: 'white',
    top: 5,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  containerCalendarIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 10,
    right: 10,
  },
  containerFlatList: {
    flex: 1,
  },
  dataNumberText: {
    color: 'white',
  },
  containerdataNumberText: {
    margin: 10,
    padding: 10,
  },

  xText: {
    color: 'white',
    textAlign: 'center',
    top: 4,
    fontFamily: 'Montserrat-Medium',
  },
  taskText: {
    color: 'white',
    left: 32,
    position: 'absolute',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    top: 2,
  },
  dailyMeetingText: {
    color: 'white',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 14,
    left: 5,
    top: 5,
    position: 'absolute',
  },
  flatLisContainer: {
    backgroundColor: '#652855',
    padding: 20,
    width: 170,
    borderRadius: 12,
    margin: 10,
  },
  plusIcon: {
    top: 6,
    left: 2,
  },
  startText: {
    fontSize: 9,
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    position: 'absolute',
    marginTop: 70,
    left: 25,
  },
  containerRightIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 18,
  },

  textGo: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    left: 11,
    fontSize: 12,
    marginBottom: 15,
  },
  Icon4: {
    left: 12,
    marginTop: 2,
  },
  hourText: {
    fontFamily: 'Montserrat-Medium',
    color: '#2579C1',
    textAlign: 'center',
    fontSize: 12,
  },

  containerHourText: {
    borderRadius: 20,
    height: 18,
    width: 35,
    backgroundColor: '#102840',
    position: 'absolute',
    right: 2,
    marginTop: 8,
  },
  Icon5: {
    position: 'absolute',
    marginTop: 68,
    left: 5,
  },
  Iconplus: {
    left: 5,
  },
  containerTask: {
    flexDirection: 'row',
    margin: 6,
    padding: 10,
  },
  hourTaskText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    top: 10,
    right: 15,
  },
  greyFlat: {
    height: 45,
    width: '85%',
    backgroundColor: 'grey',
    borderRadius: 50,
  },
  yellowFlat: {
    height: 45,
    width: '45%',
    backgroundColor: '#D8367F',
    borderRadius: 50,
  },
  Icon6: {
    position: 'absolute',
    right: 10,
    top: '35%',
  },
  monitoringText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    position: 'absolute',
    left: 35,
    marginTop: 14,
  },
  Image: {
    height: 35,
    width: 35,
    marginTop: 3,
  },
  yellowFlatTwo: {
    height: 45,
    width: '80%',
    backgroundColor: 'orange',
    borderRadius: 50,
  },
  documentationText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    position: 'absolute',
    left: 105,

    marginTop: 13,
  },
  containerTaskThree: {
    flexDirection: 'row',
  },
  PinkFlat: {
    height: 45,
    width: '70%',
    backgroundColor: '#D8367F',
    borderRadius: 50,
  },
  meetingText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    position: 'absolute',
    left: 70,
    marginTop: 15,
  },
  containerHour: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerHourTwo: {
    flexDirection: 'column',
  },
  textHourOne: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    bottom: 50,
  },
  textHourTwo: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    position: 'absolute',
    marginTop: 50,
  },
  Images: {
    flexDirection: 'row',
  },
  ImagesflatList: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default styles;
