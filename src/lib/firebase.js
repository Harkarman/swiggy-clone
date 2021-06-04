import Firebase from "firebase/app";
import "firebase/firestore";
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyAu-WFc_kTR4JZ3AiKE1AuBq-C6Ike9quw",
  authDomain: "swiggy-clone-69.firebaseapp.com",
  projectId: "swiggy-clone-69",
  storageBucket: "swiggy-clone-69.appspot.com",
  messagingSenderId: "220734382350",
  appId: "1:220734382350:web:df2c95d38623c57deeb75f",
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);
// console.log("firebase", firebase);

export { firebase };
