<template>
  <div class="space-y-2">
    <label :for="field.name" class="block text-sm font-medium">
      {{ field.label }}
    </label>
    <Field :name="field.name" v-slot="{ field: formField, errors }">
      <input
        v-bind="formField"
        :type="field.type"
        :id="field.name"
        :placeholder="field.placeholder"
        :class="[errors.length > 0 ? 'input-error' : '']"
        class="input-base"
      />
    </Field>
    <ErrorMessage :name="field.name" class="form-error" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Field, ErrorMessage } from "vee-validate";

const { field } = defineProps({
  field: Object,
});
</script>

<style scoped>
.input-base {
  @apply w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.input-error {
  @apply border-red-500 focus:ring-red-500;
}

.form-error {
  @apply text-sm text-red-500;
}
</style>
