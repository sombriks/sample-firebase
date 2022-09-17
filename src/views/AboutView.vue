<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="helloStore.increment">
      Counter: {{ helloStore.count }}
    </button>
    <p>Doubled is {{ helloStore.doubleCount }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";

const helloStore = useCounterStore();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
