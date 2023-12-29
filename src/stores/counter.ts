import { ref } from 'vue';
import { defineStore } from 'pinia';

interface PhotosProps {
  src: string;
  titulo: string;
}
export interface DataProps {
  id: string;
  descricao: string;
  fotos: PhotosProps[];
  nome: string;
}

export const useCounterStore = defineStore('counter', () => {
  const data = ref<DataProps[]>([]);
  const specialId = ref('');
  const modal = ref(false);

  return { data, specialId, modal };
});
