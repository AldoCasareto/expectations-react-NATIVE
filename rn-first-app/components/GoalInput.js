import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = ({ handleAdd, isAddMode, CancelAdd }) => {
  const [courseGoal, setCourseGoal] = useState('');

  const handleText = (enteredText) => {
    setCourseGoal(enteredText);
  };

  const addHandler = () => {
    handleAdd(courseGoal);
    setCourseGoal('');
  };

  return (
    <Modal visible={isAddMode} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleText}
          placeholder='Course Goal'
          style={styles.input}
          value={courseGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addHandler} title='ADD' />
          </View>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={CancelAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
