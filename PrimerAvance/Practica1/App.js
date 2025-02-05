import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyForm from "./components/MyForm";

export default function MyApp(){



  return(
    <View style={styles.container}>
      <MyForm/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
  },

});