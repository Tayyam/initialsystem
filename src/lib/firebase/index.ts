import { FirebaseApp, getApp, initializeApp } from 'firebase/app';
import { Database } from 'firebase/database';
import { Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnXEr2RYWaPOSDXUJvciorjgMPZSgSH9U",
  authDomain: "rehab-c445e.firebaseapp.com",
  projectId: "rehab-c445e",
  databaseURL: "https://rehab-c445e-default-rtdb.firebaseio.com",
  storageBucket: "rehab-c445e.appspot.com",
  messagingSenderId: "223232471198",
  appId: "1:223232471198:web:36855290c06e8a39528b8f"
};

let app: FirebaseApp;
let db: Firestore;
let realtimeDb: Database;

try {
  app = getApp();
} catch {
  app = initializeApp(firebaseConfig);
}

export { app, db, realtimeDb };