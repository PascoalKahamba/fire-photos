<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { LogIn } from 'lucide';

defineProps<{
  msg: string;
}>();
</script>
<template>
  <header
    class="bg-slate-200 flex justify-around items-center w-full text-slate-900 fixed h-[48px] z-50 mt-0"
  >
    <RouterLink to="/" class="hover:text-slate-950 hover:bg-white transition-all p-3"
      >FirePhotos</RouterLink
    >
    <RouterLink class="hover:text-slate-950 hover:bg-white transition-all p-3" to="/login"
      >Login
    </RouterLink>
  </header>
</template>
