<script setup>
import ProfileCardComponent from '@/components/ProfileCardComponent.vue'
</script>

<template>
    <main class="h-full flex justify-center items-center flex-col gap-20 bg-[#FFC434]">
        <div
            class="bg-[url('../components/icons/Fushiguro.jpg')] w-[188px] h-[188px] bg-cover rounded-[50%] border-2 border-[#341D1A] drop-shadow-[0_6px_0_rgba(0,0,0,0.25)]">
        </div>
        <div class="relative flex items-center justify-center">
            <div
                class="absolute z-10 border-[#000000] border-solid border-2 rounded-[41px] w-[215px] h-[37.57px] bg-[#FEFEFF] justify-center items-center flex">
                <p class="font-bold text-[20px]">UPLOAD PICTURE:</p>
            </div>
            <div
                class="absolute top-[-13px] z-0 border-[#000000] border-solid border-2 rounded-[41px] w-[215px] h-[37.57px] bg-[#515895] justify-center items-center flex">
            </div>
        </div>
        <div class="relative">
            <ProfileCardComponent title="TOKIO SLOTS" icon="./public/Icon1.png" played="100" gameIcon="./public/777.svg"
                svgIcon="../src/assets/profileGameIcon.svg"></ProfileCardComponent>
            <ProfileCardComponent title="TOKIO LOTTO" icon="./public/Icon2.png" played="200" gameIcon="./public/8ball.svg"
                svgIcon="../src/assets/profileGameIcon2.svg"></ProfileCardComponent>

        </div>

    </main>
</template>