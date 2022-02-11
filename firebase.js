import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDK88pMyLRf-pbDFRxS8yzmv7DGhWx_D44",
    authDomain: "my-word-processor.firebaseapp.com",
    projectId: "my-word-processor",
    storageBucket: "my-word-processor.appspot.com",
    messagingSenderId: "184745838836",
    appId: "1:184745838836:web:4c7926af9f6f7d7916b6a1"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore()

  export  {db}; 
