/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from 'react-native';

import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): JSX.Element {
  
  const [courseGoals, setCourseGoals] = useState([] as any);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCoursGoals: any) => [
      ...currentCoursGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endGoalHandler();
  }

  function deleteGoalHandler(id: string){
    setCourseGoals((currentCourseGoals: any) =>{
      return currentCourseGoals.filter((goal: any)=> goal.id !== id);
    })
  }
  return (
    <View style={styles.Container}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
       <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            itemData.index
            return (
              <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} id={itemData.item.id}/>
            );
          }}
          keyExtractor={(item, index) =>{
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  textInput: {
    color: 'black',
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  textColor: {
    color: 'black',
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    color: 'white',
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

export default App;
