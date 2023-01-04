import { ref } from "vue";
import { defineStore } from "pinia";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { fbAuth } from "../config/firebase";

export const useUserStore = defineStore("user", () => {
  const user = ref({});

  const lastUser = localStorage.getItem("lastUser");
  if (lastUser) {
    user.value = JSON.parse(lastUser);
  }

  const fbLogin = (e) => {
    console.log(e);
    if (!user.value || !user.value.uid) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(fbAuth, provider).then((result) => {
        console.log(result);
        const {
          accessToken,
          displayName,
          email,
          emailVerified,
          isAnonymous,
          uid
        } = result.user;
        user.value = result.user;
        localStorage.setItem("lastUser", JSON.stringify({
          accessToken,
          displayName,
          email,
          emailVerified,
          isAnonymous,
          uid
        }));
      });
    } else {
      signOut(fbAuth).then((e) => {
        user.value = {};
        console.log(e);
        console.log("user sign out");
        localStorage.removeItem("lastUser");
      });
    }
  };

  return { user, fbLogin };
});
