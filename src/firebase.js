// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8dQnRC_S1XlocOMvMDZORihILpVbryq4",
  authDomain: "slack-clone-dd465.firebaseapp.com",
  projectId: "slack-clone-dd465",
  storageBucket: "slack-clone-dd465.appspot.com",
  messagingSenderId: "775983292098",
  appId: "1:775983292098:web:ca0f872c0448f6decce55b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, db }