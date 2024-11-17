<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import Button from "../ui/button/Button.vue";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import * as z from "zod";

import { useForm } from "vee-validate";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();

const formSchema = toTypedSchema(
  z.object({
    idea: z.string().max(120, "Idea must be 120 characters or less."),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log(`Sending idea: "${values.idea}"`);
});
</script>

<template>
  <form @submit="onSubmit" :class="cn('flex items-center gap-2', props.class)">
    <FormField
      name="idea"
      v-slot="{ componentField }"
      :validate-on-blur="false"
      :validate-on-change="false"
    >
      <FormItem class="w-full">
        <FormLabel class="sr-only">Idea</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="Type your idea here"
            v-bind="componentField"
            maxlength="120"
          />
        </FormControl>
      </FormItem>
    </FormField>
    <Button type="submit">Send</Button>
  </form>
</template>
