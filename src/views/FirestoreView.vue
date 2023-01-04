<template>
  <div>
    <h1>Firestore</h1>
    <h2>List todo's</h2>
    <label>Show only created by me <input type="checkbox"
                                          v-model="byMe"
                                          @change="list" /></label>
    <ul>
      <li v-for="t in todos" :key="t._id">
        <input type="checkbox" v-model="t.concluida" /> {{ t.tarefa }}
      </li>
    </ul>
    <h2>New todo (if logged)</h2>
    <input v-model="tarefa" :disabled="!userStore.user.uid" />
    <button @click="nova()" :disabled="!userStore.user.uid">add</button>
    <!-- https://firebase.google.com/docs/firestore/quickstart#web-version-9_4 -->
    <!-- https://firebase.google.com/docs/firestore/security/rules-conditions -->
    <br />
    <button @click="clear()">clear completed</button>
    <h2>List personal todo's</h2>
    <p>Only the owner can see or modify those ones.</p>
    <p><small>see
      <a href="https://firebase.google.com/docs/firestore/security/rules-query"
         target="_blank">rules-query</a> for more details</small></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  addDoc
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useUserStore } from "../stores/user";

const todos = ref([]);
const tarefa = ref("");
const byMe = ref(false);

const userStore = useUserStore();

const list = async () => {
  const w = byMe.value ? where("uid", "==", userStore.user.uid) : undefined;
  const querySnapshot = await getDocs(
    query(
      collection(db, "todos"),
      w,
      orderBy("tarefa"),
      limit(20)
    )
  );
  const _todos = [];
  querySnapshot.forEach((todo) =>
    _todos.push({ _id: todo.id, ...todo.data() })
  );
  console.log(_todos);
  todos.value = _todos;
};

onMounted(list);

const nova = async () => {
  await addDoc(collection(db, "todos"), {
    tarefa: tarefa.value,
    concluida: false,
    uid: userStore.user.uid
  });
  tarefa.value = "";
  await list();
};

const clear = async () => {
  const ids = todos.value
    .filter((todo) => todo.concluida)
    .map((todo) => todo._id);
  ids.forEach(async (id) => {
    await deleteDoc(doc(db, "todos", id));
  });
  await list();
};

const listMy = () => {

};

const novaMy = () => {

}
</script>

<style scoped></style>
