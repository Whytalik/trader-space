<template>
  <div>
    <div>
      <h2>{{ title }}</h2>
      <ValidationForm
        @submit="onSubmit"
        :validation-schema="schema"
        class="space-y-4"
      >
        <div v-for="field in fields" :key="field.name">
          <label :for="field.name">
            {{ field.label }}
          </label>
          <Field :name="field.name" v-slot="{ field: formField, errors }">
            <input
              v-bind="formField"
              :type="field.type"
              :id="field.name"
              :placeholder="field.placeholder"
              :class="['form-input', errors.length > 0 ? 'border-red-500' : '']"
            />
          </Field>
          <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
        </div>

        <button type="submit">
          {{ submitText }}
        </button>

        <div>
          <p>{{ switchMessage }}</p>
          <router-link :to="{ name: 'auth', query: { type: switchRoute } }">
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
