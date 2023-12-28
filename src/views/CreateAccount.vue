<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const error = ref(false);

function errorMessage(field: string) {
  return !field || (!Number.isNaN(+field) && true);
}

const errorUsername = errorMessage(username.value);
const errorEmail = errorMessage(email.value);
const errorPassword = errorMessage(password.value);

function createAccount() {
  if (errorMessage(username.value) || errorMessage(email.value) || errorMessage(password.value)) {
    error.value = true;
    return;
  }
  username.value = '';
  email.value = '';
  password.value = '';
  error.value = false;
}
</script>
<template>
  <section class="mt-12 flex gap-5">
    <div class="w-[50%] h-[100vh]" data-aos="fade-right" data-aos-duration="2000">
      <img src="../assets/create-account.jpg" alt="create-account-picture" class="w-full h-full" />
    </div>
    <form
      class="w-[50%] flex flex-col gap-5 lg:self-center"
      data-aos="fade-left"
      data-aos-duration="2000"
      @submit.prevent="createAccount"
    >
      <h1 class="self-center font-semibold text-2xl">Cadastre-se</h1>
      <div>
        <label for="username">Usuario: </label>
        <p>
          <input
            type="text"
            class="border-none p-3 w-full bg-slate-200 rounded-md outline-blue-700"
            id="username"
            v-model="username"
          />
          <span class="text-red-600 italic" v-show="errorUsername && error">usuario invalido!</span>
        </p>
      </div>
      <div>
        <label for="email">Email: </label>
        <p>
          <input
            type="email"
            class="border-none p-3 w-full bg-slate-200 rounded-md outline-blue-700"
            id="email"
            v-model="email"
          />
          <span class="text-red-600 italic" v-show="errorEmail && error">Email invalido!</span>
        </p>
      </div>
      <div>
        <label for="password">Senha: </label>
        <p>
          <input
            type="text"
            class="border-none p-3 w-full bg-slate-200 rounded-md outline-blue-700"
            id="password"
            v-model="password"
          />
          <span class="text-red-600 italic" v-show="errorPassword && error">Senha invalido!</span>
        </p>
      </div>

      <button
        class="bg-blue-700 p-3 self-center w-28 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
      >
        Cadastro
      </button>
    </form>
  </section>
</template>
