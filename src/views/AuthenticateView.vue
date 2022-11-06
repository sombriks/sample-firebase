<template>
  <div>
    <h1>Authenticate</h1>
    <button @click="fbLogin">Login</button>
    <p v-if="user.email">
      Hello, {{ user.displayName }}!
    </p>
    <p v-else>
      {{ user.displayName }}
    </p>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {fbAuth} from "../config/firebase"
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const user = ref({displayName: "Not logged"})
const fbLogin = (e) => {
  console.log(e)
  const provider = new GoogleAuthProvider();
  signInWithPopup(fbAuth, provider).then(result => {
    console.log(result)
    user.value = result.user
  })
}
</script>
