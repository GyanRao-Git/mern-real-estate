import {
  initializeApp
} from "firebase/app";

const firebasekey = import.meta.env.VITE_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: firebasekey,
  authDomain: "mern-real-estate-ca8d4.firebaseapp.com",
  projectId: "mern-real-estate-ca8d4",
  storageBucket: "mern-real-estate-ca8d4.firebasestorage.app",
  messagingSenderId: "957646529711",
  appId: "1:957646529711:web:7d43a202010e5d171a205a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);