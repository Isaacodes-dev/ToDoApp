import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Modal, TextInput, Button, Image} from 'react-native';
function GoalInput(props: any): JSX.Element {
  const [enteredGoalText, setEntredGoalText] = useState('');
  function goalInputHandler(enteredText: string) {
    setEntredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEntredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          placeholderTextColor={'white'}
          onChangeText={goalInputHandler}
          value={enteredGoalText}></TextInput>
        <View style={styles.buttonConatiner}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: '#311b6b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    color: 'white',
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    padding: 16,
    borderRadius: 16
  },
  textColor: {
    color: 'white',
  },
  buttonConatiner: {
    flexDirection: 'row',
    marginTop: 16
  },
  button:{
    width: 100,
    marginHorizontal: 8,
  }
});

export default GoalInput;
