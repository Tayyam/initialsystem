import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDnXEr2RYWaPOSDXUJvciorjgMPZSgSH9U",
  authDomain: "rehab-c445e.firebaseapp.com",
  projectId: "rehab-c445e",
  databaseURL: "https://rehab-c445e-default-rtdb.firebaseio.com",
  storageBucket: "rehab-c445e.appspot.com",
  messagingSenderId: "223232471198",
  appId: "1:223232471198:web:36855290c06e8a39528b8f"
};

export const app = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(app);