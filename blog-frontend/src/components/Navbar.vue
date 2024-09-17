<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title class="row items-center">
        <q-avatar class="q-mr-sm">
          <img src="~assets/logo.png" alt="Logo">
        </q-avatar>
        <span class="text-weight-bold">Digital Pages Blog</span>
      </q-toolbar-title>
      <q-space />
      <q-btn flat @click="toggleAuth">
        {{ isAuthenticated ? 'Logout' : 'Login' }}
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuth } from 'src/composables/useAuth';

export default defineComponent({
  name: 'NavBar',
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
