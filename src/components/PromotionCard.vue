<template>
  <div class="w-full overflow-hidden bg-red-100">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Promotion</div>
      <ul class="list-inside text-gray-700 text-base">
        <li>ซื้อเล่มไม่ซ้ำกัน 2 เล่ม ลด 10% ของ 2 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 3 เล่ม ลด 20% ของ 3 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 4 เล่ม ลด 30% ของ 4 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 5 เล่ม ลด 40% ของ 5 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 6 เล่ม ลด 50% ของ 6 เล่มนั้น</li>
        <li>ซื้อเล่มไม่ซ้ำกัน 7 เล่ม ลด 60% ของ 7 เล่มนั้น</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PromotionCard extends Vue {}
</script>
