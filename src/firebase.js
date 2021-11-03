import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBPeJKK47Yhr-_s8HEj_k8jm4BwB7Dg3Nk",
  authDomain: "disney-clone-bc6c2.firebaseapp.com",
  projectId: "disney-clone-bc6c2",
  storageBucket: "disney-clone-bc6c2.appspot.com",
  messagingSenderId: "1077106276420",
  appId: "1:1077106276420:web:61a6eb6cf2a08c1d876411",
  measurementId: "G-YBTW1B8L8P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
