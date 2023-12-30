<script setup lang="ts">
import { RouterView } from 'vue-router';
import MyHeader from './components/MyHeader.vue';
import ProfileView from './views/ProfileView.vue';
import { ref } from 'vue';

function stringAnagram(word1: string, word2: string) {
  let count = 0;

  if (word1.length !== word2.length) {
    return false;
  }
  word1.split('').forEach((word) => {
    if (word2.includes(word)) count++;
  });

  if (word1.length === count) return true;
  else return false;
}

function stringAnagram2(word1: string, word2: string) {
  if (word1.length !== word2.length) return false;

  if (word1.split('').sort() === word2.split('').sort()) return true;
  else return false;
}
const count = ref(0);
function increment(num: number) {
  count.value = count.value + num;
}

console.log('Leetcode', stringAnagram2('anagram', 'nagaram'));

const people = {
  name: 'Pascoal',
  age: 21,
  toJSON() {
    return this.age;
  }
};

console.log(JSON.stringify(people));
</script>

<template>
  <section class="absolute">
    <MyHeader msg="Hello World" />
    <RouterView />
  </section>
</template>
