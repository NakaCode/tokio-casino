<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div class="flex flex-col justify-between h-screen bg-[orange]">
    <HeaderComponent />
    <RouterView />
    <footer class="bg-slate-600 h-[100px]">
      <h1>tchau</h1>
    </footer>
  </div>
</template>

<style scoped></style>
