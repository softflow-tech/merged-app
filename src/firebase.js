// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyChw1Ys1iEKxAWjjNJVgAPs7Agf2ttmkwI",
  authDomain: "backup1-3da1f.firebaseapp.com",
  projectId: "backup1-3da1f",
  storageBucket: "backup1-3da1f.appspot.com",
  messagingSenderId: "71694029692",
  appId: "1:71694029692:web:95bd8fb14324f468ef4af9",
  measurementId: "G-G17C8ESFE5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth , provider , firebaseApp};
export default db;
