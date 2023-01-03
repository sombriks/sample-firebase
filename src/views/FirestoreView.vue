<template>
  <div>
    <h1>Firestore</h1>
    <h2>List todo's</h2>
    <ul>
      <li v-for="t in todos" :key="t._id">
        <input type="checkbox" v-model="t.concluida" /> {{ t.tarefa }}
      </li>
    </ul>
    <h2>New todo (if logged)</h2>
    <input v-model="tarefa" />
    <button @click="nova()">add</button>
    <!-- https://firebase.google.com/docs/firestore/quickstart#web-version-9_4 -->
    <!-- https://firebase.google.com/docs/firestore/security/rules-conditions -->
    <h2>clear completed</h2>
    <button @click="clear()">clear</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  where
} from "firebase/firestore";
import { db } from "../config/firebase";

const todos = ref([]);
const tarefa = ref("");

const list = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const _todos = [];
  querySnapshot
    .forEach(todo =>
      _todos.push({ _id: todo.id, ...todo.data() }));
  console.log(_todos);
  todos.value = _todos;
};

onMounted(list);

const nova = async () => {
  await addDoc(collection(db, "todos"), {
    tarefa: tarefa.value, concluida: false
  });
  tarefa.value = "";
  await list();
};

const clear = async () => {
  const ids = todos.value.filter(todo => todo.concluida).map(todo => todo._id);
  ids.forEach(async id => {
    await deleteDoc(doc(db,"todos", id));
  })
  await list();
};
</script>

<style scoped>

</style>