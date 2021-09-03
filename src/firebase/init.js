import { initializeApp } from "firebase/app";
// import firestore from "firebase/app/firestore";
// import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
// app.firestore().settings({ timestampsInSnapshots: true });
export default app;
// const analytics = getAnalytics(app);
