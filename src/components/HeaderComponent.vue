<script setup>
import IconCoin from './icons/IconCoin.vue'
import IconLogo from './icons/IconLogo.vue'
</script>

<template>
  <header class="h-[100px] w-screen bg-[#FFF6DE] img">
    <div class="flex items-center justify-between mx-[500px] my-[10px]">
      <IconLogo />
      <div class="flex items-center gap-2">
        <IconCoin class="size-[30px]" />
        <div class="text-[30px] flex items-center BorderCoin">
          <span class="text-[#F7405E] font-extrabold decoration-black">99 999</span>
          <span class="font-extrabold text-[#]">.99</span>
        </div>
      </div>
      <div class="flex justify-center items-center gap-4">
        <h1
          class="font-extrabold text-[#54C3EE] drop-shadow-md text-[20px] text-shadow BorderProfile"
        >
          PERFIL
        </h1>
        <div class="RadiusIcon w-[46px] h-[46px]">
          <img src="/src/components/icons/Fushiguro.jpg" alt="" class="BorderIcon w-full h-full" />
        </div>
        <div class="w-[20px] h-[20px]">
          <img
            src="/src/components/icons/IconBrazil.png"
            alt=""
            class="w-full h-full IconBrazil drop-shadow-md"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.img {
  position: relative;
  width: 100vw;
}
.img::after {
  content: '';
  position: absolute;
  bottom: -15px;
  width: 100%;
  height: 50px;
  background-image: url('/src/assets/wave.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 120%;
}

.BorderProfile {
  text-shadow:
    -1px -1px 0 #000000,
    1px -1px 0 #000000,
    -1px 1px 0 #000000,
    1px 1px 0 #000000;
}

.BorderCoin span {
  text-shadow:
    -1px -1px 0 #000000,
    1px -1px 0 #000000,
    -1px 1px 0 #000000,
    1px 1px 0 #000000;
}

.BorderCoin span:nth-child(2) {
  color: white;
}

.BorderIcon {
  border-radius: 100%;
}

.RadiusIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: solid 2px black;
}

.IconBrazil {
  border-radius: 100%;
  box-shadow: black;
}
</style>
