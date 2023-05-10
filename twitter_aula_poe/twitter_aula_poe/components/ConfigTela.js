import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from './firebase';
// You can import from local files
import Twitter from './Twitter';

// or any pure javascript modules available in npm
import { Card, TextInput, Button } from 'react-native-paper';

export default function ConfigTela({ navigation }) {
  return (
    <View style={styles.container}>
      <Button icon="cow" mode="contained" onPress={() => salvar()}>
        Config
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
});
