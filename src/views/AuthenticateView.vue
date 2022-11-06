<template>
  <div>
    <h1>Authenticate</h1>
    <button @click="fbLogin">Login</button>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {fbAuth} from "../config/firebase"
import {GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const fbLogin = (e) => {
  console.log(e)
  const provider = new GoogleAuthProvider();
  signInWithPopup(fbAuth, provider).then(result => {
    console.log(result)
  })
}
</script>
