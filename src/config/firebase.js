import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

import fbConfig from "../../firebase.json";

export const fbApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
});

export const fbFunctions = getFunctions(fbApp);

export const fbAuth = getAuth(fbApp);

export const db = getFirestore(fbApp);

if (import.meta.env.DEV) {
  connectFunctionsEmulator(fbFunctions, "localhost", fbConfig.emulators.functions.port);
  connectAuthEmulator(fbAuth, `http://localhost:${fbConfig.emulators.auth.port}`);
  connectFirestoreEmulator(db, `localhost`, fbConfig.emulators.firestore.port);
}
