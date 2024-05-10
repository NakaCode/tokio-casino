<script setup>

import AwardComponent from '@/components/AwardComponent.vue';
import HeaderComponentSlots from '@/components/HeaderComponentSlots.vue'
import TableComponent from '@/components/TableComponent.vue'
import IconsSlotsComponent from '@/components/IconsSlotsComponent.vue';
</script>

<template>
    <main class="relative w-screen h-screen bg-repeat-round bg-[url('../assets/bgCloud.jpeg')] ">
        <div class="absolute inset-0 bg-[#AEFAF1]/80"></div>
        <div class="absolute w-full h-screen flex items-center justify-center">
            <div class="relative flex flex-col items justify-center w-[470px] h-[520px] bg-black">
                <div class="absolute w-full h-[17.69%] bg-purple-500 top-0">
                    <IconsSlotsComponent />
                </div>
                <div class="absolute bg-white w-full h-[10.58%] top-[20%]">
                    <AwardComponent />
                </div>
                <div class="absolute w-full h-[62.50%] top-[40%]">
                    <div class="absolute top-0 w-full h-[50%]">
                        <TableComponent />
                    </div>
                    <div class="absolute top-[50%] w-full h-[50%]">
                        <TableComponent />
                    </div>
                </div>
            </div>
        </div>
        <HeaderComponentSlots />
    </main>
</template>

<style scoped>
.fontPerso2 {
    font-family: "Bungee", sans-serif !important;
    font-weight: 400;
    font-style: normal;
}
</style>