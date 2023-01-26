import { ref } from "vue";
import { defineStore } from "pinia";
import {
  collection, getDocs, doc, deleteDoc, query, where, orderBy, limit, addDoc
} from "firebase/firestore";
import { db } from "../config/firebase";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref([]);

  const list = async (simpleWhere, sort) => {
    sort = sort || orderBy("tarefa");
    const snap = await getDocs(
      query(collection(db, "todos"), simpleWhere, sort, limit(20))
    );
    todos.value = snap.docs.map((todo) => ({ _id: todo.id, ...todo.data() }));
    return todos;
  };
  const find = (id) => {
    // TODO
  };
  const insert = async (data) => {
    return await addDoc(collection(db, "todos"), data);
  };
  const update = () => {
    // TODO
  };
  const del = async (id) => await deleteDoc(doc(db, "todos", id));

  return {
    todos,
    list,
    find,
    insert,
    update,
    del
  };
});
