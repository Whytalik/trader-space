<template>
  <div class="form-container">
    <div class="form-wrapper">
      <h2 class="form-title">{{ title }}</h2>
      <Form
        class="space-y-6"
        :validation-schema="schema"
        @submit="handleSubmit"
      >
        <FormField v-for="field in fields" :key="field.name" :field="field" />
        <div v-if="errorMessage" class="form-error">
          {{ errorMessage }}
        </div>
        <BaseeButton type="submit" class="button-primary" :label="submitText">
        </BaseeButton>
        <div class="text-center space-y-2">
          <p class="text-sm">{{ switchMessage }}</p>
          <router-link
            :to="{ name: 'auth', query: { type: switchRoute } }"
            class="link-base"
          >
            {{ switchText }}
          </router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { Form } from "vee-validate";
import FormField from "./FormField.vue";

const {
  title,
  schema,
  fields,
  errorMessage,
  submitText,
  switchMessage,
  switchText,
  switchRoute,
} = defineProps({
  title: String,
  schema: Object,
  fields: Array,
  errorMessage: String,
  submitText: String,
  switchMessage: String,
  switchText: String,
  switchRoute: String,
});

const emit = defineEmits(["submit"]);

const handleSubmit = (values) => {
  emit("submit", values);
};
</script>

<style scoped>
.form-container {
  @apply flex justify-center items-center min-h-screen bg-gray-100;
}

.form-wrapper {
  @apply bg-white p-8 rounded-lg shadow-md w-full max-w-md;
}

.form-title {
  @apply text-2xl font-bold text-center mb-6;
}

.button-primary {
  @apply w-full bg-blue-500 text-white py-2 px-4 rounded-md bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.link-base {
  @apply text-blue-500 text-blue-600;
}
</style>
