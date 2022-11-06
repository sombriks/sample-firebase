<template>
  <div>
    <h1>Authenticate</h1>
    <button @click="fbLogin">Login/Logout</button>
    <p v-if="user && user.uid">
      Hello, {{ user.displayName }}!
    </p>
    <p v-else>
      Not logged
    </p>
  </div>
</template>

<script setup>
// https://firebase.google.com/docs/auth/web/manage-users#get_a_users_profile
import {ref} from "vue"
import {fbAuth} from "../config/firebase"
import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"

const user = ref({})
const fbLogin = e => {
  console.log(e)
  if (!fbAuth.currentUser) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(fbAuth, provider).then(result => {
      console.log(result)
      user.value = result.user;
    })
  } else {
    signOut(fbAuth).then((e) => {
      user.value = {};
      console.log(e)
      console.log("user sign out");
    });
  }
}
</script>
