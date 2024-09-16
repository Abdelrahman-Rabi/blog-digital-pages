<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div>{{ post.body }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from 'vue';

// Define post data as props
defineProps({
  post: Object
});
</script>

<style scoped>
/* Add any necessary styles */
</style>
