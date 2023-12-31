<script setup lang="ts">
import ModalView from '@/components/ModalView.vue';
import { useCounterStore } from '../stores/counter';

// const props = withDefaults(
//   defineProps<{
//     count: number;
//     title: string;
//   }>(),
//   {
//     count: 23
//   }
// );
const props = defineProps(['count', 'title']);
const store = useCounterStore();
//  defineEmits(['increment'])
function increment() {
  props.count;
}
</script>

<template>
  <section class="mt-12">
    <h1>Profile</h1>
    <button @click="$emit('increment', 10)">adcionar</button>
    <p>{{ store.specialId }}</p>
    <p>{{ title }}</p>
    <p>{{ count }}</p>
    <slot />

    <!-- <ModalView /> -->
  </section>
</template>
