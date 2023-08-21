

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyAWE3njLczD9B1wVq4sJn4j217Jijz8PKY",
    // authDomain: "aircnc-2f94f.firebaseapp.com",
    // projectId: "aircnc-2f94f",
    // storageBucket: "aircnc-2f94f.appspot.com",
    // messagingSenderId: "513635635450",
    // appId: "1:513635635450:web:ebc3b19bd82a9088af7943"

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);