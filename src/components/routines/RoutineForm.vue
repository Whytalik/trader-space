<template>
  <div class="card">
    <h2 class="card-title">{{ isEdit ? "Edit" : "Add" }} Routine</h2>
    <form @submit.prevent="handleSubmit" class="routine-form">
      <div class="form-grid">
        <div class="form-section">
          <h3 class="section-title">Basic Info</h3>
          <div class="form-group">
            <label class="form-label">Name</label>
            <input
              v-model="form.name"
              type="text"
              class="form-input"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              v-model="form.date"
              type="date"
              class="form-input"
              required
            />
          </div>
        </div>

        <div class="form-section">
          <h3 class="section-title">Details</h3>
          <div class="form-group">
            <label class="form-label">Pair</label>
            <select v-model="form.pair" class="form-select" required>
              <option value="">Select Pair</option>
              <option
                v-for="option in formatOptions(RC.pairs)"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Narrative</label>
            <select v-model="form.narrative" class="form-select" required>
              <option value="">Select Narrative</option>
              <option
                v-for="option in formatOptions(RC.narratives)"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Plan</label>
            <div class="toggle-wrapper">
              <input type="checkbox" v-model="form.plan" class="toggle-input" />
              <span class="toggle-label">{{ form.plan ? "Yes" : "No" }}</span>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3 class="section-title">Results</h3>
          <div class="form-group">
            <label class="form-label">Execution</label>
            <select v-model="form.execution" class="form-select" required>
              <option value="">Select Execution</option>
              <option
                v-for="option in formatOptions(RC.execution)"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Outcome</label>
            <select v-model="form.outcome" class="form-select" required>
              <option value="">Select Outcome</option>
              <option
                v-for="option in formatOptions(RC.outcomes)"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-section">
          <h3 class="section-title">Related Data</h3>
          <div class="form-group">
            <label class="form-label">Related Trades</label>
            <select v-model="form.trade_ids" class="form-select" multiple>
              <option
                v-for="trade in tradesStore.trades"
                :key="trade.id"
                :value="trade.id"
              >
                #{{ trade.id }} - {{ trade.name }}
              </option>
            </select>
            <span class="form-help"
              >Hold Ctrl/Cmd to select multiple trades</span
            >
          </div>
          <div class="form-group">
            <label class="form-label">Main Analysis</label>
            <input
              type="number"
              v-model.number="form.main_analysis"
              class="form-input"
              min="0"
            />
          </div>
          <div class="form-group">
            <label class="form-label">Sub Analysis</label>
            <input
              type="text"
              v-model="form.sub_analysis"
              class="form-input"
              placeholder="Enter comma-separated IDs"
              @input="handleSubAnalysisInput"
            />
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn btn-secondary" @click="$router.back()">
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">
          {{ isEdit ? "Update" : "Add" }} Routine
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { ROUTINE_CONSTANTS as RC } from "@/data/data";
import { useRoutinesStore } from "@/stores/routines";
import { useTradesStore } from "@/stores/trades";
import { useRouter } from "vue-router";

const { routineId } = defineProps({
  routineId: {
    type: Number,
    default: null,
  },
});

const form = ref(getInitialForm());
const routinesStore = useRoutinesStore();
const tradesStore = useTradesStore();
const router = useRouter();

const isEdit = computed(() => !!routineId);

onMounted(() => {
  if (isEdit.value) {
    const routine = routinesStore.routines.find(
      (r) => r.id === routineId
    );
    if (routine) {
      Object.keys(form.value).forEach((key) => {
        if (routine[key] !== undefined) {
          form.value[key] = routine[key];
        }
      });
    } else {
      router.push("/routines");
    }
  }
});

function getInitialForm() {
  return {
    name: "",
    date: new Date().toISOString().split("T")[0],
    pair: "",
    narrative: "",
    plan: true,
    execution: "",
    outcome: "",
    trade_ids: [],
    main_analysis: null,
    sub_analysis: [],
  };
}

function formatOptions(options) {
  if (!options) {
    return [];
  }
  return Object.keys(options).map((key) => ({
    value: options[key],
    label: key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "),
  }));
}

async function handleSubmit() {
  try {
    if (isEdit.value) {
      await routinesStore.updateRoutine(routineId, form.value);
    } else {
      await routinesStore.addRoutine(form.value);
    }
    router.push("/routines");
  } catch (error) {
    console.error("Error saving routine:", error);
  }
}

function handleSubAnalysisInput(event) {
  const value = event.target.value;
  form.value.sub_analysis = value
    .split(",")
    .map((id) => parseInt(id.trim()))
    .filter((id) => !isNaN(id));
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

select[multiple] {
  @apply h-32;
}
</style>
