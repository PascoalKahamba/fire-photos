<script setup lang="ts">
import ModalView from '@/components/ModalView.vue';
import { useCounterStore } from '../stores/counter';
import { inject } from 'vue';

// const props = withDefaults(
//   defineProps<{
//     count: number;
//     title: string;
//   }>(),
//   {
//     count: 23
//   }
// );
const newCount = inject('key', 50);
const props = defineProps(['count', 'title']);
const store = useCounterStore();
//  defineEmits(['increment'])
function onClick(num: number) {
  emit('increment', num);
}

const emit = defineEmits({
  increment: (num: number) => {
    if (num >= 10) return true;
    else {
      console.warn('function increment is invalid!');
      return false;
    }
  }
});
// const emit = defineEmits<{
//   (event: 'increment', value: number): void;
// }>();
</script>

<template>
  <section class="mt-12">
    <h1>Profile</h1>
    <button @click="onClick(20)" v-bind="$attrs">adcionar</button>
    <p>{{ store.specialId }}</p>
    <p>{{ title }}</p>
    <p>{{ count }}</p>
    <p>{{ $attrs }}</p>
    <p>{{ newCount }}</p>
    <slot />

    <!-- <ModalView /> -->
  </section>
</template>
