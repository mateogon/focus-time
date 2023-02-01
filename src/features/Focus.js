import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = () => {
  const [subject, setSubject] = useState(null);
  return (
    <View  style = {styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style = {styles.button}>
          <RoundedButton  title="+" size={50} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    padding: 25,
    marginRight: 10,
  },
  inputContainer: {
    justifyContent: 'top',
    flexDirection: 'row',
    flex: 0.5,
    padding: 50,
    
  },
});