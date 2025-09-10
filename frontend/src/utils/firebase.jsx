import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyClXB3tM56pArXa_jBo4hXVUf9Ny3akzR8",
  authDomain: "ai-resume-checker-bb0e4.firebaseapp.com",
  projectId: "ai-resume-checker-bb0e4",
  storageBucket: "ai-resume-checker-bb0e4.firebasestorage.app",
  messagingSenderId: "221122529230",
  appId: "1:221122529230:web:eecede8241c9d0275d8d9f",
  measurementId: "G-LXZTSJQW2Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
