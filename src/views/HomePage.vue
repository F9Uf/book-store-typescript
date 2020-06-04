<template>
  <div class="home flex flex-wrap">
    <div id="book-item"
      class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-10 px-3"
      v-for="(book, index) in books"
      :key="index"
    >
      <item
        class="mx-auto"
        :book="book"
        @click="addBookToCart"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BookModel } from "@/books/model";
import { CartModel } from "@/cart/model";
import Item from "@/components/Item.vue";

@Component({
  components: {
    Item
  }
})
export default class HomePage extends Vue {
  @Prop() public books!: BookModel[];
  @Prop() public cart!: CartModel[];

  addBookToCart(seletedBook: BookModel) {
    this.cart.push({
      cartId: this.cart.length,
      book: seletedBook
    } as CartModel);
  }
}
</script>
