// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyC18yxvskPTNpcN-Tz4nFikJ5i9QtPuta4",
//   authDomain: "backup2-49c2f.firebaseapp.com",
//   projectId: "backup2-49c2f",
//   storageBucket: "backup2-49c2f.appspot.com",
//   messagingSenderId: "655035542798",
//   appId: "1:655035542798:web:7297998ae93e40e9673b5f",
//   measurementId: "G-ZY8F6NCSPN"

// };

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

const firebaseConfig = {
  apiKey: "AIzaSyAaCEbX7Zd0o0j7NL7A-u1nSvhHRRXWz_8",
  authDomain: "test-chat-whatsapp.firebaseapp.com",
  databaseURL: "https://test-chat-whatsapp-default-rtdb.firebaseio.com",
  projectId: "test-chat-whatsapp",
  storageBucket: "test-chat-whatsapp.appspot.com",
  messagingSenderId: "35707292162",
  appId: "1:35707292162:web:c7763b403eb33b3789b51b",
  measurementId: "G-X1GBLZGRWB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth , provider , firebaseApp};
export default db;
