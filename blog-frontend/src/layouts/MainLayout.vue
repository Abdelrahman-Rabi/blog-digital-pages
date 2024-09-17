<template>
  <q-layout view="hHh lpR fFf">
    <nav-bar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from 'components/NavBar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    NavBar
  }
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
