<template>
  <Card>
    <CardHeader>
      <div class="flex justify-between">
        <CardTitle>{{ name }}</CardTitle>
        <div class="flex gap-2 items-center">
          <Icon icon="ion:person-sharp" /><span>3</span>
        </div>
      </div>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
  </Card>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Card from "./ui/card/Card.vue";
import CardDescription from "./ui/card/CardDescription.vue";
import CardHeader from "./ui/card/CardHeader.vue";
import CardTitle from "./ui/card/CardTitle.vue";

defineProps<{
  id: number;
  name: string;
  description: string;
}>();
</script>

<style scoped></style>
