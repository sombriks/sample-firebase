<template>
  <div class="box">
    <div class="item">
      <h1>Firestore</h1>
      <h2>List todo's</h2>
      <label>
        Show only created by me
        <input type="checkbox" v-model="byMe" @change="list" />
      </label>
      <ul>
        <li v-for="t in todoStore.todos" :key="t._id">
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
    </div>
    <div class="item">
      <h2>List personal todo's</h2>
      <p>Only the owner can see or modify those ones.</p>
      <p><small>see
        <a href="https://firebase.google.com/docs/firestore/security/rules-query"
           target="_blank">rules-query</a> for more details</small></p>
      <ul>

      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user";
import { useTodoStore } from "../stores/todo";
import { where } from "firebase/firestore";

const myTodos = ref([]);
const tarefa = ref("");
const byMe = ref(false);

const userStore = useUserStore();
const todoStore = useTodoStore();

const list = async () => {
  const simpleWhere = byMe.value
    ? where("uid", "==", userStore.user.uid)
    : undefined;
  await todoStore.list(simpleWhere);
};

onMounted(list);

const nova = async () => {
  await todoStore.insert({
    tarefa: tarefa.value,
    concluida: false,
    uid: userStore.user.uid
  });
  tarefa.value = "";
  await list();
};

const clear = async () => {
  todoStore.todos.value
    .filter((todo) => todo.concluida)
    .map((todo) => todo._id)
    .forEach(async (id) => await todoStore.del(id));
  await list();
};

const listMy = () => {

};

const novaMy = () => {

};

const editMy = () => {

};

const removeMy = () => {

};
</script>

<style scoped>
.box {
  display: flex;
}

.item {
  flex-grow: 1;
}
</style>
