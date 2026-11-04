// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-automation-2d7e6.firebaseapp.com",
  projectId: "ai-automation-2d7e6",
  storageBucket: "ai-automation-2d7e6.firebasestorage.app",
  messagingSenderId: "80625504176",
  appId: "1:80625504176:web:87d77e83bc12e15dcb5075",
  measurementId: "G-1F1V602ZG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider() 