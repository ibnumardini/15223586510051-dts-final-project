import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbLB7ta6IE_ImDi7skQodYYUf9RWLo_9s",
  authDomain: "dts-final-project-895bc.firebaseapp.com",
  projectId: "dts-final-project-895bc",
  storageBucket: "dts-final-project-895bc.appspot.com",
  messagingSenderId: "636173322702",
  appId: "1:636173322702:web:9619e5b3541b2292f5439f",
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
