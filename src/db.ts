import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCGIn871JmyLh1WMufsNFG9MKQayHoEom8",
  authDomain: "my-pwa-4251e.firebaseapp.com",
  projectId: "my-pwa-4251e",
  storageBucket: "my-pwa-4251e.firebasestorage.app",
  messagingSenderId: "210541292514",
  appId: "1:210541292514:web:25e1eadf56f69878ef67bb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
