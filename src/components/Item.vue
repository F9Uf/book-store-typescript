<template>
  <div class="max-w-sm rounded overflow-hidden shadow-xl">
    <img
      class="w-full"
      :src="require('@/assets/img/books/' + book.img)"
      alt="img"
    />
    <div class="px-6 py-2">
      <div class="font-bold text-md mb-2">{{ book.title }}</div>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >{{ book.price }}฿</span
      >
    </div>
    <div class="px-6 pt-2 pb-4">
      <button
        class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-full"
        @click="onButtonPress()"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BookModel } from "@/books/model";

@Component
export default class Item extends Vue {
  @Prop() private book!: BookModel;

  public onButtonPress() {
    this.$emit("click", this.book);
  }
}
</script>
