<script setup></script>

<template>
    <div class="absolute z-50 bg-[#caea89d2] w-[100vw] h-[100vh] flex items-center justify-center">
        <div class="relative flex items-center justify-center w-[315px] h-[312px]">
            <div class="flex items-center justify-center w-full h-full">
                <div
                    class="absolute bg-[url('../assets/cardDeposit.svg')] w-[86.78%] h-[93.91%] left-[10%] top-[10%] bg-no-repeat">
                </div>
                <div class="absolute bg-[url('../assets/cardDeposit2.svg')] w-[80.06%] h-full bg-no-repeat">
                    <div
                        class="absolute bg-[url('../assets/closeButtomDeposit.svg')] w-[55.83px] h-[57.12px] top-[-6%] right-[-3%]">
                    </div>
                    <p class="fontPerso2 absolute text-[14px] text-[#FFA826] w-[161.89px] top-[18%] right-[10%]   ">
                        AVAILABLE TO DEPOSIT:</p>
                    <p class="absolute fontPerso3 text-[12px] right-[33%] bottom-[14%]">Deposit fee is: <span
                            class="text-[12px] text-[#FFA826] fontPerso3">15%</span></p>
                </div>
            </div>
            <div class="absolute w-full h-[39.74%] top-[36%]">
                <div
                    class="absolute flex items-center justify-center w-[60.32%] h-[50.00%] bg-[#887C7B] border-2 border-[#341D1A] rounded-[16px] left-0 top-0">
                    <div
                        class="bg-[url('../assets/TIcon.svg')] w-[25px] h-[25px] drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]">
                    </div>
                    <p class="fontPerso2 text-[20px] text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">99999.99</p>
                </div>
                <div
                    class="absolute flex items-center justify-evenly w-[37.78%] h-[44.35%] bg-[#FEFEFF] border-2 border-[#341D1A] rounded-[16px] right-0 top-0 drop-shadow-[0_9px_0_rgba(81,87,149,1)]">
                    <div
                        class="bg-[url('../assets/TIcon.svg')] w-[25px] h-[25px] drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]">
                    </div>
                    <div class="bg-[url('../assets/arrowDown.svg')] w-[20px] h-[12px] bg-no-repeat bg-auto"></div>
                </div>
                <div
                    class="absolute flex items-center justify-center w-full h-[44.35%] bg-[#7A85F4] border-2 border-[#341D1A] rounded-[16px] bottom-0 drop-shadow-[0_9px_0_rgba(81,87,149,1)]">
                    <p class="fontPerso2 text-white text-[25px] drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]">ADD BALANCE</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fontPerso2 {
    font-family: "Bungee", sans-serif !important;
    font-weight: 400;
    font-style: normal;
}

;

.fontPerso3 {
    font-family: 'Yokelvision', sans-serif;
    font-weight: 400;
    font-style: normal;
}
</style>