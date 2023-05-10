import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import firebase from './firebase';

// or any pure javascript modules available in npm
import { Card, TextInput, Button, Paragraph } from 'react-native-paper';

//https://random-data-api.com/api/v2/users
export default function Inicio({ navigation }) {
 
  return (
    <ScrollView>
    <View style={styles.container}>
     <Image style={styles.imgLogo} source={require(`../assets/xboxlogo.png`)} />
      <Text style={styles.titulo}>Bem Vindo ao Forum dos Guri</Text>
      <Paragraph style={styles.texto}>
        Esse forum é dedicado para amantes de games, especificamentes para
        usuarios da Xbox
      </Paragraph>
      <Image style={styles.imgTexto} source={require(`../assets/xbox.jpg`)} />
      <Paragraph style={styles.texto}>
        Nesse aplicativo você verá varias coisas como: Listagem dos jogos da
        Xbox, o seu game pass e até novas ideias de jogos, que inclusive vc pode
        postar a sua incrivel ideia.
      </Paragraph>
      <Image style={styles.imgTexto} source={require(`../assets/jogos.jpg`)} />
      <Paragraph style={styles.texto}>
        Esse é o CEO da Xbox:
      </Paragraph>
      <Image style={styles.imgTexto} source={require(`../assets/chefe.jfif`)} />
      <Paragraph style={styles.texto}>
        Para saber mais sobre essa gigante da insutria da tecnologia clique
        nesse botão logo a baixo
      </Paragraph>
      <Button icon="plus" mode="contained" onPress={() => navigation.navigate('InfXbox')}> 
        Saiba mais...
      </Button>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  texto: {
    fontSize: 15,
    textAlign: 'justify',
  },
  imgTexto: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: 128,
    width: 270,
  },  
  imgLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
  },
});
