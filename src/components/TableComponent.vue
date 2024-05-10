<script setup>
import FichaComponent from './FichaComponent.vue';
</script>

<template>
    <div
        class="relative flex items-center justify-center bg-[#D0C5AD] w-[50px] h-[50px] rounded-[6px] border-2 border-[#341D1A4D/70]">
        <FichaComponent />
        <p class="absolute fontPerso2 text-[26px] text-white">24</p>
    </div>
</template>

<style scoped>
.fontPerso2 {
    font-family: "Bungee", sans-serif !important;
    font-weight: 400;
    font-style: normal;
}
</style>