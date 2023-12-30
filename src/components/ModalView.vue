<script setup lang="ts">
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
const uniquePhoto = computed(() => store.data.filter((data) => data.id === store.specialId));
</script>

<template>
  <section
    class="fixed z-[1000] w-full h-full bg-slate-200 flex justify-center items-center top-0 opacity-5"
    data-aos="zoom-in"
    data-aos-duration="200"
  >
    <div
      v-for="photo in uniquePhoto"
      :key="photo.id"
      class="w-[72%] overflow-y-auto rounded-lg bg-white flex gap-2 flex-col mb-40"
      @click="store.modal = false"
    >
      <div class="w-full h-[380px]">
        <img :src="photo.fotos[0].src" :alt="photo.fotos[0].src" class="w-full h-full" />
      </div>
      <div class="p-2">
        <h1 class="text-center font-normal text-xl">{{ photo.nome }}</h1>
        <div class="flex-1">
          <p>Foto Bunita</p>
          <p>Foto Bunita</p>
          <p>Foto Bunita</p>
        </div>
        <form class="w-full flex gap-3">
          <input
            type="text"
            id="comments"
            placeholder="Digite um comentario"
            class="border-none p-3 w-[70%] bg-slate-200 rounded-md outline-blue-700"
          />
          <button
            type="submit"
            class="bg-blue-700 p-3 self-center w-28 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
          >
            Comentar
          </button>
        </form>
        <button
          class="bg-blue-700 p-3 w-28 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all self-center"
          @click="store.modal = false"
        >
          Fechar Modal
        </button>
      </div>
    </div>
  </section>
</template>
