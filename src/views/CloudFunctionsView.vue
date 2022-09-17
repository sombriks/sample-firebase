<template>
  <div>
    <h1>Call a cloud function</h1>
    <button @click="callCloud">Call</button>
    <p>{{ hello }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { httpsCallable } from "@firebase/functions";

import { fbFunctions } from "../config/firebase";

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
