<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 800px; width: 100%;">
      <h1 class="text-h4 q-mb-md">Blog Posts</h1>
      <post-list :posts="posts" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PostList from 'components/PostList.vue';
import { Post } from 'src/types/Post';

export default defineComponent({
  name: 'HomePage',
  components: {
    PostList
  },
  setup() {
    // This is mock data. In a real application, you would fetch this from an API.
    const posts = ref<Post[]>([
      {
        id: 1,
        title: 'First Blog Post',
        description: 'This is the first blog post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author: 'John Doe',
        date: '2023-09-17'
      },
      {
        id: 2,
        title: 'Second Blog Post',
        description: 'This is the second blog post',
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Jane Smith',
        date: '2023-09-18'
      }
    ]);

    return {
      posts
    };
  }
});
</script>
