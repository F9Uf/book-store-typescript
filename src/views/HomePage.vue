<template>
  <div class="home">
    <item title="Cookie run 11" price="100" :img="require('@/assets/img/books/cookie5.jpg')" />
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "@/components/Item.vue";

export default {
  name: "Home",
  components: {
    Item
  }
};
</script>
