// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAKG6eTd3um51srwjLSBxXJg90yD5WY1mU",
  authDomain: "chat-app-test-vercel.firebaseapp.com",
  databaseURL: "https://chat-app-test-vercel-default-rtdb.firebaseio.com",
  projectId: "chat-app-test-vercel",
  storageBucket: "chat-app-test-vercel.appspot.com",
  messagingSenderId: "770570403324",
  appId: "1:770570403324:web:e5e0a7b06f258687aa4679",
  measurementId: "G-QGS1EZL7P2"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider , firebaseApp};
export default db;
