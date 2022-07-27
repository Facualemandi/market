import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUUu1uK4mcH9YEp5amBYNRf6K4Reh59KM",
  authDomain: "alfareria-markets-4f212.firebaseapp.com",
  projectId: "alfareria-markets-4f212",
  storageBucket: "alfareria-markets-4f212.appspot.com",
  messagingSenderId: "805973456139",
  appId: "1:805973456139:web:693b4d045d50b227815e0e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
