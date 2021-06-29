import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ value, id, handleDelete }) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(id)}>
      <View on style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default GoalItem;
