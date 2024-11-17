<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="flex gap-2">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/room/1">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
