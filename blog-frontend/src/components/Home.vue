<template>
  <q-page class="q-pa-md">
    <!-- List of blog posts -->
    <q-list bordered>
      <q-item v-for="post in posts" :key="post.id" clickable v-ripple>
        <q-item-section>{{ post.title }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { inject } from 'vue';

// Injecting blog data (posts) from the provider
const { posts } = inject('blogData');
</script>

<style scoped>
/* Add any necessary styles */
</style>
