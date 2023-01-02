<template>
  <div>
    <h1>Firestore</h1>
    <h2>List todo's</h2>
    {{ todos }}
    <h2>New todo</h2>
    <h2>Modify my todo's</h2>
    <!-- https://firebase.google.com/docs/firestore/quickstart#web-version-9_4 -->
    <!-- https://firebase.google.com/docs/firestore/security/rules-conditions -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const todos = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const _todos = [...todos.value];
  querySnapshot
    .forEach(todo =>
      _todos.push({ _id: todo.id, ...todo.data() }));
  console.log(_todos);
  todos.value = _todos;
});


</script>

<style scoped>

</style>