import { defineStore } from 'pinia';

export const useBreedStore = defineStore('plant', {
  state: () => ({
    gangKoName: '',
    chuanName: ''
  }),

  getters: {
    setting(state) {
      return { ...state };
    },
  },

  actions: {
    setBaseName(name: string) {
      this.gangKoName = name;
    },
    setChuanName(name: string){
      this.chuanName = name
    }
  },
});
