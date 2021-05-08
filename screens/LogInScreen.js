import React from 'react'
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Image, Alert} from 'react-native'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component{
    
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    
    login = async(email, password)=>{
        if (email && password) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response){
                    this.props.navigation.navigate('Transaction')
                }
            } catch (error) {
                switch(error.code){
                    case 'auth/user-not-found': 
                        Alert.alert("user does not exist")
                    break;
                    case 'auth/invalid-email':
                        Alert.alert("incorrect email or password")
                    break;    
                }
            }
        } else {
            Alert.alert("enter email and password")
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems: 'center', marginTop: 20}}>
                <View>
                    <Image source = {require('../assets/booklogo.jpg')}
                            style = {{width: 150, height: 150}}/>
                    
                    <Text style = {{textAlign: 'center', fontSize: 25}}>Wily</Text>
                    
                </View>

                <View>
                    <TextInput 
                        style = {styles.logInBox}
                        placeholder= "abc@gmail.com"
                        keyboardType= 'email-address' 
                        onChangeText= {(text)=>{
                            this.setState({
                                email: text
                            })
                        }}
                    />

                    <TextInput 
                        style = {styles.logInBox}
                        secureTextEntry= {true}
                        placeholder= "enter password" 
                        onChangeText= {(text)=>{
                            this.setState({
                                password: text
                            })
                        }}
                    />
                    
                </View>

                <View>
                    <TouchableOpacity 
                        style ={styles.submitButton}
                        onPress = {()=>{
                            this.login(this.state.email, this.state.password);
                        }}>
                        <Text style = {{textAlign: 'center'}}>login</Text></TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    logInBox:{
        width: 50,
        height: 10
    },
    submitButton:{
        width: 50, 
        height: 10,
        color: 'red'
    },
})