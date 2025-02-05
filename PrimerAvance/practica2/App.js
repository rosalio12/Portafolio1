
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
const third_image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dw.com%2Fes%2Ftill-lindemann-vocalista-de-rammstein-cumple-60-a%C3%B1os%2Fa-64273312&psig=AOvVaw2b14WC-0rpYjyjyjMsviGg&ust=1738821412505000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiGlNjsq4sDFQAAAAAdAAAAABAE"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Source: local image!</Text>
      <Image style={styles.image} source={require('..practica2/Lindemann.png')}/> 

      <Text style={styles.Title}>Source: third image!</Text>
      <Image style={styles.image} source={{uri: third_image}}/> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize:24, 
    fontWeight:'bold',
    marginBottom:1,
  },
  image: {
    width:250, 
    height:250,
    borderRadius:'50%',
    marginBottom:20
  },
});