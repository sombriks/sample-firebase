<template>
  <div>
    <h1>Call cloud function</h1>
    <p>
      <button @click="callCloud">Call</button>
    </p>
    <p>{{ hello }}</p>
  </div>
</template>

<script setup>
// https://firebase.google.com/docs/functions/http-events
import {ref} from "vue";
import {httpsCallable} from "firebase/functions";

import {fbFunctions} from "../config/firebase";

const hello = ref("");
const callCloud = () => {
  httpsCallable(fbFunctions, "helloWorld")().then((ret) => {
    console.log(ret);
    hello.value = ret.data;
  });
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
