<script setup>
import CardComponent from '@/components/CardComponent.vue';
import DepositComponent from '@/components/DepositComponent.vue'
</script>

<template>
  <main class="h-full flex justify-center items-center flex-col gap-10">
    <CardComponent title="TOKIO SLOTS" icon="./public/Icon1.png" gameIcon="./public/777.svg" active="100"
      online="200" />
    <CardComponent title="TOKIO LOTTO" icon="./public/Icon2.png" gameIcon="./public/8ball.svg" active="100"
      online="200" />
    <DepositComponent />
  </main>
</template>
