import firebase from 'firebase';

const firebaseConfig = {
  authDomain: 'xboxf-853f0.firebaseapp.com',
  databaseURL: 'https://xboxf-853f0-default-rtdb.firebaseio.com',
  projectId: 'xboxf-853f0',
  storageBucket: 'xboxf-853f0.appspot.com',
  messagingSenderId: '837968600838',
  appId: '1:837968600838:web:5c0d015eccc3794ab18887',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
