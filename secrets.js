// secrets.example.js - V1 FINAL - Old Save - Demo only - Safe to push
// REAL secrets.js is ignored by .gitignore - Kabhi public mat karo

  const firebaseConfig = {
  apiKey: "AIzaSyApXIGoX071cYEvGbfhBF69DB9Kv5YlSMA",
  authDomain: "santramarketshoppingmall.firebaseapp.com",
  databaseURL: "https://santramarketshoppingmall-default-rtdb.firebaseio.com",
  projectId: "santramarketshoppingmall",
  storageBucket: "santramarketshoppingmall.firebasestorage.app",
  messagingSenderId: "398490252924",
  appId: "1:398490252924:web:be6907535a2096cb3b7bf9",
  measurementId: "G-34FQ7YWH3G"
};
firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
window.rtdb = firebase.database();

