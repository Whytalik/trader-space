<template>
  <div class="card">
    <h2 class="card-title">{{ isEdit ? "Edit Routine" : "Add Routine" }}</h2>
    <form @submit.prevent="handleSubmit" class="routine-form">
      <div class="form-grid">
        <!-- Basic Info -->
        <div class="form-section">
          <h3 class="section-title">Basic Information</h3>
          <div class="form-group">
            <label class="form-label">Routine Name</label>
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

        <!-- Market Analysis -->
        <div class="form-section">
          <h3 class="section-title">Market Analysis</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Type</label>
              <select v-model="form.type" class="form-select" required>
                <option value="">Select Type</option>
                <option
                  v-for="option in formatOptions(RC.types)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
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
        </div>

        <!-- Execution -->
        <div class="form-section">
          <h3 class="section-title">Execution</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Plan</label>
              <select v-model="form.plan" class="form-select" required>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Execution Status</label>
              <select v-model="form.execution" class="form-select" required>
                <option value="">Select Status</option>
                <option
                  v-for="option in formatOptions(RC.execution)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Results -->
        <div class="form-section">
          <h3 class="section-title">Results</h3>
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

        <!-- Related Trades -->
        <div class="form-section">
          <h3 class="section-title">Related Trades</h3>
          <div class="form-group">
            <label class="form-label">Select Trades</label>
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

<script>
import { ROUTINE_CONSTANTS as RC } from "@/data/data";
import { useRoutinesStore } from "@/stores/routines";
import { useTradesStore } from "@/stores/trades";

export default {
  name: "RoutineForm",
  props: {
    routineId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      RC,
      form: this.getInitialForm(),
      routinesStore: useRoutinesStore(),
      tradesStore: useTradesStore(),
    };
  },
  computed: {
    isEdit() {
      return !!this.routineId;
    },
  },
  created() {
    if (this.isEdit) {
      const routine = this.routinesStore.routines.find(
        (r) => r.id === this.routineId
      );
      if (routine) {
        Object.keys(this.form).forEach((key) => {
          if (routine[key] !== undefined) {
            this.form[key] = routine[key];
          }
        });
      } else {
        this.$router.push("/routines");
      }
    }
  },
  methods: {
    getInitialForm() {
      return {
        name: "",
        date: new Date().toISOString().split("T")[0],
        pair: "",
        type: "",
        narrative: "",
        plan: true,
        execution: "",
        outcome: "",
        trade_ids: [],
        main_analysis: null,
        sub_analysis: [],
      };
    },
    formatOptions(options) {
      if (!options) {
        return [];
      }

      return Object.keys(options).map((key) => ({
        value: options[key],
        label: key
          .split("_")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" "),
      }));
    },
    async handleSubmit() {
      try {
        if (this.isEdit) {
          await this.routinesStore.updateRoutine(this.routineId, this.form);
        } else {
          await this.routinesStore.addRoutine(this.form);
        }
        this.$router.push("/routines");
      } catch (error) {
        console.error("Error saving routine:", error);
      }
    },
  },
};
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

.form-row {
  @apply grid grid-cols-2 gap-4 mb-4;
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

/* Стилі для множинного select */
select[multiple] {
  @apply h-32;
}

.timeframes-grid {
  @apply grid gap-6 md:grid-cols-2;
}

.timeframe-item {
  @apply space-y-2;
}

.timeframe-title {
  @apply text-base font-medium text-gray-700 dark:text-gray-300;
}
</style>
