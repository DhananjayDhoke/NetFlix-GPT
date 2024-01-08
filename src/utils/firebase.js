// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiIogtPE-INx0AGen2Gi7qa72TbQW7krQ",
  authDomain: "netflix-gpt-6adbb.firebaseapp.com",
  projectId: "netflix-gpt-6adbb",
  storageBucket: "netflix-gpt-6adbb.appspot.com",
  messagingSenderId: "545725813034",
  appId: "1:545725813034:web:f29f58205bdd6b9bd88e53",
  measurementId: "G-ZKQZHHQD44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()