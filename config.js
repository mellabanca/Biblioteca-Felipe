import firebase from "firebase/app";
require ("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAzm3PAqDpDZVo1Kj5fuNxUUdCaTwNowsM",
  authDomain: "biblioteca-eletronica-3eb72.firebaseapp.com",
  projectId: "biblioteca-eletronica-3eb72",
  storageBucket: "biblioteca-eletronica-3eb72.appspot.com",
  messagingSenderId: "712264974128",
  appId: "1:712264974128:web:1733fc3d2e0ee7d07a92f5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();