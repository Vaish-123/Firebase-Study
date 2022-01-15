import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCOZBhtjYyIDpaeJKxQz52DUnYMmZca1yk",
    authDomain: "fir-b8250.firebaseapp.com",
    projectId: "fir-b8250",
    storageBucket: "fir-b8250.appspot.com",
    messagingSenderId: "409636216694",
    appId: "1:409636216694:web:8f588f581bceaffb0a2457"
  };

  export const Firebase=firebase.initializeapp(firebaseConfig)