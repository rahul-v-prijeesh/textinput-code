import React, { Component } from 'react';
import { Text, View, StyleSheet, Button,TextInput } from 'react-native';
import { color } from 'react-native-reanimated';

export default class Facb extends React.Component {
    render() {
        return (
          <View>
 
        <View style={styles.container}>
          <h1 >Story Hub</h1>  </View>
          
          <TextInput
           style={{ fontSize:20,flex:1,marginTop:50,marginLeft:20,borderWidth:2,width:400}}
    placeholder="story Title"
      editable  />
        
           <TextInput
    style={{ fontSize:20,flex:1,marginTop:20,marginLeft:20,borderWidth:2,width:400}}
            placeholder="author"
            editable  />
     
      <TextInput
           style={{ fontSize:20,width:1000,margin:20,borderWidth:3,paddingBottom:200,textAlign:"left"}}
           multiline
           placeholder="write your story"
           editable  />
      <button style={{width:100,borderWidth:0,backgroundColor:"pink",margin:50,alignSelf:'center',padding:20}}>
        <text style={{font:"bold"}}>SUBMIT</text>
      </button>
     </View>
      
   

           
        )
      }
    
    
    
}
const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    top:0,
   backgroundColor:"pink"
  }
});