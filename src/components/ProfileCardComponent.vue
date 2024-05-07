<script setup>
defineProps({
    title: String,
    icon: String,
    played: Number,
    gameIcon: String,
    svgIcon: String

}) 
</script>

<template>
        <div
            class="relative bg-[url('../assets/profileCard.svg')] w-[330px] h-[74px] bg-no-repeat drop-shadow-[0_6px_0_rgba(0,0,0,0.1)]">
            <div class="absolute bg-no-repeat w-[81.57px] h-[74px] top-[1px]"
                :style="{ backgroundImage: `url( ${svgIcon} )` }">
                <div class="absolute top-[-5px] h-[76px] w-[80px] bg-cover bg-no-repeat"
                    :style="{ backgroundImage: `url( ${icon} )` }">
                </div>
                <div class="absolute w-[66.52px] h-[43.62px] bg-no-repeat bg-cover left-[-15px] top-[27px]"
                    :style="{ backgroundImage: `url( ${gameIcon} )` }">
                </div>
            </div>
            <p class=" absolute top-[10px] left-[110px]">Total Game Played:</p>
            <p class="fontPerso absolute bottom-[10px] left-[100px] text-[25px] text-[#FFA826]">{{ title }}</p>
            <p class=" absolute top-[20px] right-[35px] text-[23px] font-bold">{{ played }}</p>
        </div>
</template>

<style scoped>
.fontPerso {
    font-family: 'PocketMonk', sans-serif;
}
</style>