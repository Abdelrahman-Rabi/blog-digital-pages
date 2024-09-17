import { ref } from 'vue';

export function useAuth() {
  const isAuthenticated = ref(false);

  const toggleAuth = () => {
    isAuthenticated.value = !isAuthenticated.value;
  };

  return {
    isAuthenticated,
    toggleAuth
  };
}
