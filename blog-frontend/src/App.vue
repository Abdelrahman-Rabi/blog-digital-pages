<template>
  <q-layout>
    <Navbar />
    <router-view />
  </q-layout>
</template>

<script setup>
import { provide, ref } from 'vue';
import Navbar from 'components/Navbar.vue';

const isAuthenticated = ref(false);
const posts = ref([
  { id: 1, title: 'First Post', body: 'This is the first post.' },
  { id: 2, title: 'Second Post', body: 'This is the second post.' }
]);

// Provide authentication data
provide('auth', {
  isAuthenticated,
  login: () => { isAuthenticated.value = true },
  logout: () => { isAuthenticated.value = false }
});

// Provide blog posts data
provide('blogData', {
  posts
});
</script>

<style scoped>
/* Add any necessary styles */
</style>
