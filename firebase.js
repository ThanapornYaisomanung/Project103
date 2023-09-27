// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCumaiytnT1jNkB-lIN0VNUc5XWxVsAr5o",
  authDomain: "project-in-scripting.firebaseapp.com",
  databaseURL: "https://project-in-scripting-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-in-scripting",
  storageBucket: "project-in-scripting.appspot.com",
  messagingSenderId: "792474178327",
  appId: "1:792474178327:web:04d9eb783d76d4b0f01d52",
  measurementId: "G-KKFZEHJG73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);