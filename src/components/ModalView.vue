<script setup lang="ts">
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
const uniquePhoto = computed(() => store.data.filter((data) => data.id === store.specialId));
</script>

<template>
  <section>
    <div v-for="photo in uniquePhoto" :key="photo.id">
      <img :src="photo.fotos[0].src" :alt="photo.fotos[0].src" />
      <h1>{{ photo.nome }}</h1>
    </div>
  </section>
</template>
