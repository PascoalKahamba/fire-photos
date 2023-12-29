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
  <section class="mt-12 flex justify-center items-center">
    <p v-if="loading">Carregando...</p>
    <p v-else-if="error">Erro de internet por favor tente mais tarde!</p>
    <div class="w-[75%] flex justify-center items-center flex-wrap gap-5" v-else>
      <div v-for="{ fotos, id, nome } in data" :key="id" class="w-40 flex-auto">
        <h1>{{ nome }}</h1>
        <img :src="fotos[0].src" :alt="fotos[0].titulo" />
      </div>
    </div>
  </section>
</template>
