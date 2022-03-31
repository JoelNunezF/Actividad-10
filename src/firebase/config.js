import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXPVcOh8Z5WJuu2KCoRjntvrVloyPBOQ0",
  authDomain: "actividad10-53bb8.firebaseapp.com",
  databaseURL: "https://actividad10-53bb8-default-rtdb.firebaseio.com",
  projectId: "actividad10-53bb8",
  storageBucket: "actividad10-53bb8.appspot.com",
  messagingSenderId: "672804919269",
  appId: "1:672804919269:web:8ebe6a01d538bbce53010c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
