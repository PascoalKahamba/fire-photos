<script setup lang="ts">
import { RouterView } from 'vue-router';
import MyHeader from './components/MyHeader.vue';
</script>

<template>
  <section class="absolute">
    <MyHeader msg="Hello World" />
    <RouterView />
  </section>
</template>
