<script setup lang="ts">
import axios from 'axios';
import { ref, watchEffect } from 'vue';

interface PhotosProps {
  src: string;
  titulo: string;
}
interface DataProps {
  id: string;
  descricao: string;
  fotos: PhotosProps[];
  nome: string;
}

const data = ref<DataProps[] | null>([]);
const loading = ref(false);
const error = ref(false);

watchEffect(async () => {
  try {
    loading.value = true;
    const response = await axios<DataProps[]>('https://ranekapi.origamid.dev/json/api/produto');
    data.value = response.data;
    console.log(data.value);
  } catch (erro) {
    data.value = null;
    error.value = erro as boolean;
  } finally {
    loading.value = false;
    error.value = false;
  }
});
</script>

<template>
  <section class="mt-12">Welcome</section>
</template>
