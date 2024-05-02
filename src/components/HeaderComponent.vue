<script setup>
import IconCoin from './icons/IconCoin.vue'
// import IconLogo from './icons/IconLogo.vue'
</script>

<template>
  <div class="h-[110px] flex flex-col">
    <header class="h-[100px] w-screen bg-[#FFF6DE] img z-0">
      <div class="flex items-center justify-between mx-[500px] my-[10px]">
        <img src="/src/components/icons/IconLogo.png" alt="" class="w-[120px]" />
        <!-- <IconLogo /> -->
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
            <img
              src="/src/components/icons/Fushiguro.jpg"
              alt=""
              class="BorderIcon w-full h-full"
            />
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
    <div class="flex gap-4 items-center justify-center z-10 BottonHeader mt-[-10px]">
      <span class="bg-white h-[40px] w-[150px] flex justify-center items-center bungee-regular"
        >DEPÓSITO</span
      >
      <span class="bg-white h-[40px] w-[150px] justify-center items-center flex">SAQUE</span>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
.img {
  position: relative;
  width: 100vw;
}
.img::after {
  content: '';
  position: absolute;
  bottom: -15px;
  width: 100%;
  height: 30px;
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

.IconBrazil:hover {
  scale: 1.5;
  cursor: pointer;
}

.BottonHeader span {
  text-shadow: 0px 2px 3px;
  box-shadow: 0px 5px 5px #515795;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  border: solid 2px black;
}

.BottonHeader span:hover {
  scale: 1.05;
  cursor: pointer;
}
.bungee-relugar {
  font-family: 'Bungee', sans-serif !important;
  font-weight: 600;
  font-style: bold;
}
</style>
