import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Configuración por defecto que proporciona firebase(No tocar)
const firebaseConfig = {
  apiKey: "AIzaSyD7pkF6wZ87_AjMzFdwBqhLlTuJ7Nli8CQ",
  authDomain: "vue-apirest-a0500.firebaseapp.com",
  projectId: "vue-apirest-a0500",
  storageBucket: "vue-apirest-a0500.appspot.com",
  messagingSenderId: "844947564928",
  appId: "1:844947564928:web:a70a73aea1a5799c4bb965",
  measurementId: "G-SLZWPWW3ED",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app.firestore();
