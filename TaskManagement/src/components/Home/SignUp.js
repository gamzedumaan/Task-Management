import {Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './SignUp.style';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';

function SignUp() {
  const route = useRoute();
  console.log(route.params);

  const {navigate} = useNavigation();

  const {goBack} = useNavigation();

  const [mail, setMail] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [password, setPassword] = React.useState('');

  const Login = () => {
    navigate('LogIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.containerIcon}>
          <Icon2 name="left" size={24} color="white" onPress={() => goBack()} />
        </View>
        <View style={styles.Clik}>
          <TouchableOpacity style={styles.Click}>
            <View style={styles.textAndIconcontainer}>
              <Icon
                style={styles.Icon}
                name="facebook"
                size={24}
                color="white"
              />
              <Text style={styles.Text}>Log in with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.emailInput}>
            <TextInput
              style={styles.Input}
              placeholder="E-mail Address "
              placeholderTextColor="white"
              value={mail}
              onChangeText={text => setMail(text)}
            />
          </View>
          <View style={styles.emailInput}>
            <TextInput
              style={styles.Input}
              placeholder="Name"
              placeholderTextColor="white"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.emailInput}>
            <TextInput
              style={styles.Input}
              placeholder="Surname"
              placeholderTextColor="white"
              value={surname}
              onChangeText={text => setSurname(text)}
            />
          </View>
          <View style={styles.emailInput}>
            <TextInput
              style={styles.Input}
              placeholder="Pasword"
              placeholderTextColor="white"
              keyboardType={'numeric'}
              maxLength={11}
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.SignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerLogin}>
          <Text style={styles.alreadyAccountText}>
            Already have an account ?
          </Text>
          <TouchableOpacity>
            <Text onPress={Login} style={styles.textLogin}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default SignUp;
