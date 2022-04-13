import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAi3Ve7Gr4HooOctndU7005hEWoFzTKaGk",
  authDomain: "reacttest-ba11b.firebaseapp.com",
  projectId: "reacttest-ba11b",
  storageBucket: "reacttest-ba11b.appspot.com",
  messagingSenderId: "814363743437",
  appId: "1:814363743437:web:1edea2c7f4681d6d24c584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db