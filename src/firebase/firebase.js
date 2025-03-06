// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfwFd-JXEW8XCJ-3oiK7QIKhJ0ztrG62s",
  authDomain: "first-project-24202.firebaseapp.com",
  projectId: "first-project-24202",
  storageBucket: "first-project-24202.firebasestorage.app",
  messagingSenderId: "868980075212",
  appId: "1:868980075212:web:28dca8795c3dda69157069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };