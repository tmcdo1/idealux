<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="sticky top-0 container border py-4 bg-white">
    <nav class="flex gap-2">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/room/1">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
