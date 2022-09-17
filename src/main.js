import { createApp } from "vue";
import { createPinia } from "pinia";

import { initializeApp } from "firebase/app";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const fb = initializeApp({ projectId: "sample-firebase-2022 " });
window.fb = fb
// fb.functions()
//   .httpsCallable("helloWorld")()
//   .then((ret) => {
//     console.log(ret);
//   });

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
