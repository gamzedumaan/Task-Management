import {Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './Projects.style';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';

function Projects() {
  const {goBack} = useNavigation();


  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBorder}>
        <View style={styles.containerIcon}>
          <Icon name="left" size={24} color="white" onPress={() => goBack()} />

        </View>
        <View style={styles.containerNewTaskTex}>
          <Text style={styles.newTaskText}>New Task</Text>
        </View>
        <View style={styles.containerIcons}>
          <View style={styles.containertestPending}>
            <Text style={styles.testPending}>10 test pending</Text>
          </View>
          <View style={styles.containerIconMenuandSearch}>
            <Icon1
              style={styles.searchIcon}
              name="ios-search-outline"
              size={20}
              color="white"
            />
            <Icon2
              style={styles.calendarIcon}
              name="calendar"
              size={20}
              color="white"
            />
            <Icon3
              style={styles.optionsIcon}
              name="options"
              size={20}
              color="white"
            />
          </View>
        </View>
        <View style={styles.containerLine}>
          <View style={styles.line} />
        </View>
        <View style={styles.containerMonth}>
          <Text style={styles.sunText}>Sun</Text>
          <Text style={styles.monText}>Mon</Text>
          <Text style={styles.tueText}>Tue</Text>
          <Text style={styles.wedText}>Wed</Text>
          <Text style={styles.thuText}>Thu</Text>
          <Text style={styles.friText}>Fri</Text>
          <Text style={styles.satText}>Sat</Text>
        </View>
        <View style={styles.containerUnderLine}>
          <View style={styles.underLine} />
        </View>
        <View style={styles.numberMonth}>
          <Text style={styles.numberText}>1</Text>
          <Text style={styles.numberText}>2</Text>
          <Text style={styles.numberText}>3</Text>
          <View style={styles.containerNumberText}>
            <Text style={styles.numberTextFour}>4</Text>
          </View>
          <Text style={styles.numberText}>5</Text>
          <Text style={styles.numberText}>6</Text>
          <Text style={styles.numberText}>7</Text>
        </View>
        <View>
          <View style={styles.containerRactangle}>
            <View style={styles.containerGrey}>
              <Text style={styles.titleTaskText}>Title Task ..</Text>
            </View>
            <View style={styles.containerGreyBold}>
              <Text style={styles.descriptionText}>Description ..</Text>
            </View>
            <View style={styles.containerPurple}>
              <Text style={styles.dailyMeetingText}>Daily Meeting</Text>
              <Text style={styles.aboutText}>About The New Project</Text>
              <View style={styles.containerNotifications}>
                <Icon4 name="notifications-sharp" size={14} color="white" />
              </View>
              <View style={styles.containerImages}>
                <Image source={require('./../../../images/iconPerson.png')} />
                <Image
                  source={require('./../../../images/curlyhairwomen.png')}
                />
                <Image
                  source={require('./../../../images/brownhairwomen.png')}
                />
                <Image
                  source={require('./../../../images/curlyhairwomen.png')}
                />
              </View>
              <View style={styles.containerJuneText}>
                <Text style={styles.juneText}>June 21 10:00-17:30</Text>
              </View>
            </View>
            <View style={styles.containerDarkGrey}>
              <Text style={styles.designText}>Design Team</Text>
              <Text style={styles.dailyText}>Daily Conversation</Text>
              <View style={styles.containerNotifications}>
                <Icon4 name="notifications-sharp" size={14} color="white" />
              </View>
              <View style={styles.containerJuneText}>
                <Text style={styles.juneText}>June 21 10:00-17:30</Text>
              </View>
              <View style={styles.containerImages}>
                <Image source={require('./../../../images/iconPerson.png')} />
                <Image
                  source={require('./../../../images/curlyhairwomen.png')}
                />
                <Image
                  source={require('./../../../images/brownhairwomen.png')}
                />
                <Image
                  source={require('./../../../images/curlyhairwomen.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default Projects;
