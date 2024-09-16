<template>
  <q-page class="row justify-center">
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <h1>Welcome to the Blog</h1>
          <p>Here, you'll find the latest posts.</p>
        </q-card-section>
        <q-card-section>
          <q-btn v-if="!isAuthenticated" @click="login" label="Login" color="primary" />
          <q-btn v-if="isAuthenticated" @click="logout" label="Logout" color="negative" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { inject } from 'vue';

const isAuthenticated = inject('isAuthenticated');
const login = inject('login');
const logout = inject('logout');
</script>
