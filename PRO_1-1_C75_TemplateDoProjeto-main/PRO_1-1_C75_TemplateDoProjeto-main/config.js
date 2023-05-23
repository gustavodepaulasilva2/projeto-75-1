import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAigcQfT9FaJ3D-gLnxhrFYcPZy24bFfpw",
  authDomain: "projeto-75-30f35.firebaseapp.com",
  databaseURL: "https://projeto-75-30f35-default-rtdb.firebaseio.com",
  projectId: "projeto-75-30f35",
  storageBucket: "projeto-75-30f35.appspot.com",
  messagingSenderId: "551840602471",
  appId: "1:551840602471:web:31666770a53e58f113f7c2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
