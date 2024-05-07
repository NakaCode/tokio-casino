<script setup>
defineProps({
    picture: String,
})

</script>

<template>
    <div class="bg-[url('../components/icons/Fushiguro.jpg')] w-[188px] h-[188px] bg-cover rounded-[50%] border-2 border-[#341D1A] drop-shadow-[0_6px_0_rgba(0,0,0,0.25)]"
        :script="{ backgroundimage: `url(${picture})` }">
    </div>
    <div class="relative flex items-center justify-center cursor-pointer">
        <div
            class="absolute z-10 border-[#000000] border-solid border-2 rounded-[41px] w-[215px] h-[37.57px] bg-[#FEFEFF] justify-center items-center flex">
            <p class="fontPerso2 font-bold text-[15px]">UPLOAD PICTURE:</p>
        </div>
        <div
            class="absolute top-[-13px] z-0 border-[#000000] border-solid border-2 rounded-[41px] w-[215px] h-[37.57px] bg-[#515895] justify-center items-center flex">
        </div>
    </div>
</template>

<style scoped>
.fontPerso2 {
    font-family: "Bungee", sans-serif !important;
    font-weight: 400;
    font-style: normal;
}
</style>