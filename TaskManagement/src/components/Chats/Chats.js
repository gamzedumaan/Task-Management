import {Text, View, ScrollView, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './Chats.style';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

function Chats() {
  const chatsData = [
    {
      id: '1',
      name: 'Ariane Mccoy',
      title: 'Select the project',
      hour: '10:00',
      img: require('../../../images/curlyhairwomen.png'),
      text: '2',
    },
    {
      id: '2',
      name: 'Wadde Waren',
      title: 'I will start the project next week',
      hour: '18:00',
      img: require('../../../images/brownhairwomen.png'),
      text: '',
    },
    {
      id: '3',
      name: 'Dianna Coy',
      title: 'Sent to photo',
      hour: '07:00',
      img: require('../../../images/brownhairwomen.png'),
      text: '',
    },
    {
      id: '4',
      name: 'Jacop Sell',
      title: 'Okay get started web design task',
      hour: '10:37',
      img: require('../../../images/greenjacketmen.png'),
      text: '3',
    },
    {
      id: '5',
      name: 'Eleanur Pena',
      title: 'Please share your project',
      hour: '09:12',
      img: require('../../../images/greenjacketmen.png'),
      text: '',
    },
    {
      id: '6',
      name: 'Jhone',
      title: 'Please share your messagge',
      hour: '11:11',
      img: require('../../../images/greenjacketmen.png'),
      text: '4',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBorder}>
        <View style={styles.containerSearchAndText}>
          <Icon name="ios-search-outline" size={20} color="white" />
          <Text style={styles.messageText}>Message</Text>
          <Icon2 name="images" size={20} color="#D8367F" />
        </View>
        <View>
          <FlatList
            data={chatsData}
            renderItem={({item}) => {
              return (
                <View style={styles.chatsDataContainer}>
                  <Image style={styles.Image} source={item.img} />
                  <View style={styles.nameAndtitleContainer}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </View>
                  <View style={styles.hourTextcontainer}>
                    <Text style={styles.hourText}>{item.hour}</Text>
                  </View>
                  <View style={styles.textTextContainer}>
                    {item.text !== '' && (
                      <Text style={styles.textText}>{item.text}</Text>
                    )}
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Chats;
