<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div class="text-subtitle2">{{ post.author }} - {{ post.date }}</div>
    </q-card-section>

    <q-card-section>
      <div>{{ post.description }}</div>
      <div class="ellipsis-2-lines">{{ post.body }}</div>
    </q-card-section>

    <q-card-actions align="between">
      <div>
        <q-btn flat color="primary" icon="edit" v-if="isAuthenticated" @click="editPost" />
        <q-btn flat color="negative" icon="delete" v-if="isAuthenticated" @click="deletePost" />
      </div>
      <q-btn flat color="primary" @click="showMore">
        Show More
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from 'src/composables/useAuth';
import { Post } from 'src/types/Post';

export default defineComponent({
  name: 'PostCard',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    const showMore = () => {
      router.push({ name: 'singlePost', params: { id: props.post.id.toString() } });
    };

    const editPost = () => {
      // Implement edit functionality
      console.log('Edit post', props.post.id);
    };

    const deletePost = () => {
      // Implement delete functionality
      console.log('Delete post', props.post.id);
    };

    return {
      isAuthenticated,
      showMore,
      editPost,
      deletePost
    };
  }
});
</script>

<style scoped>
.ellipsis-2-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
