<script setup lang="ts">
import { RouterLink } from 'vue-router';

function createAccount() {
  console.log('Created Account');
}
</script>
<template>
  <section class="mt-12 flex gap-5">
    <div class="w-[50%] h-[100vh]">
      <img src="../assets/create-account.jpg" alt="create-account-picture" class="w-full h-full" />
    </div>
    <form class="w-[50%] flex flex-col gap-5 lg:self-center" @submit.prevent="createAccount">
      <h1 class="self-center font-semibold text-2xl">Cadastre-se</h1>
      <div>
        <label for="user">Usuario: </label>
        <p>
          <input
            type="text"
            class="border-none p-3 w-full bg-slate-200 rounded-md outline-blue-700"
            id="user"
          />
        </p>
      </div>
      <div>
        <label for="user">Email: </label>
        <p>
          <input
            type="email"
            class="border-none p-3 w-full bg-slate-200 rounded-md outline-blue-700"
            id="user"
          />
        </p>
      </div>
      <div>
        <label for="password">Senha: </label>
        <p>
          <input
            type="text"
            class="border-none p-3 w-full bg-slate-200 rounded-md outline-blue-700"
            id="password"
          />
        </p>
      </div>

      <RouterLink to="/login" class="w-28 self-center">
        <button
          class="bg-blue-700 p-3 w-28 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
        >
          Cadastro
        </button>
      </RouterLink>
    </form>
  </section>
</template>
