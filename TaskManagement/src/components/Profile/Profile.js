import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Profile.style';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon5 from 'react-native-vector-icons/AntDesign';
import Icon6 from 'react-native-vector-icons/Entypo';

function Profile() {
  const {goBack} = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBorder}>
        <View style={styles.containerIconandText}>
          <Icon name="left" size={24} color="white" onPress={() => goBack()} />
          <Text style={styles.profileText}>Profile</Text>
        </View>
        <View style={styles.containerImage}>
          <Image
            style={styles.profileImage}
            source={require('./../../../images/profile.png')}
          />
          <Text style={styles.jacopText}>Jacop Jhones</Text>
          <Text style={styles.userNameText}>User Interface Designer</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.editContainer}>
            <Text style={styles.editProfileText}>Edit profile</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Touchable}>
          <View style={styles.containerCrown}>
            <Icon2 name="crown" size={16} color="white" />
          </View>
          <Text style={styles.upgradeText}>Upgrade pro membership</Text>
          <Icon3 name="right" size={15} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Touchable}>
          <View style={styles.containerStopwatch}>
            <Icon4 name="stopwatch" size={16} color="white" />
          </View>

          <Text style={styles.setText}>Set Local time zone</Text>
          <Icon3 style={styles.Icon7} name="right" size={16} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Touchable}>
          <View style={styles.containerSetting}>
            <Icon5
              style={styles.Icon5}
              name="setting"
              size={16}
              color="white"
            />
          </View>

          <Text style={styles.upgradeText}>Setting</Text>
          <Icon3 style={styles.Icon7} name="right" size={16} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Touchable}>
          <View style={styles.containerHelp}>
            <Icon6 style={styles.Icon6} name="help" size={15} color="white" />
          </View>
          <Text style={styles.upgradeText}>Help && Sport</Text>
          <Icon3 style={styles.Icon7} name="right" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Profile;
