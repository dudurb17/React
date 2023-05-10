import firebase from 'firebase';

const firebaseConfig = {
  databaseURL:"https://app-aula-7b4e1-default-rtdb.firebaseio.com",
  apiKey: 'AIzaSyCSS2CxOVS4bOqoDIRIlO7J4EacQ3P4mgk',
  authDomain: 'app-aula-7b4e1.firebaseapp.com',
  projectId: 'app-aula-7b4e1',
  storageBucket: 'app-aula-7b4e1.appspot.com',
  messagingSenderId: '293681835974',
  appId: '1:293681835974:web:2414fdfa983eb805198cc7',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
