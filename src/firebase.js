// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCCDjeZQL_be4ySxsxBmO2el5fe0J_Q824",
  authDomain: "chatti-c671a.firebaseapp.com",
  databaseURL: "https://chatti-c671a-default-rtdb.firebaseio.com",
  projectId: "chatti-c671a",
  storageBucket: "chatti-c671a.appspot.com",
  messagingSenderId: "721440239126",
  appId: "1:721440239126:web:c60aed08535a5ab8774f37",
  measurementId: "G-S1VYQ4EW5H"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC8bk8X1gP-IK1GUqzTfQBDboSrXW2ElBs",
//   authDomain: "test-clone-8f056.firebaseapp.com",
//   databaseURL: "https://test-clone-8f056-default-rtdb.firebaseio.com",
//   projectId: "test-clone-8f056",
//   storageBucket: "test-clone-8f056.appspot.com",
//   messagingSenderId: "369779514054",
//   appId: "1:369779514054:web:fa9bbc1459d27b97d3d5c7",
//   measurementId: "G-E1Y58N9E59"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth , provider , firebaseApp};
export default db;
