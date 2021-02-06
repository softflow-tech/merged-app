// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC8bk8X1gP-IK1GUqzTfQBDboSrXW2ElBs",
  authDomain: "test-clone-8f056.firebaseapp.com",
  databaseURL: "https://test-clone-8f056-default-rtdb.firebaseio.com",
  projectId: "test-clone-8f056",
  storageBucket: "test-clone-8f056.appspot.com",
  messagingSenderId: "369779514054",
  appId: "1:369779514054:web:fa9bbc1459d27b97d3d5c7",
  measurementId: "G-E1Y58N9E59"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider , firebaseApp};
export default db;
