<template>
  <div>
    <post-card
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="q-mb-md"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PostCard from './PostCard.vue';
import { Post } from 'src/types/Post';

export default defineComponent({
  name: 'PostList',
  components: {
    PostCard
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true
    }
  }
});
</script>
