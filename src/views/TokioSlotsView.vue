<script setup>
import HeaderComponentSlots from '@/components/HeaderComponentSlots.vue'
import FooterComponentSlots from '@/components/FooterComponentSlots.vue'
</script>

<template>
  <div class="h-screen w-screen bg-[#DAF3A6] flex flex-col">
    <HeaderComponentSlots />
    <RouterView class="z-0" />
    <FooterComponentSlots class="z-10" />
  </div>
</template>

<style scoped></style>
