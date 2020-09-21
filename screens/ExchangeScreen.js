import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
export default class Exchange extends React.Component{
    render(){
        return(
            <View>
                <TextInput style={{borderRadius: 100, borderColor: 'Black'}}></TextInput>
                <TextInput style={{borderRadius: 100, borderColor: 'Black'}}></TextInput>
                <TouchableOpacity style={{borderRadius: 100, borderColor: 'Orange', backgroundColor: 'Orange'}}><Text>Add Item</Text></TouchableOpacity>
            </View>
        
        );
    }
}