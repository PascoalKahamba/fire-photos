<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const email = ref('');
const error = ref(false);
const router = useRouter();
const errorEmail = computed(() => errorMessage(email.value));

function errorMessage(field: string) {
  return !field || (!Number.isNaN(+field) && true);
}

function passwordSalved() {
  if (errorMessage(email.value)) {
    error.value = true;
    return;
  }
  email.value = '';
  error.value = false;
  router.push('/login');
}
</script>
<template>
  <section class="mt-12 flex gap-5">
    <div class="w-[50%] h-lvh" data-aos="fade-right" data-aos-duration="2000">
      <img src="../assets/lost-password.jpg" alt="login-picture" class="w-full h-full" />
    </div>
    <form
      class="w-[50%] flex flex-col gap-5 lg:self-center"
      @submit.prevent="passwordSalved"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <h1 class="self-center font-semibold text-2xl">Recuperar Senha</h1>
      <div>
        <label for="email">Email: </label>
        <p>
          <input
            type="email"
            class="border-none p-3 w-[95%] bg-slate-200 rounded-md outline-blue-700"
            id="email"
            v-model="email"
          />
          <span class="text-red-600 italic" v-show="error && errorEmail">Email invalido!</span>
        </p>
      </div>

      <button
        type="submit"
        class="bg-blue-700 p-3 w-28 self-center radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
      >
        Recuperar
      </button>
    </form>
  </section>
</template>
