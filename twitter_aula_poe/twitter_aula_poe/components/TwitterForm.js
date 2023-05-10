import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from './firebase'
// You can import from local files
import Twitter from './Twitter';

// or any pure javascript modules available in npm
import { Card, TextInput, Button } from 'react-native-paper';

export default function TwitterForm({navigation}) {
  const [titulo, setTitulo] = React.useState('');
  const [texto, setTexto] = React.useState('');
  const salvar=()=>{
   // alert('Salvando');
   var bd=firebase.database().ref('twitter/');
   bd.push({titulo:titulo, texto:texto})
   .then(()=>{
     console.log('Insirido com sucesso!');
   })
   .catch((error)=>console.log(error))
   navigation.navigate('TwitterList');
   
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Titulo"
        value={titulo}
        onChangeText={(item) => setTitulo(item)}
      />
      <TextInput
        label="Texto"
        value={texto}
        multiline
        numberOfLines={4}
        placeholder="Seu texto aqui"
        onChangeText={(item) => setTexto(item)}
      />
      <Button
        icon="cow"
        mode="contained"
        onPress={() => salvar()}>
        Twittar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
  div: {
    padding: 8,
  },
});
