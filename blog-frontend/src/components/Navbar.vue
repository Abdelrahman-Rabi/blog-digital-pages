<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>
        Blog Application
      </q-toolbar-title>

      <!-- Login/Logout buttons based on authentication status -->
      <q-btn flat v-if="!isAuthenticated" @click="login">Login</q-btn>
      <q-btn flat v-if="isAuthenticated" @click="logout">Logout</q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { inject } from 'vue';

// Injecting auth data from the provider
const { isAuthenticated, login, logout } = inject('auth');
</script>

<style scoped>
/* Add any necessary styles */
</style>
