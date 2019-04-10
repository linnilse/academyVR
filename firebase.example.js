import firebase from 'firebase';

var config = {
    apiKey: "__SECRET__",
    authDomain: "__SECRET__",
    databaseURL: "__SECRET__",
    projectId: "__SECRET__",
    storageBucket: "__SECRET__",
    messagingSenderId: "__SECRET__"
};
firebase.initializeApp(config);

export default firebase;