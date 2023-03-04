import { defineStore } from 'pinia';
import { useStorage, useLocalStorage } from '@vueuse/core'
import { reactive } from 'vue';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    
  }),
  actions: {
    
  },
});
