<template>
  <div class="home flex flex-wrap">
    <div id="book-item"
      class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-10 px-3"
      v-for="(book, index) in books"
      :key="index"
    >
      <item
        class="mx-auto"
        :title="book.title"
        :price="book.price"
        :img="require('@/assets/img/books/' + book.img)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BookModel } from "@/books/model";
import Item from "@/components/Item.vue";

@Component({
  components: {
    Item
  }
})
export default class HomePage extends Vue {
  @Prop() private books!: BookModel[];
}
</script>
