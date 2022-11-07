import {Text, View, ScrollView, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './Calender.style';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Entypo';
import Icon6 from 'react-native-vector-icons/AntDesign';
import Icon7 from 'react-native-vector-icons/Ionicons';

function Calender() {
  const {goBack} = useNavigation();
  const rectangleAreaData = [
    {
      id: '1',
      title: 'Daily Meeting',
      img: require('./../../../images/brownhairwomen.png'),
      image: require('./../../../images/greenjacketmen.png'),
    },
    {
      id: '2',
      title: 'UI Task',
      img: require('./../../../images/brownhairwomen.png'),
      image: require('./../../../images/greenjacketmen.png'),
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBorder}>
        <View style={styles.containerIcon}>
          <Icon name="left" size={24} color="white" onPress={() => goBack()} />
        </View>
        <View style={styles.containerTextImage}>
          <Text style={styles.calanderText}>Calendar</Text>
          <Image
            style={styles.ProfileImage}
            source={require('./../../../images/profile.png')}
          />
        </View>
        <View style={styles.containerCalendarIcon}>
          <Icon2 name="calendar" size={24} color="white" />
        </View>
          <Text style={styles.juneText}>June 21 10:00-17:30</Text>
          <Text style={styles.dailyTask}>Daily Task</Text>

        <View style={styles.containerFlatList}>
          <FlatList
            data={[17, 18, 19, 20, 21, 22, 23, 24, 25]}
            horizontal={true}
            keyExtractor={({item}) => item}
            renderItem={item => {
              return (
                <View style={styles.containerdataNumberText}>
                  <Text style={styles.dataNumberText}>{item.item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{margin: 5, padding: 5}}>
          <Icon3
            style={styles.Iconplus}
            name="plus-a"
            size={15}
            color="white"
          />
          <Text style={styles.taskText}>Add Task</Text>
        </View>
        <View style={styles.containerHour}>
          <View style={styles.containerHourTextTwo}>
            <Text style={styles.textHourOne}>08:30</Text>
            <Text style={styles.textHourTwo}>10:00</Text>
          </View>
          <FlatList
            data={rectangleAreaData}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <View>
                  <View style={styles.flatLisContainer}>
                    <Text style={styles.dailyMeetingText}>{item.title}</Text>
                    <View style={styles.ImagesflatList}>
                      <Image source={item.img} />
                      <Image source={item.image} />
                      <Icon3
                        style={styles.plusIcon}
                        name="plus-a"
                        size={10}
                        color="white"
                      />
                    </View>
                    <Icon5
                      style={styles.Icon5}
                      name="stopwatch"
                      size={12}
                      color="white"
                    />
                    <Text style={styles.startText}>Start in 10 minutes</Text>
                    <View style={styles.containerRightIcon}>
                      <Text style={styles.textGo}>Go</Text>
                      <Icon4
                        style={styles.Icon4}
                        name="right"
                        size={12}
                        color="white"
                      />
                    </View>
                    <View style={styles.containerHourText}>
                      <Text style={styles.hourText}>8:30</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.containerTask}>
          <Text style={styles.hourTaskText}>12:30</Text>
          <View style={styles.greyFlat}>
            <Icon6
              style={styles.Icon6}
              name="rightcircleo"
              size={14}
              color="white"
            />
            <View style={styles.yellowFlat}>
              <Image
                style={styles.Image}
                source={require('./../../../images/curlyhairwomen.png')}
              />
              <Text style={styles.monitoringText}>Monitoring</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerTask}>
          <Text style={styles.hourTaskText}>14:30</Text>
          <View style={styles.greyFlat}>
            <Icon7
              style={styles.Icon6}
              name="document-outline"
              size={14}
              color="white"
            />
            <View style={styles.yellowFlatTwo}>
              <View style={styles.Images}>
                <Image
                  style={styles.Image}
                  source={require('./../../../images/curlyhairwomen.png')}
                />
                <Image
                  style={styles.Image}
                  source={require('./../../../images/brownhairwomen.png')}
                />
                <Image
                  style={styles.Image}
                  source={require('./../../../images/greenjacketmen.png')}
                />
              </View>
              <Text style={styles.documentationText}>Documentation</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerTask}>
          <Text style={styles.hourTaskText}>15:00</Text>
          <View style={styles.greyFlat}>
            <Icon6
              style={styles.Icon6}
              name="rightcircleo"
              size={14}
              color="white"
            />
            <View style={styles.PinkFlat}>
              <View style={styles.Images}>
                <Image
                  style={styles.Image}
                  source={require('./../../../images/curlyhairwomen.png')}
                />
                <Image
                  style={styles.Image}
                  source={require('./../../../images/curlyhairwomen.png')}
                />
              </View>
              <Text style={styles.meetingText}>Meeting client</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Calender;
