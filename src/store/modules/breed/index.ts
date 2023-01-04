import { defineStore } from 'pinia';

export const useBreedStore = defineStore('plant', {
  state: () => ({
    gangKoName: '',
  }),

  getters: {
    setting(state) {
      return { ...state };
    },
  },

  actions: {
    setBaseName(name: string) {
      this.gangKoName = name;
    }
  },
});
