<script setup lang="ts">
import ModalView from '@/components/ModalView.vue';
import { useCounterStore } from '../stores/counter';
import { defineProps } from 'vue';
defineProps<{
  count: number;
}>();
const store = useCounterStore();

function increment() {}
</script>

<template>
  <section class="mt-12">
    <h1>Profile</h1>
    <button @click="increment">adcionar</button>
    <p>{{ store.specialId }}</p>
    <ModalView />
  </section>
</template>
