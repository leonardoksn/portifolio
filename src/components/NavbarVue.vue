<script setup lang="ts">
import { ref } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';
import MenuIcon from './icons/MenuIcon.vue';

const nav = ref(false);
function handleClick() {
    console.log(nav.value)
    nav.value = !nav.value;

}

const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};


</script>
<template>
    <div class="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#011627] text-gray-200">
        <div>
            <img src="../assets/logo.png" alt="Logo" style="width: 50px;" />
        </div>

        <ul class="hidden md:flex ">
            <li>
                <a @click="scrollToSection('home')">
                    Home
                </a>
            </li>
            <li>
                <a @click="scrollToSection('about')" >
                    Sobre
                </a>
            </li>
            <li>
                <a @click="scrollToSection('skills')">
                    Skills
                </a>
            </li>
        </ul>
        <div @click="handleClick()" class="md:hidden z-10">
            <MenuIcon v-if="!nav" />
            <CloseIcon v-else />
        </div>

        <ul v-if="nav"
            class='absolute top-0 left-0 w-full h-screen bg-[#22333b] flex flex-col justify-center items-center text-white'>
            <li class="py-6 text-4xl">
                <a @click="scrollToSection('home')">
                    Home
                </a>
            </li>
            <li class="py-6 text-4xl">
                <a @click="scrollToSection('about')" >
                    Sobre
                </a>
            </li>
            <li class="py-6 text-4xl">
                <a @click="scrollToSection('skills')">
                    Skills
                </a>
            </li>ção as 18 anos n
        </ul>
    </div>
</template>