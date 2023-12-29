<script setup lang="ts">
import { ref } from 'vue';

const firstValue = 1;
const secondValue = ref(2);

defineExpose({
  firstValue,
  secondValue
});
</script>

<template>
  <section>My Profile</section>
</template>
