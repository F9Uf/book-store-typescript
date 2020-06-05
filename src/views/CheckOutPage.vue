<template>
  <div class="about">
    <h1 class="text-3xl">Check out your orders</h1>
    <promotion-card />
    <div class="w-full rounded overflow-hidden shadow-lg my-5">
      <table class="table-fixed w-full">
        <thead>
          <tr>
            <th class="w-1/2 px-4 py-2">Book's Title</th>
            <th class="w-1/4 px-4 py-2">Number</th>
            <th class="w-1/4 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in GroupBookInCart" :key="index">
            <td class="text-gray-800 border px-4 py-2">
              {{ item.book.title }}
            </td>
            <td class="text-gray-800 border px-4 py-2">{{ item.number }}</td>
            <td class="text-gray-800 border px-4 py-2">
              {{ item.book.price }}
            </td>
          </tr>
          <tr>
            <td colspan="3" class="text-gray-800 border px-4 py-2"></td>
          </tr>
          <tr>
            <td colspan="2" class="text-gray-800 border px-4 py-2">Summary</td>
            <td colspan="1" class="text-gray-800 border px-4 py-2">
              {{ TotalPrice }}฿
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex w-full flex-row-reverse">
      <button
        class="w-1/6 bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        @click="clearCart()"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BookModel, CartModel, GroupCartModel } from "@/model";
import PromotionCard from "@/components/PromotionCard.vue";

@Component({
  components: {
    PromotionCard
  }
})
export default class CheckOutPage extends Vue {
  @Prop() public books!: BookModel[];
  @Prop() public cart!: CartModel[];

  get GroupBookInCart() {
    const groupBook: GroupCartModel[] = [];

    for (let i = 0; i < this.cart.length; i++) {
      const indexOfBookInGroupBook = groupBook.findIndex(
        e => e.book.id === this.cart[i].book.id
      );
      if (indexOfBookInGroupBook >= 0) {
        groupBook[indexOfBookInGroupBook].number += 1;
      } else {
        groupBook.push({
          number: 1,
          book: this.cart[i].book
        });
      }
    }

    return groupBook.sort((a, b) => a.book.id - b.book.id);
  }

  get TotalPrice() {
    let groupBookTmp: GroupCartModel[] = [...this.GroupBookInCart];
    let calculatedPrice = 0;

    while (groupBookTmp.length !== 0) {
      const uniqueBook = groupBookTmp.length;
      const discountPercent = (uniqueBook - 1) * 10;

      // calculate price
      for (let i = 0; i < uniqueBook; i++) {
        calculatedPrice +=
          (groupBookTmp[i].book.price * (100 - discountPercent)) / 100;
        groupBookTmp[i].number -= 1;
      }

      // filter only book which are not calculated
      groupBookTmp = groupBookTmp.filter(e => e.number > 0);
    }
    return calculatedPrice;
  }

  clearCart() {
    // TODO: clear all item in cart
  }
}
</script>
