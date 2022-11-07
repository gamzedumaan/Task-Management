import {Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './LogIn.style';
import {
  NavigationHelpersContext,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Foundation';
import Icon4 from 'react-native-vector-icons/AntDesign';

function LogIn() {
  const route = useRoute();
  console.log(route.params);

  const {goBack} = useNavigation();
  const {navigate} = useNavigation();

  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const LogInButton = () => {
    navigate('MyProfile', {
      mail: mail,
      password: password,
    });
  };

  const SignUp = ()=> {
    navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.containerIcon}>
          <Icon4 name="left" size={24} color="white" onPress={() => goBack()} />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.Input}
            placeholderTextColor="white"
            placeholder="E-mail Address"
            onChangeText={setMail}
            value={mail}
          />
          <TextInput
            style={styles.InputPassword}
            placeholderTextColor="white"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            
          />
          <View style={styles.button}>
            <TouchableOpacity onPress={LogInButton}>
              <Text style={styles.logınText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerLine}>
          <View style={styles.Line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.Line} />

          <View />
        </View>

        <View style={styles.containerIcons}>
          <Icon style={styles.Icon} name="google" size={35} color="red" />

          <Icon2 style={styles.Icon} name="facebook" size={35} color="blue" />

          <Icon3
            style={styles.Icon}
            name="social-apple"
            size={35}
            color="grey"
          />
        </View>
        <View style={styles.forgetAccountContainer}>
          <Text style={styles.forgetAccountText}>Don't forget an account</Text>
          <TouchableOpacity >
            <Text onPress={SignUp} style={styles.SignUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetText}>Forget Password ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LogIn;
