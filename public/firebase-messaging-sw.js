/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDYddupMWra5vmun6udJvtrH8k1FkgifA8',
  authDomain: 'chat-web-app-ebca8.firebaseapp.com',
  projectId: 'chat-web-app-ebca8',
  storageBucket: 'chat-web-app-ebca8.appspot.com',
  messagingSenderId: '978358535847',
  appId: '1:978358535847:web:29e6c0873726ad613e7d82',
  databaseURL: 'https://chat-web-app-ebca8-default-rtdb.firebaseio.com/',
});

firebaseApp.messaging();
