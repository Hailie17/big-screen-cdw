<script setup>
import { RouterView } from "vue-router";
import useScalePage from "@/hooks/useScalePage";

let option = {
  targetX: 1920,
  targetY: 1080,
  tragetRatio: 16 / 9,
};

useScalePage(option);
</script>

<template>
  <router-view />
</template>

<style scoped></style>
