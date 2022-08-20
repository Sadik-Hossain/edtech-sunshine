// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAedo03-XqQ2u_pEBo9mYHsKXzTNmE4e1Y",
//   authDomain: "edtech-290b3.firebaseapp.com",
//   projectId: "edtech-290b3",
//   storageBucket: "edtech-290b3.appspot.com",
//   messagingSenderId: "891413904790",
//   appId: "1:891413904790:web:785a5a51e0b4a3314431b7",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_Api_Key,
  authDomain: import.meta.env.VITE_Auth_Domain,
  projectId: import.meta.env.VITE_Project_Id,
  storageBucket: import.meta.env.VITE_Storage_Bucket,
  messagingSenderId: import.meta.env.VITE_Messaging_SenderId,
  appId: import.meta.env.VITE_App_Id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
