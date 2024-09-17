<template>
  <q-page padding>
    <div v-if="post" class="q-pa-md" style="max-width: 800px; margin: 0 auto;">
      <h1 class="text-h3">{{ post.title }}</h1>
      <p class="text-subtitle1 q-mb-md">By {{ post.author }} on {{ post.date }}</p>
      <p class="text-body1">{{ post.description }}</p>
      <p class="text-body1">{{ post.body }}</p>
      <q-btn color="primary" to="/" label="Back to Home" class="q-mt-lg" />
    </div>
    <div v-else class="text-center">
      <p class="text-h5">Post not found</p>
      <q-btn color="primary" to="/" label="Back to Home" class="q-mt-md" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue';
import { Post } from 'src/types/Post';

export default defineComponent({
  name: 'SinglePostPage',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const post = ref<Post | null>(null);

    onMounted(() => {
      // In a real application, you would fetch the post data from an API
      // For now, we'll use mock data
      const mockPosts: Post[] = [
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
      ];

      const postId = Number(props.id);
      post.value = mockPosts.find(p => p.id === postId) || null;
    });

    return {
      post
    };
  }
});
</script>
