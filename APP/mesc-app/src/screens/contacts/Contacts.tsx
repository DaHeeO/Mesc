import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

interface ContactsProps {
  navigation: any;
}

const Contacts = ({navigation}: ContactsProps) => {
  return (
    <View>
      <Text>Contacts</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Group')}>
        <Text>Group</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contacts;
