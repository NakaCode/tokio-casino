<script setup></script>

<template>
  <div class="h-[110px] flex">
    <header class="h-[90px] w-screen bg-[#FFF6DE] img z-0">
      <div class="flex justify-center items-center gap-10 footeritens my-[50px]">
        <img
          src="/src/components/icons/IconBack.png"
          alt=""
          class="w-[105px] cursor-pointer z-10"
        />
        <img src="/src/components//icons/IconSlots.png" alt="" class="w-[350px] h-full z-10" />
        <img
          src="/src/components/icons/IconHelp.png"
          alt=""
          class="w-[80px] z-10 cursor-pointer hover:animate-pulse"
        />
      </div>
    </header>
  </div>
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
  height: 30px;
  background-image: url('/src/assets/wave.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 120%;
}
</style>
