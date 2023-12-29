<script setup lang="ts">
import { api } from '../config/axios';
import { ref, watchEffect } from 'vue';
import { useCounterStore, type DataProps } from '../stores/counter';

const loading = ref(false);
const error = ref(false);
const store = useCounterStore();

watchEffect(() => {
  console.log(store.specialId);
});

watchEffect(async () => {
  try {
    loading.value = true;
    const response = await api.get<DataProps[]>('/json/api/produto');
    store.data = response.data;
    console.log(store.data);
  } catch (erro) {
    error.value = true;
    console.log(erro);
  } finally {
    loading.value = false;
    error.value = false;
  }
});
</script>

<template>
  <section class="mt-16 flex justify-center items-center">
    <p v-if="loading">Carregando...</p>
    <p v-else-if="error">Erro de internet por favor tente mais tarde!</p>
    <div
      class="w-[75%] flex justify-center items-center flex-wrap gap-5"
      v-else
      store.data-aos="fade-down"
      store.data-aos-duration="2000"
    >
      <div
        v-for="{ fotos, id, nome } in store.data"
        :key="id"
        @click="store.specialId = id"
        class="w-40 flex-auto bg-slate-200 cursor-pointer rounded-lg p-3"
      >
        <h1 class="text-center font-normal text-xl">{{ nome }}</h1>
        <img :src="fotos[0].src" :alt="fotos[0].titulo" />
      </div>
    </div>
  </section>
</template>
