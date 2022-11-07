import {Text, View, FlatList, ScrollView, TextInput} from 'react-native';
import React from 'react';
import styles from './Home.style.js';
import {
  useRoute,
  useNavigation,
  navigation,
  navigate,
} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/Feather';
import Icon6 from 'react-native-vector-icons/SimpleLineIcons';
import Icon7 from 'react-native-vector-icons/AntDesign';
import Icon8 from 'react-native-vector-icons/Ionicons';
import Icon9 from 'react-native-vector-icons/AntDesign';

function Home() {
  const [data, setData] = React.useState('');

  const {navigate} = useNavigation();
  const _handleZoom = () => {
    navigate('Zoom');
  };
  const numberData = [
    {
      id: '1',
      label: '21',
    },
    {
      id: '2',
      label: '22',
    },
    {
      id: '3',
      label: '23',
    },
    {
      id: '4',
      label: '24',
    },
    {
      id: '5',
      label: '25',
    },
    {
      id: '6',
      label: '26',
    },
    {
      id: '7',
      label: '27',
    },
    {
      id: '8',
      label: '28',
    },
  ];
  const monthData = [
    {
      id: '1',
      text: 'Mon',
    },
    {
      id: '2',
      text: 'Tue',
    },
    {
      id: '3',
      text: 'Wed',
    },
    {
      id: '4',
      text: 'Tue',
    },
    {
      id: '5',
      text: 'Fri',
    },
    {
      id: '6',
      text: 'Sat',
    },
    {
      id: '7',
      text: 'Sun',
    },
  ];

  return (
    <View style={styles.containerOutside}>
      <ScrollView style={styles.container}>
        <View style={styles.containerBorder}>
          <View style={styles.containerTextActivity}>
            <Text style={styles.textActivity}>Activity</Text>
          </View>
          <View style={styles.containerLine}>
            <View style={styles.line} />
          </View>
          <View style={styles.containerMyWeekly}>
            <Text style={styles.textTest}>My Weekly Test</Text>
          </View>
          <View style={styles.containerIcons}>
            <View style={styles.containertestPending}>
              <Text style={styles.testPending}>10 test pending</Text>
            </View>
            <View style={styles.containerIconMenuandSearch}>
              <Icon1
                style={styles.menuIcon}
                name="menu"
                size={20}
                color="white"
              />
              <TextInput onChangeText={setData}>
                <Icon2
                  style={styles.searchIcon}
                  name="ios-search-outline"
                  size={20}
                  color="white"
                />
              </TextInput>
            </View>
            <Icon3
              style={styles.Iconplus}
              name="plus-a"
              size={20}
              color="white"
            />
          </View>
          <View style={styles.containerMonth}>
            <Text style={styles.septemberText}>September</Text>
            <View style={styles.containerOctoberText}>
              <Text style={styles.octoberText}>October</Text>
            </View>
            <Text style={styles.septemberText}>November</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={numberData}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <View style={styles.containerFlatListNumber}>
                    <Text style={styles.numberText}>{item.label}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={monthData}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <View style={styles.containerFlatListMonth}>
                    <Text style={styles.monthText}>{item.text}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <View style={styles.lineContainer}>
              <View style={styles.lines}>
                <View style={styles.radius}>
                  <View style={styles.radiusTwo}></View>
                </View>
              </View>
            </View>
            <View style={styles.ractangleBetween}>
              <View style={styles.rectanglePurple}>
                <View style={styles.containerPencilAndOptionsIcon}>
                  <Icon4 name="pencil-square-o" size={15} color="white" />
                  <Icon6 name="options" size={15} color="white" />
                </View>
                <Text style={styles.editHomePageText}>Edit Home Page</Text>
                <Text style={styles.listText}>List</Text>
                <View style={styles.containerFlagAndText}>
                  <Icon5 name="flag" size={14} color="white" />
                  <Text style={styles.janText}>Jan 10</Text>
                </View>
              </View>
            </View>
            <View style={styles.ractangleBetween}>
              <View style={styles.rectangleGrey}>
                <View style={styles.containerBasketballAndOptionsIcon}>
                  <Icon8 name="md-basketball-outline" size={15} color="white" />
                  <Icon6 name="options" size={15} color="white" />
                </View>
                <Text style={styles.editHomePageText}>In Process</Text>
                <Text style={styles.projectsText}>22 Projects</Text>
                <View style={styles.containerFlagAndText}>
                  <Icon5 name="flag" size={14} color="white" />
                  <Text style={styles.janText}>Jan 12</Text>
                  <View style={styles.containerRightIcon}>
                    <Text style={styles.textGo}>Go</Text>
                    <Icon7
                      style={styles.Icon7}
                      name="right"
                      size={15}
                      color="white"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.ractangleBetween}>
              <View style={styles.rectanglePink}>
                <View style={styles.containerPencilAndOptionsIcon}>
                  <Icon9 name="videocamera" size={15} color="white" />
                  <Icon6 name="options" size={15} color="white" />
                </View>
                <Text style={styles.editHomePageText}>Daily Meeting</Text>
                <View style={styles.containerTodayText}>
                  <View style={styles.ractangleMeeting}>
                    <Text onPress={_handleZoom} style={styles.joinMeetingText}>
                      Join Meeting
                    </Text>
                  </View>
                  <Text style={styles.TodayText}>Today at 10:00-17:30 am</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
