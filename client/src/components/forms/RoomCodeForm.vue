<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Input from "../ui/input/Input.vue";

const emit = defineEmits<{
  (e: "submit", code: string): void;
}>();

const formSchema = toTypedSchema(
  z.object({
    code: z.string().length(6, "Room code must be exactly 6 characters long."),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
  emit("submit", values.code);
});
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-2">
    <FormField
      name="code"
      v-slot="{ componentField }"
      :validate-on-blur="false"
      :validate-on-change="false"
    >
      <FormItem class="flex flex-col">
        <FormLabel>Room Code</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="Room Code"
            v-bind="componentField"
            maxlength="6"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">Join Room</Button>
  </form>
</template>
