<template>
    <Carousel :value="skills" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
            <div
                className="bg-[#011627] h-[100%] shadow-md shadow-gray-500 duration-500 pt-4 border justify-center flex flex-col text-center">
                <img className="w-10 mx-auto" src="../assets/developing-icon.png" alt="Developing icon" />
                <p className="my-4 font-semibold">{{ slotProps.data.title }}</p>
                <p className="my-4">
                    {{ slotProps.data.description }}
                </p>
            </div>
        </template>
    </Carousel>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

const skills = ref([
    {
        title: "Linguagens",
        description: "JavaScript, TypeScript, Python e PL/SQL"
    },
    {
        title: "Frontend",
        description: "React, Vue, Nuxt, PrimeVue, HTML/CSS, Bootstrap e Tailwind"
    },
    {
        title: "Backend",
        description: "Nodejs, Nest, Express, SocketIO e Redis"
    },
    {
        title: "Banco",
        description: "PostgreSQL, Oracle, SQLite e MySQL"
    },
    {
        title: "Devops",
        description: "Docker, Kubernetes"
    },
])


const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>