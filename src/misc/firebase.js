import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyAnFPJERQkrHm7PAh4wJW3Dq0oXhzc8q0M',
  authDomain: 'chat-web-app-90c7c.firebaseapp.com',
  databaseURL: 'https://chat-web-app-90c7c-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-90c7c',
  storageBucket: 'chat-web-app-90c7c.appspot.com',
  messagingSenderId: '117955760640',
  appId: '1:117955760640:web:cb8cce2e5a932feb153ee5',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BIyjtgwYK7XkKJY7YTPmNB44mbqsBxgDVKddx_8CiyhwwRncd1YkwttCmqixSt3UiEsSBjtAkyw40ojaH9AsPD0'
  );

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useFunctionsEmulator('http://localhost:3000');
}
