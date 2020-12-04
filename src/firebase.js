import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAFzpGKxryrlK0kmvm3nMagaUUdF8SaPAU",
    authDomain: "todo-app-f4156.firebaseapp.com",
    databaseURL: "https://todo-app-f4156.firebaseio.com",
    projectId: "todo-app-f4156",
    storageBucket: "todo-app-f4156.appspot.com",
    messagingSenderId: "611676175837",
    appId: "1:611676175837:web:acfd433725a304b86d8a34",
    measurementId: "G-72VQGNCLQX"
});

const db = firebaseApp.firestore();

//export { db }; 
export default db;