import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState("");

    const gotInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () =>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };   
    
    return(
        <Modal visible = {props.visible} animationType = "slide">
            <View style = {styles.inputContainer}>

                <TextInput 
                placeholder="Course Goal" 
                style={styles.input}
                onChangeText = {gotInputHandler}
                value = {enteredGoal}/>

                <View style = {styles.buttonContainer}>

                    <View style = {styles.button}>
                        <Button title = "Cancel" color = "red" onPress = {props.onCancel}></Button>
                    </View>

                    <View style = {styles.button}>
                        <Button title ="Add!!" onPress = {addGoalHandler}></Button>
                    </View>
                </View>
        </View>
      </Modal>
    );
};


const styles =  StyleSheet.create({

    inputContainer: {
       justifyContent:'center',
        alignItems: 'center',
        flex: 1,
      },

    input: {
        width: '80%' ,
        borderColor:"black", 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10,
    },

    buttonContainer: {
        flexDirection : "row",
        justifyContent: "space-around", 
        width: '60%',
    },
    button: {
        width: '40%',
    },

});

export default GoalInput;