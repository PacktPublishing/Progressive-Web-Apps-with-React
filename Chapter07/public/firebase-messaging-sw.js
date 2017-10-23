importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js'); 

firebase.initializeApp({
  'messagingSenderId': '120582509244'
});

console.log(firebase.messaging());