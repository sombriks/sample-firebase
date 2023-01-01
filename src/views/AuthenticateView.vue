<template>
  <div>
    <h1>Authenticate</h1>
    <button @click="userStore.fbLogin">Login/Logout</button>
    <p v-if="userStore?.user && userStore?.user?.uid">
      Hello, {{ userStore?.user?.displayName }}!
    </p>
    <p v-else>
      Not logged
    </p>
  </div>
</template>

<script setup>
// https://firebase.google.com/docs/auth/web/manage-users#get_a_users_profile
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

</script>
