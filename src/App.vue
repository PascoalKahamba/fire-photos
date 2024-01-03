<script setup lang="ts">
import { RouterView } from 'vue-router';
import MyHeader from './components/MyHeader.vue';
import ProfileView from './views/ProfileView.vue';
import { provide, ref } from 'vue';

function handleClick(num: number) {
  console.log('App', num);
}

function twoSum(nums: number[], target: number) {
  const newNums: typeof nums = [];
  const result: typeof nums = [];

  let count = 0;
  nums.forEach((num, index) => {
    let isDiff = Math.abs(target - num);
    if (nums.includes(isDiff) || newNums.includes(isDiff)) {
      return false;
    } else {
      newNums.push(num, index);
    }

    if (newNums.includes(isDiff)) {
      count++;
    }

    newNums.forEach((newNums) => {
      if (count > 1) {
        result.push(newNums, target);
        return;
      }
    });
  });

  console.log(newNums);

  if (result.length === 2) return result;
  else false;
}

console.log(twoSum([2, 1, 5, 3], 4));

const count = ref(20);
provide('key', count);
</script>

<template>
  <section class="absolute">
    <MyHeader msg="Hello World" />
    <ProfileView @increment="handleClick" class="hello" style="{{ color: red; }}" />
    <!-- <RouterView /> -->
  </section>
</template>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
