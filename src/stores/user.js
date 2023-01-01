import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { fbAuth } from "../config/firebase";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const fbLogin = e => {
    console.log(e)
    if (!user.value || !user.value.uid) {
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

  return { user, fbLogin };
});