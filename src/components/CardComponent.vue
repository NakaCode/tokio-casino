<script setup>
defineProps({
    title: String,
    icon: String,
    online: Number,
    active: Number,
    gameIcon: String

}) 
</script>
<template>
    <div class="w-[460px] h-[148px] flex flex-col items-end relative">
        <div
            class=" bg-[url('../assets/rectangle2.svg')] w-[130.95px] h-[86px]  absolute">
            <p class="fontPerso text-white text-[14px] text-center absolute right-[10px] top-[6px]">total Online: {{ online }}</p>
        </div>
        <div
            class="bg-[url('../assets/rectangle1.svg')] w-full h-[115px] rounded-tr-[15px] rounded-br-[15px] absolute bottom-0 right-0 drop-shadow-md">
            <h1
                class="fontPerso absolute text-[#FFA826] right-[15%] top-[10%] w-[194.49px] h-[46.27px] text-[35px] text-center">
                {{ title }}</h1>
            <h2 class="fontPerso absolute text-[#EEEEEE] right-[25%] top-[50%] text-[20px]">Ativos: {{ active }}
            </h2>
        </div>
        <div
            class="bg-[url('../assets/bgIcon.svg')] bg-no-repeat w-[163.14px] h-[163.14px] top-[-5px] left-[-285px] relative">
            <div class="bg-[url('../assets/Icon1.png')]  bg-cover w-[162.15px] h-[152px] absolute top-[-13px]"
                :style="{ backgroundImage: `url( ${icon} )` }"></div>
            <div class=" w-[133.05px] h-[87.24px] left-[-30px] top-[55px] absolute bg-no-repeat"
                :style="{ backgroundImage: `url( ${gameIcon} )` }">
            </div>
        </div>
        <div
            class="bg-[#7A85F4] w-[62px] h-[48px] absolute right-[-10px] top-[45%] border-[#341D1A] border-solid border-2 rounded-[16px] ">
            <div
                class="bg-[url('../assets/playIcon.svg')] absolute bg-contain bg-no-repeat w-[33px] h-[25px] top-[22%] left-[32%]">
            </div>
        </div>
    </div>
</template>

<style scoped>
.fontPerso {
    font-family: 'PocketMonk', sans-serif;
}
</style>