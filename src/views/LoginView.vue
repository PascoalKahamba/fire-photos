<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const username = ref('');
const password = ref('');
const error = ref(false);
const router = useRouter();
const errorUsername = computed(() => errorMessage(username.value));
const errorPassword = computed(() => errorMessage(password.value));

function errorMessage(field: string) {
  return !field || (!Number.isNaN(+field) && true);
}

function doLogin() {
  if (errorMessage(username.value) || errorMessage(password.value)) {
    error.value = true;
    return;
  }
  username.value = '';
  password.value = '';
  error.value = false;
  // router.push('/profile');
  router.push('/profile');
}
</script>
<template>
  <section class="mt-12 flex gap-5">
    <div class="w-[50%] h-[100vh]" data-aos="fade-right" data-aos-duration="2000">
      <img src="../assets/login.jpg" alt="login-picture" class="w-full h-full" />
    </div>
    <form
      class="w-[50%] flex flex-col gap-5 lg:self-center"
      @submit.prevent="doLogin"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <h1 class="self-center font-semibold text-2xl">Login</h1>
      <div>
        <label for="username">Usuario: </label>
        <p>
          <input
            type="text"
            class="border-none p-3 w-[95%] bg-slate-200 rounded-md outline-blue-700"
            id="username"
            v-model="username"
          />
          <span class="text-red-600 italic" v-show="error && errorUsername">Usuário invalido!</span>
        </p>
      </div>
      <div>
        <label for="password">Senha: </label>
        <p>
          <input
            type="password"
            class="border-none p-3 w-[95%] bg-slate-200 rounded-md outline-blue-700"
            id="password"
            v-model="password"
          />
          <span class="text-red-600 italic" v-show="error && errorPassword">Senha invalida!</span>
        </p>
      </div>
      <button
        type="submit"
        class="bg-blue-700 p-3 w-28 self-center radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
      >
        Entrar
      </button>

      <RouterLink to="/lostpassword" class="w-40">
        <h1 class="text-xl underline text-slate-500 self-start">Perdeu a Senha?</h1>
      </RouterLink>

      <h1 class="font-medium text-xl">Cadrastre-se</h1>
      <p>Ainda não possui conta? Cadastre-se no site.</p>
      <RouterLink to="/createAccount" class="w-28">
        <button
          class="bg-blue-700 p-3 w-28 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
        >
          Cadastro
        </button>
      </RouterLink>
    </form>
  </section>
</template>
