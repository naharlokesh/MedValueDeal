//npm i firebase react-router-dom  import his one 
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCg1o-Yy0TFnPSYC_jih31A3tV0MUAObDI",
  authDomain: "medvaluedeal.firebaseapp.com",
  projectId: "medvaluedeal",
  storageBucket: "medvaluedeal.appspot.com",
  messagingSenderId: "96929102220",
  appId: "1:96929102220:web:3c28ccc04780a643753ea9",
  measurementId: "G-VTQLPFSCEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth};
// const analytics = getAnalytics(app);
