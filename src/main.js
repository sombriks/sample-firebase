import { createApp } from "vue";
import { createPinia } from "pinia";

import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from 'firebase/functions';

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const fb = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

const functions = getFunctions(fb);

httpsCallable(functions, "helloWorld")().then((ret) => {
  console.log(ret);
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
