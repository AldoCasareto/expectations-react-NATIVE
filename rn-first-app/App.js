import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [list, setList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAdd = (goalTitle) => {
    const newGoal = {
      value: goalTitle,
      id: new Date().getTime().toString(),
    };
    setList(list.concat(newGoal));
    setIsAddMode(false);

    // setList([...list, item])
    // setList((currentItems) => [...currentItems, value: goalTitle]);
  };

  const handleDelete = (id) => {
    // const filterDelete = list.filter((goal) => goal.id !== id);
    // setList(filterDelete);
    setList((currentGoals) => {
      return currentGoals.filter((goal) => id !== goal.id);
    });
  };

  const CancelAdd = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        handleAdd={handleAdd}
        isAddMode={isAddMode}
        CancelAdd={CancelAdd}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={list}
        renderItem={(itemData) => (
          <GoalItem
            value={itemData.item.value}
            id={itemData.item.id}
            handleDelete={handleDelete}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
