<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;

// Connect to websocket for room
</script>

<template>
  <div>Welcome to room {{ id }}</div>

  <main>
    <!-- Submitted ideas (deduped) -->

    <!-- Input -->
  </main>

  <!-- Sidebar: Control Panel -->
  <RoomControlPanel />
</template>
