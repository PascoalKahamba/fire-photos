<script setup lang="ts">
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
const uniquePhoto = computed(() => store.data.filter((data) => data.id === store.specialId));
</script>

<template>
  <section
    class="fixed z-[1000] w-full h-full bg-slate-800 flex justify-center items-center top-0 opacity-5"
    data-aos="fade-down"
    data-aos-duration="200"
  >
    <div v-for="photo in uniquePhoto" :key="photo.id" class="w-[50%] p-5 rounded-lg">
      <img :src="photo.fotos[0].src" :alt="photo.fotos[0].src" class="w-full" />
      <h1>{{ photo.nome }}</h1>
    </div>
  </section>
</template>
