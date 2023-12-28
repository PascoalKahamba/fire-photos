<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref, watch, watchEffect } from 'vue';
import MyHeader from './components/MyHeader.vue';
import axios from 'axios';

const date = new Date(2023, 1, 28);
const datee = Date.now();
console.log('Date now ', datee);
const ms = new Date(Date.parse('2022-03-17'));
console.log('ms', ms);
const count = ref(0);
const question = ref('');
const answer = ref('Questions usually contain a question mark. ;-)');
date.setDate(date.getDate() + 2);

fetch('https://yesno.wtf/api')
  .then((response) => response.json())
  .then((json) => console.log(json));

watch(
  question,
  async (newQuestion) => {
    if (newQuestion.indexOf('?') !== -1) {
      answer.value = 'Thinking...';
      try {
        const res = await axios.get<{ answer: string; img: string }>('https://yesno.wtf/api');
        answer.value = res.data.answer;
      } catch (error) {
        answer.value = 'Error! Could not reach the API. ' + error;
      }
    }
  },
  { immediate: true }
);

watchEffect(() => {
  console.log('This is actually new way for ', count.value);
});
</script>

<template>
  <section class="absolute">
    <MyHeader msg="Hello World" />
    <RouterView />
  </section>
</template>
