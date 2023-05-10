import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from './firebase';

// You can import from local files


// or any pure javascript modules available in npm
import { Card, TextInput, Button } from 'react-native-paper';
//https://random-data-api.com/api/v2/users
export default function XboxForm({ navigation }) {
  const [titulo, setTitulo] = React.useState('');
  const [texto, setTexto] = React.useState('');
  const [link, setLink] = React.useState('');

  const salvar = () => {
    //alert('Salvando');
    var bd = firebase.database().ref('Xbox/');
    bd.push({ titulo: titulo, texto: texto, link:link })
      .then(() => {
        console.log('Inserido com sucesso!');
      })
      .catch((error) => console.log(error));
     navigation.navigate('XboxList');

  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Titulo do seu jogo"
        value={titulo}
        onChangeText={(item) => setTitulo(item)}
      />
      <TextInput
        label="Uma sinopse do seu jogo"
        value={texto}
        multiline
        numberOfLines={4}
        placeholder="Seu texto aqui..."
        onChangeText={(item) => setTexto(item)}
      />
      <TextInput
        label="Link da imagem"
        value={link}
        multiline
        numberOfLines={5}
        placeholder="Seu link aqui..."
        onChangeText={(item) => setLink(item)}
      />
      <Button icon="content-save" mode="contained" onPress={() => salvar()}>
        Publicar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
});
