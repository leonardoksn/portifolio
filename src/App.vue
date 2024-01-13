<script setup lang="ts">
import AboutMe from './components/AboutMe.vue';
import HomePage from './components/HomePage.vue';
import LayoutVue from './components/LayoutVue.vue';
import NavbarVue from './components/NavbarVue.vue';
import SkillsVue from './components/SkillsVue.vue';

</script>

<template>
  <LayoutVue>
    <NavbarVue />
    <HomePage />
    <AboutMe />
    <SkillsVue />
  </LayoutVue>
</template>

<style scoped></style>
