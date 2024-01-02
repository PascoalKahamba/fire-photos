<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useCounterStore, type CommentsProps } from '../stores/counter';

const props = defineProps({
  count: {
    type: Number,
    // required: true
    default: 300
  },
  people: {
    type: Object,
    default() {
      return { name: 'Pascoal', age: 21 };
    }
  },
  data: {
    validator(value: string) {
      return ['Pascoal', 'Ndondi', 'Kahamba'].includes(value);
    }
  }
});

const count = ref(props.count);
console.log(props.people);
console.log(props.data);
const store = useCounterStore();
const comment = ref('');
const error = ref(false);
const edit = ref(false);
const commentEdited = ref<CommentsProps>({ id: 0, comment: '' });
const errorComment = computed(() => errorMessage(comment.value));
const uniquePhoto = computed(() => store.data.filter((data) => data.id === store.specialId));

function errorMessage(field: string) {
  return !field || (!Number.isNaN(+field) && true);
}

console.log('count ', count.value);

watchEffect(() => console.log('edit', edit.value));

function getUniqueId() {
  return Number(Math.round(Math.random() * 100));
}

function editComment(id: number) {
  edit.value = true;
  commentEdited.value = store.comments.find((comment) => comment.id === id) as CommentsProps;
  comment.value = commentEdited.value.comment;
}

function deeplyEdit() {
  store.comments = store.comments.map((comments) => {
    if (comments.id === commentEdited.value.id) {
      return {
        id: comments.id,
        comment: comment.value
      };
    } else {
      return comments;
    }
  });

  edit.value = false;
}

function cancel() {
  edit.value = false;
  comment.value = '';
  error.value = false;
}

function deleteComment(id: number) {
  store.comments = store.comments.filter((comment) => comment.id !== id);
}

function postComment() {
  if (errorMessage(comment.value)) {
    error.value = true;
    return;
  }
  if (!edit.value) {
    store.comments.push({
      id: getUniqueId(),
      comment: comment.value
    });
  } else {
    deeplyEdit();
  }
  console.log(store.comments);
  comment.value = '';
  error.value = false;
}
</script>

<template>
  <section
    class="fixed z-[1000] w-lvw h-lvh bg-slate-100 flex justify-center items-center top-0 opacity-10"
    data-aos="zoom-in"
    data-aos-duration="200"
  >
    <div
      v-for="photo in uniquePhoto"
      :key="photo.id"
      class="w-[70%] overflow-y-auto rounded-lg bg-white mt-44 max-h-lvh flex gap-2 flex-col mb-40"
    >
      <div class="w-full h-[380px]">
        <img :src="photo.fotos[0].src" :alt="photo.fotos[0].src" class="w-full h-full" />
      </div>
      <div class="p-2 flex gap-2 flex-col">
        <h1 class="text-center font-normal text-xl">{{ photo.nome }}</h1>
        <div class="flex-1" v-for="{ id, comment } in store.comments" :key="id">
          <p>{{ comment }}</p>
          <button
            @click="editComment(id)"
            class="bg-blue-700 p-1 text-xs self-center w-auto radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all mr-2"
          >
            Editar
          </button>
          <button
            @click="deleteComment(id)"
            class="bg-blue-700 p-1 text-xs self-center w-auto radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
          >
            Excluir
          </button>
        </div>
        <form class="w-full flex gap-3 items-center" @submit.prevent="postComment">
          <input
            type="text"
            id="comments"
            v-model="comment"
            placeholder="Digite um comentario"
            class="border-none p-3 w-[70%] bg-slate-200 rounded-md outline-blue-700"
          />
          <button
            type="submit"
            class="bg-blue-700 p-3 self-center w-28 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
          >
            {{ edit ? 'Editar' : 'Comentar' }}
          </button>
          <button
            v-if="edit"
            type="button"
            @click="cancel"
            class="bg-blue-700 p-3 self-center w-28 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all"
          >
            Cancelar
          </button>
        </form>
        <span class="text-red-600 italic -mt-2" v-show="error && errorComment"
          >Campo invalido!</span
        >
        <button
          class="bg-blue-700 p-2 w-32 radius rounded-lg text-slate-200 hover:bg-blue-500 transition-all self-center mb-3"
          @click="store.modal = false"
        >
          Fechar Modal
        </button>
      </div>
    </div>
  </section>
</template>
