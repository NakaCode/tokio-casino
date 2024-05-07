<script setup>
import ProfileCardComponent from '@/components/ProfileCardComponent.vue'
import ProfileImageComponent from '@/components/ProfileImageComponent.vue'
</script>

<template>
    <main class="h-full flex justify-center items-center flex-col gap-20">
        <ProfileImageComponent picture="../icon/Fushiguro.jpg" />
        <div class="relative flex gap-10 flex-col">
            <ProfileCardComponent title="TOKIO SLOTS" icon="./public/Icon1.png" played="100" gameIcon="./public/777.svg"
                svgIcon="../src/assets/profileGameIcon.svg" widthGameIcon="66.52px" heightGameIcon="43.62px" />
            <ProfileCardComponent title="TOKIO LOTTO" icon="./public/Icon2.png" played="200"
                gameIcon="./public/8ball.svg" svgIcon="../src/assets/profileGameIcon2.svg" widthGameIcon="59.79px"
                heightGameIcon="54.67px" />
        </div>

    </main>
</template>
