import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default function App() {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="React native paper" />
      </Appbar>
      <TextInput
        style={styles.input}
        label="Type"
        value={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => alert(`Text: ${text}`)}
      />
      <Button mode="contained" onPress={() => alert(`Text: ${text}`)}>
        Type Something
      </Button>
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
  input: {
    marginBottom: 10,
    width: '80%',
  },
});