<template>
  <div class="form-container">
    <div class="form-wrapper">
      <h2 class="form-title">{{ title }}</h2>
      <ValidationForm @submit="onSubmit" :validation-schema="schema" class="space-y-6">
        <div v-for="field in fields" :key="field.name" class="space-y-2">
          <label :for="field.name" class="block text-sm font-medium">
            {{ field.label }}
          </label>
          <Field :name="field.name" v-slot="{ field: formField, errors }">
            <input v-bind="formField" :type="field.type" :id="field.name" :placeholder="field.placeholder"
              class="input-base" :class="[errors.length > 0 ? 'input-error' : '']" />
          </Field>
          <ErrorMessage :name="field.name" class="form-error" />
        </div>

        <div v-if="errorMessage" class="form-error">
          {{ errorMessage }}
        </div>

        <button type="submit" class="button-primary">
          {{ submitText }}
        </button>

        <div class="text-center space-y-2">
          <p class="text-sm">{{ switchMessage }}</p>
          <router-link :to="{ name: 'auth', query: { type: switchRoute } }" class="link-base">
            {{ switchText }}
          </router-link>
        </div>
      </ValidationForm>
    </div>
  </div>
</template>

<script>
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";

export default {
  name: "BaseAuthForm",
  components: {
    ValidationForm,
    Field,
    ErrorMessage,
  },
  props: {
    title: String,
    schema: Object,
    fields: Array,
    errorMessage: String,
    submitText: String,
    switchMessage: String,
    switchText: String,
    switchRoute: String,
  },
  emits: ["submit"],
  methods: {
    onSubmit(values) {
      this.$emit("submit", values);
    },
  },
};
</script>
