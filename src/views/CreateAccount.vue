<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');
const error = ref(false);
const router = useRouter();

export function errorMessage(field: string) {
  return !field || (!Number.isNaN(+field) && true);
}

async function sendData(username: string, email: string, password: string) {
  await axios.post('/', { username, email, password });
}

const errorUsername = computed(() => errorMessage(username.value));
const errorEmail = computed(() => errorMessage(email.value));
const errorPassword = computed(() => errorMessage(password.value));

function createAccount() {
  if (errorMessage(username.value) || errorMessage(email.value) || errorMessage(password.value)) {
    error.value = true;
    return;
  }
  username.value = '';
  email.value = '';
  password.value = '';
  error.value = false;
  sendData(username.value, email.value, password.value);
  router.push('/login');
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
          <span class="text-red-600 italic" v-show="error && errorUsername">usuario invalido!</span>
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
          <span class="text-red-600 italic" v-show="error && errorEmail">Email invalido!</span>
        </p>
      </div>
      <div>
        <label for="password">Senha: </label>
        <p>
          <input
            type="password"
            class="border-none p-3 w-full bg-slate-200 rounded-md outline-blue-700"
            id="password"
            v-model="password"
          />
          <span class="text-red-600 italic" v-show="error && errorPassword">Senha invalido!</span>
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
