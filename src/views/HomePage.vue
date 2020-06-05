<template>
  <div class="home flex flex-wrap">
    <promotion-card />
    <div
      id="book-item"
      class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-10 px-3"
      v-for="(book, index) in books"
      :key="index"
    >
      <item class="mx-auto" :book="book" @click="addBookToCart" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync } from "vue-property-decorator";
import { BookModel, CartModel } from "@/model";
import Item from "@/components/Item.vue";
import PromotionCard from "@/components/PromotionCard.vue";

@Component({
  components: {
    Item,
    PromotionCard
  }
})
export default class HomePage extends Vue {
  @Prop() public books!: BookModel[];
  @PropSync("cartProp") public cart!: CartModel[];

  addBookToCart(seletedBook: BookModel) {
    this.cart.push({
      itemNo: this.cart.length,
      book: seletedBook
    } as CartModel);
  }
}
</script>
