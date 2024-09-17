<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/logo.png" alt="Logo">
          </q-avatar>
          Vue Quasar Blog
        </q-toolbar-title>
        <q-space />
        <q-btn flat @click="toggleAuth">
          {{ isAuthenticated ? 'Logout' : 'Login' }}
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuth } from 'src/composables/useAuth';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const { isAuthenticated, toggleAuth } = useAuth();

    return {
      isAuthenticated,
      toggleAuth
    };
  }
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
