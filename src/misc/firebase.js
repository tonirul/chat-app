import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAnFPJERQkrHm7PAh4wJW3Dq0oXhzc8q0M",
  authDomain: "chat-web-app-90c7c.firebaseapp.com",
  databaseURL: "https://chat-web-app-90c7c-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-90c7c",
  storageBucket: "chat-web-app-90c7c.appspot.com",
  messagingSenderId: "117955760640",
  appId: "1:117955760640:web:cb8cce2e5a932feb153ee5"
};

// Initialize Firebase
const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();