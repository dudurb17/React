import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import firebase from './firebase';

// or any pure javascript modules available in npm
import { Card, TextInput, Button, Paragraph } from 'react-native-paper';

//https://random-data-api.com/api/v2/users
export default function InfXbox({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Image style={styles.imgLogo} source={require(`../assets/xboxlogo.png`)} />
        <Paragraph style={styles.texto}>
          Xbox é uma marca de consoles de jogos eletrônicos criada pela
          Microsoft. O nome Xbox é incluído em uma série de consoles
          desenvolvidos pela Microsoft, desde a sexta geração até a nona geração
          de consoles, bem como o serviço on-line Xbox Live e Xbox Game Pass. A
          marca foi introduzida pela primeira vez em 15 de novembro de 2001, nos
          Estados Unidos, com o lançamento do console Xbox.{' '}
        </Paragraph>
        <Paragraph style={styles.texto}>
          {' '}
          O primeiro console da série, o Xbox, foi o primeiro console oferecido
          por uma empresa norte-americana após o Atari Jaguar em 1996. Ele
          chegou a mais de 24 milhões de unidades vendidas em 10 de maio de
          2006. Seu sucessor, o Xbox 360, foi lançado em 22 de novembro de 2005
          e descontinuado em 20 de abril de 2016. O sucessor do Xbox 360, o Xbox
          One, foi anunciado em 21 de maio de 2013 e lançado em 22 de novembro
          do mesmo ano.
        </Paragraph>
        <Image
          style={styles.imgTexto}
          source={require(`../assets/LogoX.png`)}
        />
        <Text style={styles.titulo}>Xbox</Text>
        <Paragraph style={styles.texto}>
          {' '}
          O Xbox é um console de vídeo game produzido pela Microsoft. Foi
          lançado em 15 de novembro de 2001 na América do Norte, 22 de fevereiro
          de 2002 no Japão, e 14 de Março de 2002 na Austrália e Europa. Foi a
          primeira incursão da Microsoft no mercado de vídeo games. Como parte
          da sexta-geração de jogos, o Xbox competiu com Sony PlayStation 2,
          Sega Dreamcast (que parou as vendas americanas antes que o Xbox fosse
          colocado à venda) e o Nintendo GameCube. O Xbox foi o primeiro console
          oferecido por uma empresa norte-americana após o Atari Jaguar parar as
          vendas em 1996. O nome Xbox foi derivado a partir de uma contração da
          caixa "DirectX Box", uma referência a Microsoft.
        </Paragraph>
        <Paragraph style={styles.texto}>
          {' '}
          O serviço integrado Xbox Live foi lançado em novembro de 2002 e
          permitiu que os jogadores jogassem jogos online com uma conexão de
          banda larga.[5][6] Ele competiu pela primeira vez com o serviço online
          do Dreamcast, mas depois competiu principalmente com serviço online do
          PlayStation 2. Embora esses dois são gratuitos, enquanto o Xbox Live
          exigida uma assinatura, bem como somente conexão de banda larga, que
          ainda não foi completamente adotado. Xbox Live foi um sucesso devido
          ao melhor servidor, e recursos como uma lista de amigo e conquistas de
          títulos e etc. Agora fotos dos consoles:
        </Paragraph>
      
      <Text style={styles.titulo}>Xbox:</Text>
      <Image
        style={styles.imgTextoX}
        source={require(`../assets/Xbox-console.jpg`)}
      />
      <Text style={styles.titulo}>Xbox 360:</Text>
      <Image
        style={styles.imgTextoX}
        source={require(`../assets/Xbox360.png`)}
      />
      <Text style={styles.titulo}>Xbox One:</Text>
      <Image
        style={styles.imgTextoX}
        source={require(`../assets/XboxOne.png`)}
      />{' '}
      <Text style={styles.titulo}>Xbox Series X:</Text>
      <Image style={styles.imgTextoX} source={require(`../assets/XboxX.jpg`)} />
      <Text style={styles.titulo}>Xbox Series S:</Text>
      <Image style={styles.imgTextoX} source={require(`../assets/XboxS.jpg`)} />
      <Paragraph style={styles.texto}>Todas essas informações foram coletadas na Wikipidia</Paragraph>
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

    height: 120,
    width: 150,
  },
  imgTextoX: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
    imgLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
  },
});
