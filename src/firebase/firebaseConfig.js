// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyDsrlSI8lDYuH6sElQ2w5E7qtexdol8mhc",
  // authDomain: "portfolio-data-efc1c.firebaseapp.com",
  // projectId: "portfolio-data-efc1c",
  // storageBucket: "portfolio-data-efc1c.appspot.com",
  // messagingSenderId: "691897522261",
  // appId: "1:691897522261:web:d8fedb4ef312b4f7121cdc",
  // measurementId: "G-SJXHQ37PSV"
  apiKey: "AIzaSyAoe7YHVpewLxvaDIMZ9PCrBtCLd7k84Ts",
  authDomain: "my-portfolio-ec18e.firebaseapp.com",
  projectId: "my-portfolio-ec18e",
  storageBucket: "my-portfolio-ec18e.firebasestorage.app",
  messagingSenderId: "1097715700386",
  appId: "1:1097715700386:web:d3073c0907241c6507bdfb"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const config = firebaseConfig;
export const authentication = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);