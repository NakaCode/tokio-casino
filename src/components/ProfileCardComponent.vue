<script setup>
defineProps({
    title: String,
    icon: String,
    played: Number,
    gameIcon: String,
    svgIcon: String,
    widthGameIcon: String,
    heightGameIcon: String

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
            <div class="absolute bg-no-repeat bg-cover left-[-15px] top-[27px]" :style="{
                backgroundImage: `url( ${gameIcon} )`,
                width: widthGameIcon,
                height: heightGameIcon
            }">
            </div>
        </div>
        <p class="fontPerso3 absolute top-[10px] left-[110px]">Total Game Played:</p>
        <p class="fontPerso absolute bottom-[10px] left-[100px] text-[25px] text-[#FFA826]">{{ title }}</p>
        <p class="fontPerso2 absolute top-[20px] right-[35px] text-[23px] ">{{ played }}</p>
    </div>
</template>

<style scoped>
.fontPerso {
    font-family: 'PocketMonk', sans-serif;
    font-weight: 400;
    font-style: normal;
}

.fontPerso2 {
    font-family: "Bungee", sans-serif;
    font-weight: 400;
    font-style: normal;
}


.fontPerso3 {
    font-family: 'Yokelvision', sans-serif;
    font-weight: 400;
    font-style: normal;
}
</style>