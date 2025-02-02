<template>
  <div class="card">
    <h2 class="card-title">{{ isEdit ? "Edit" : "Add" }} Routine</h2>
    <Form
      @submit="handleSubmit"
      :initial-values="form"
      :validation-schema="routineSchema"
      class="routine-form"
    >
      <div class="form-grid">
        <div class="form-section">
          <h3 class="section-title">Basic Info</h3>
          <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <Field
              name="name"
              as="input"
              type="text"
              class="form-input"
              id="name"
            />
            <ErrorMessage name="name" class="error" />
          </div>
          <div class="form-group">
            <label class="form-label" for="date">Date</label>
            <Field
              name="date"
              as="input"
              type="date"
              class="form-input"
              id="date"
            />
            <ErrorMessage name="date" class="error" />
          </div>
        </div>

        <div class="form-section">
          <h3 class="section-title">Details</h3>
          <div class="form-group">
            <label class="form-label" for="pair">Pair</label>
            <Field name="pair" as="select" class="form-select" id="pair">
              <option value="">Select Pair</option>
              <option
                v-for="option in formatOptions(RC.pairs)"
                :key="option.value"
                :value="option.label"
              >
                {{ option.label }}
              </option>
            </Field>
            <ErrorMessage name="pair" class="error" />
          </div>

          <div class="form-group">
            <label class="form-label" for="narrative">Narrative</label>
            <Field
              name="narrative"
              as="select"
              class="form-select"
              id="narrative"
            >
              <option value="">Select Narrative</option>
              <option
                v-for="option in formatOptions(RC.narratives)"
                :key="option.value"
                :value="option.label"
              >
                {{ option.label }}
              </option>
            </Field>
            <ErrorMessage name="narrative" class="error" />
          </div>
          <div class="form-group">
            <label class="form-label" for="plan">Plan</label>
            <Field name="plan" v-slot="{ field }">
              <div class="toggle-wrapper">
                <input
                  type="checkbox"
                  :id="field.id"
                  :name="field.name"
                  :checked="field.label"
                  @change="field.label = !field.label"
                  class="toggle-input"
                />
              </div>
            </Field>
            <ErrorMessage name="plan" class="error" />
          </div>
        </div>

        <div class="form-section">
          <h3 class="section-title">Results</h3>
          <div class="form-group">
            <label class="form-label" for="execution">Execution</label>
            <Field
              name="execution"
              as="select"
              class="form-select"
              id="execution"
            >
              <option value="">Select Execution</option>
              <option
                v-for="option in formatOptions(RC.execution)"
                :key="option.value"
                :value="option.label"
              >
                {{ option.label }}
              </option>
            </Field>
            <ErrorMessage name="execution" class="error" />
          </div>
          <div class="form-group">
            <label class="form-label" for="outcome">Outcome</label>
            <Field name="outcome" as="select" class="form-select" id="outcome">
              <option value="">Select Outcome</option>
              <option
                v-for="option in formatOptions(RC.outcomes)"
                :key="option.value"
                :value="option.label"
              >
                {{ option.label }}
              </option>
            </Field>
            <ErrorMessage name="outcome" class="error" />
          </div>
        </div>

        <div class="form-section">
          <h3 class="section-title">Related Data</h3>
          <div class="form-group">
            <label class="form-label" for="trades_id">Related Trades</label>
            <Field
              name="trades_id"
              as="select"
              class="form-select"
              id="trades_id"
              multiple
            >
              <option
                v-for="trade in tradesStore.trades"
                :key="trade.id"
                :value="trade.id"
              >
                #{{ trade.id }} - {{ trade.name }} - {{ trade.pair }} -
                {{ trade.result }} - {{ trade.date }}
              </option>
            </Field>
            <ErrorMessage name="trades_id" class="error" />
            <span class="form-help">
              Hold Ctrl/Cmd to select multiple trades
            </span>
          </div>
        </div>
        <div class="form-actions">
          <button
            type="button"
            class="btn btn-secondary"
            @click="router.back()"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">
            {{ isEdit ? "Update" : "Add" }} Routine
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import { routineSchema } from "@/schemas/routine";
import { useRoutinesStore } from "@/stores/routines";
import { useTradesStore } from "@/stores/trades";
import { ROUTINE_CONSTANTS as RC } from "@/data/data";

const { routineId } = defineProps({
  routineId: {
    type: Number,
    default: null,
  },
});

const router = useRouter();
const routinesStore = useRoutinesStore();
const tradesStore = useTradesStore();

const form = {
  name: "",
  date: new Date().toISOString().split("T")[0],
  pair: "",
  narrative: "",
  plan: false,
  execution: "",
  outcome: "",
  trades_id: [],
};

const isEdit = computed(() => !!routineId);

if (isEdit.value) {
  const routine = routinesStore.getRoutineById(routineId);
  if (routine) {
    Object.assign(form, routine);
  } else {
    router.push("/routines");
  }
}

function formatOptions(options) {
  if (!options) return [];
  return Object.entries(options).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}

async function handleSubmit(values) {
  try {
    if (isEdit.value) {
      await routinesStore.updateRoutine(routineId, values);
    } else {
      await routinesStore.addRoutine(values);
    }
    router.push("/routines");
  } catch (error) {
    console.error("Error saving routine:", error);
  }
}
</script>

<style scoped>
.card {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-6;
}

.card-title {
  @apply text-2xl font-bold mb-6 text-gray-900 dark:text-white;
}

.routine-form {
  @apply space-y-6;
}

.form-grid {
  @apply grid gap-6 md:grid-cols-2;
}

.form-section {
  @apply bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700;
}

.section-title {
  @apply text-lg font-medium mb-4 text-gray-700 dark:text-gray-300;
}

.form-group {
  @apply flex flex-col mb-4;
}

.form-label {
  @apply text-sm font-medium text-gray-700 dark:text-gray-300 mb-1;
}

.form-input,
.form-select {
  @apply w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
    bg-white dark:bg-gray-800 
    text-gray-900 dark:text-gray-100
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    disabled:bg-gray-100 disabled:cursor-not-allowed;
}

.form-actions {
  @apply flex justify-end space-x-4 mt-6;
}

.btn {
  @apply px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500;
}

.btn-secondary {
  @apply bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
    text-gray-700 dark:text-gray-200 focus:ring-gray-500;
}

.form-help {
  @apply text-xs text-gray-500 dark:text-gray-400 mt-1;
}

.error {
  @apply text-xs text-red-600 mt-1;
}

select[multiple] {
  @apply h-32;
}

.toggle-wrapper {
  @apply flex items-center space-x-2;
}

.toggle-label {
  @apply text-sm;
}
</style>
