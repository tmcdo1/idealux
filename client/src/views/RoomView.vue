<script setup lang="ts">
import MessageForm from "@/components/forms/MessageForm.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;

// Connect to websocket for room
</script>

<template>
  <div class="container py-4 h-full flex flex-col">
    <div>Welcome to room {{ id }}</div>

    <main class="w-full h-full flex flex-col">
      <!-- Submitted ideas (deduped) -->
      <div class="h-full">
        <h2>Submitted Ideas</h2>
        <ul>
          <li>Here's an idea</li>
        </ul>
      </div>

      <!-- Input -->
      <MessageForm class="w-full flex-grow-0" />
    </main>

    <!-- Sidebar: Control Panel -->
    <RoomControlPanel />
  </div>
</template>

<style scoped>
#app {
  @apply h-dvh flex flex-col;
}
</style>
