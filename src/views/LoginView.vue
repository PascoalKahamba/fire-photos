<script setup lang="ts">
import { RouterLink } from 'vue-router';

function doLogin() {
  console.log('User login');
}
</script>
<template>
  <section class="mt-12 flex gap-5">
    <div class="w-[50%]">
      <img src="../assets/login.jpg" alt="login picture" class="w-full h-full" />
    </div>
    <form class="w-[50%] flex flex-col gap-5" @submit.prevent="doLogin">
      <h1 class="self-center font-semibold text-2xl">Login</h1>
      <div>
        <label for="user">Usuario: </label>
        <p>
          <input
            type="text"
            class="border-none p-3 w-[95%] bg-slate-200 rounded-md outline-blue-700"
            id="user"
          />
        </p>
      </div>
      <div>
        <label for="password">Senha: </label>
        <p>
          <input
            type="text"
            class="border-none p-3 w-[95%] bg-slate-200 rounded-md outline-blue-700"
            id="password"
          />
        </p>
      </div>
      <button
        class="bg-blue-700 p-3 w-28 self-center radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
      >
        Entrar
      </button>

      <RouterLink to="/lostpassword" class="text-xl underline text-slate-500"
        >Perdeu a Senha?</RouterLink
      >

      <h1 class="font-medium text-xl">Cadrastre-se</h1>
      <p>Ainda não possui conta? Cadastre-se no site.</p>
      <RouterLink to="/createAccount">
        <button
          class="bg-blue-700 p-3 w-28 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all mb-2"
        >
          Cadastro
        </button>
      </RouterLink>
    </form>
  </section>
</template>
