import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './Zoom.style';

function Zoom() {
  const route = useRoute();
  console.log(route.params);

  const {navigate} = useNavigation();
  const _LogIn = () => {
    navigate('LogIn');

  };
  
  const _SignUp = () => {
    navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.containerIcon}>
          <Icon style={styles.Icon5} name="setting" size={16} color="white" />
          <View style={styles.containerText}>
            <Text style={styles.joinText}>
              Start a meeting or join a meeting
            </Text>
          </View>
        </View>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.Image}
            source={require('./../../../images/Ellipse24.png')}
          />
        </View>
        <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.meetingText}>Join The Meeting</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.ButtonSignUp}>
            <Text onPress={_SignUp} style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonLogIn}>
            <Text onPress={_LogIn} style={styles.textSignUp}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Zoom;
