import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNJwXx0wtWPCgBIATdGqAMHXvPRsj0vQ8",
  authDomain: "netflix-mern-clone-640e1.firebaseapp.com",
  projectId: "netflix-mern-clone-640e1",
  storageBucket: "netflix-mern-clone-640e1.appspot.com",
  messagingSenderId: "926142022150",
  appId: "1:926142022150:web:6bb5b30a260090dd40b987",
  measurementId: "G-R9HL2Y6877",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
