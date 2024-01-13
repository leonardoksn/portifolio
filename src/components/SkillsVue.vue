
<script setup lang="ts">

import Backend from "../assets/backend.png";
import Database from "../assets/database.png";
import Devops from "../assets/devops.png";
import Frontend from "../assets/frontend.png";
import Language from "../assets/languages.png";

const skills = [
    {
        title: "Linguagens",
        image: Language,
        description: `Utilizo essas linguagens para desenvolver minhas aplicações. JavaScript e
                        TypeScript proporcionam recursos dinâmicos, enquanto Python oferece simplicidade e versatilidade. O
                        PL/SQL é ideal para gerenciar eficientemente os dados no banco.`
    },
    {
        title: "Frontend",
        image: Frontend,
        description: `Aprimoro a experiência do usuário com frameworks como React, Vue e Nuxt. Utilizo PrimeVue para
                        componentes avançados.Com HTML/CSS com Bootstrap e Tailwind para crio interfaces atraentes e
                        responsivas.`
    },
    {
        title: "Backend",
        image: Backend,
        description: ` Construa uma base sólida para seu aplicativo com Node.js e Express. O framework Nest oferece uma
                        arquitetura robusta. Integro Socket.IO para comunicação em tempo real e Redis para gerenciamento
                        eficiente de dados na camada de backend.`
    },
    {
        title: "Banco",
        image: Database,
        description: `Uso uma variedade de sistemas de banco de dados para atender às necessidades especificas dos meus
                        projetos. Utilizo PostgreSQL, Oracle, SQLite ou MySQL para armazenar e gerenciar dados de maneira
                        eficaz.`
    },
    {
        title: "Devops",
        image: Devops,
        description: `  Simplifique o processo de desenvolvimento e implementação com ferramentas DevOps essenciais. Uso
                        Docker para empacotamento e implantação consistentes, e Docker Swarm para orquestração eficiente de
                        contêineres.`
    },
]
</script>
<template>
    <div id="skills" className="w-full sm:h-screen skill-component">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-2 border-grey-500">
                    Skills
                </p>
                <p className="py-4">Veja minhas habilidades</p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-5 text-center py-8">
                <div v-for="skill in  skills " :key="skill.title"
                    className="skills shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
                    <img className="w-10 mx-auto" :src="skill.image" alt="Developing icon" />
                    <p className="my-4 font-semibold">{{ skill.title }}</p>
                    <p className="my-4">
                        {{ skill.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.skills {
    background-color: #828df0;
    padding: 1em;
    border-radius: 4px;

}

.skill-component{
    background-color: #2f2f55;
}
</style>