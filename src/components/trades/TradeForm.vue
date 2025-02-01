<template>
  <div class="card">
    <h2 class="card-title">{{ isEdit ? "Edit Trade" : "Add Trade" }}</h2>
    <form @submit.prevent="handleSubmit" class="trade-form">
      <div class="form-grid">
        <div class="form-section">
          <h3 class="section-title">Basic Information</h3>
          <div class="form-group">
            <label class="form-label">Trade Name</label>
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
          <h3 class="section-title">Trade Setup</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Pair</label>
              <select v-model="form.pair" class="form-select" required>
                <option value="">Select Pair</option>
                <option
                  v-for="option in formatOptions(TC.pairs)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Session</label>
              <select v-model="form.session" class="form-select" required>
                <option value="">Select Session</option>
                <option
                  v-for="option in formatOptions(TC.sessions)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Direction</label>
              <select v-model="form.direction" class="form-select" required>
                <option value="">Select Direction</option>
                <option
                  v-for="option in formatOptions(TC.directions)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Position Type</label>
              <select v-model="form.position_type" class="form-select" required>
                <option value="">Select Position Type</option>
                <option
                  v-for="option in formatOptions(TC.positionTypes)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-section">
          <h3 class="section-title">Trade Points</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Point A</label>
              <select v-model="form.point_A" class="form-select" required>
                <option value="">Select Point A</option>
                <option
                  v-for="option in formatOptions(TC.pointTypes)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Point B</label>
              <select v-model="form.point_B" class="form-select" required>
                <option value="">Select Point B</option>
                <option
                  v-for="option in formatOptions(TC.pointTypes)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">FTA</label>
            <select v-model="form.fta" class="form-select" required>
              <option value="">Select FTA</option>
              <option
                v-for="option in formatOptions(TC.pointTypes)"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-section">
          <h3 class="section-title">Entry & Risk</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Entry Model</label>
              <select v-model="form.entry_model" class="form-select" required>
                <option value="">Select Entry Model</option>
                <option
                  v-for="option in formatOptions(TC.entryModels)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Entry Timeframe</label>
              <select v-model="form.entry_tf" class="form-select" required>
                <option value="">Select Timeframe</option>
                <option
                  v-for="option in formatOptions(TC.entryTimeframes)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Risk (%)</label>
              <input
                v-model="form.risk"
                type="number"
                step="0.1"
                class="form-input"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">Stop Loss</label>
              <select v-model="form.stop_loss" class="form-select" required>
                <option value="">Select Stop Loss</option>
                <option
                  v-for="option in formatOptions(TC.stopLossTypes)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-section">
          <h3 class="section-title">Results</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Result</label>
              <select v-model="form.result" class="form-select" required>
                <option value="">Select Result</option>
                <option
                  v-for="option in formatOptions(TC.results)"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Profit ($)</label>
              <input
                v-model="form.profit"
                type="number"
                class="form-input"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn-secondary" @click="router.back()">
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">
          {{ isEdit ? "Update" : "Add" }} Trade
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { TRADE_CONSTANTS as TC } from "@/data/data";
import { useTradesStore } from "@/stores/trades";

const { tradeId } = defineProps({
  tradeId: Number,
});

const router = useRouter();
const tradesStore = useTradesStore();

const form = ref({
  name: "",
  date: new Date().toISOString().split("T")[0],
  pair: "",
  session: "",
  direction: "",
  position_type: "",
  risk: "",
  result: "",
  profit: "",
  point_A: "",
  point_B: "",
  fta: "",
  entry_model: "",
  entry_tf: "",
  stop_loss: "",
  routine_id: null,
});

const isEdit = computed(() => {
  console.log(tradeId);
  return !!tradeId;
});

if (isEdit.value) {
  const trade = tradesStore.find(tradeId);
  if (trade) {
    Object.assign(form, trade);
  } else {
    router.push("/trades");
  }
}

function formatOptions(options) {
  if (!options) return [];
  return Object.entries(options).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}

const handleSubmit = async () => {
  try {
    if (isEdit.value) {
      await tradesStore.updateTrade(tradeId, form.value);
    } else {
      await tradesStore.addTrade(form.value);
    }
    router.push("/trades");
  } catch (error) {
    console.error("Error saving trade:", error);
  }
};
</script>

<style scoped>
.card {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-6;
}

.card-title {
  @apply text-2xl font-bold mb-6 text-gray-900 dark:text-white;
}

.trade-form {
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
</style>
