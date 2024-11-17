<script setup lang="ts">
import RoomCodeForm from "@/components/forms/RoomCodeForm.vue";
import RoomItem from "@/components/RoomItem.vue";
import { Card } from "@/components/ui/card";
import { useRouter } from "vue-router";

const router = useRouter();

const rooms = [
  { id: 1, name: "Room 1", description: "This is the first room." },
  { id: 2, name: "Room 2", description: "This is the second room." },
  { id: 3, name: "Room 3", description: "This is the third room." },
];
</script>

<template>
  <main class="container">
    <section class="py-4">
      <h1
        class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        Welcome to idealux
      </h1>
      <Card class="px-12 py-8">
        <RoomCodeForm
          @submit="
            (code) => router.push({ name: 'room', params: { id: code } })
          "
        />
      </Card>
    </section>

    <section class="py-4">
      <h2>Popular Rooms</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RouterLink
          v-for="room in rooms"
          :key="room.id"
          :to="{ name: 'room', params: { id: room.id } }"
        >
          <RoomItem v-bind="room" />
        </RouterLink>
      </div>
    </section>
  </main>
</template>
