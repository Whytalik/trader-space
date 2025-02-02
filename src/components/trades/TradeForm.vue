<template>
  <div class="card">
    <h2 class="card-title">{{ isEdit ? "Edit Trade" : "Add Trade" }}</h2>
    <Form
      :initial-values="form"
      :validation-schema="tradeSchema"
      class="trade-form"
      @submit="handleSubmit"
    >
      <div class="form-grid">
        <div class="form-section">
          <h3 class="section-title">Basic Information</h3>
          <div class="form-group">
            <label class="form-label">Trade Name</label>
            <Field
              v-model="form.name"
              name="name"
              type="text"
              class="form-input"
              required
            />
            <ErrorMessage name="name" class="error-message" />
          </div>
          <div class="form-group">
            <label class="form-label">Date</label>
            <Field
              v-model="form.date"
              name="date"
              type="date"
              class="form-input"
              required
            />
            <ErrorMessage name="date" class="error-message" />
          </div>
        </div>
        <div class="form-section">
          <h3 class="section-title">Trade Setup</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Pair</label>
              <Field
                as="select"
                name="pair"
                v-model="form.pair"
                class="form-select"
                required
              >
                <option value="">Select Pair</option>
                <option
                  v-for="option in formatOptions(TC.pairs)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="pair" class="error-message" />
            </div>
            <div class="form-group">
              <label class="form-label">Session</label>
              <Field
                as="select"
                name="session"
                v-model="form.session"
                class="form-select"
                required
              >
                <option value="">Select Session</option>
                <option
                  v-for="option in formatOptions(TC.sessions)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="session" class="error-message" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Direction</label>
              <Field
                as="select"
                name="direction"
                v-model="form.direction"
                class="form-select"
                required
              >
                <option value="">Select Direction</option>
                <option
                  v-for="option in formatOptions(TC.directions)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="direction" class="error-message" />
            </div>
            <div class="form-group">
              <label class="form-label">Position Type</label>
              <Field
                as="select"
                name="position_type"
                v-model="form.position_type"
                class="form-select"
                required
              >
                <option value="">Select Position Type</option>
                <option
                  v-for="option in formatOptions(TC.positionTypes)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="position_type" class="error-message" />
            </div>
          </div>
        </div>
        <div class="form-section">
          <h3 class="section-title">Trade Points</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Point A</label>
              <Field
                as="select"
                name="point_A"
                v-model="form.point_A"
                class="form-select"
                required
              >
                <option value="">Select Point A</option>
                <option
                  v-for="option in formatOptions(TC.pointTypes)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="point_A" class="error-message" />
            </div>
            <div class="form-group">
              <label class="form-label">Point B</label>
              <Field
                as="select"
                name="point_B"
                v-model="form.point_B"
                class="form-select"
                required
              >
                <option value="">Select Point B</option>
                <option
                  v-for="option in formatOptions(TC.pointTypes)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="point_B" class="error-message" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">FTA</label>
            <Field
              as="select"
              name="fta"
              v-model="form.fta"
              class="form-select"
              required
            >
              <option value="">Select FTA</option>
              <option
                v-for="option in formatOptions(TC.pointTypes)"
                :key="option.value"
                :value="option.label"
              >
                {{ option.label }}
              </option>
            </Field>
            <ErrorMessage name="fta" class="error-message" />
          </div>
        </div>
        <div class="form-section">
          <h3 class="section-title">Entry & Risk</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Entry Model</label>
              <Field
                as="select"
                name="entry_model"
                v-model="form.entry_model"
                class="form-select"
                required
              >
                <option value="">Select Entry Model</option>
                <option
                  v-for="option in formatOptions(TC.entryModels)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="entry_model" class="error-message" />
            </div>
            <div class="form-group">
              <label class="form-label">Entry Timeframe</label>
              <Field
                as="select"
                name="entry_tf"
                v-model="form.entry_tf"
                class="form-select"
                required
              >
                <option value="">Select Timeframe</option>
                <option
                  v-for="option in formatOptions(TC.entryTimeframes)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="entry_tf" class="error-message" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Risk (%)</label>
              <Field
                v-model="form.risk"
                name="risk"
                type="number"
                step="0.1"
                class="form-input"
                required
              />
              <ErrorMessage name="risk" class="error-message" />
            </div>
            <div class="form-group">
              <label class="form-label">Stop Loss</label>
              <Field
                as="select"
                name="stop_loss"
                v-model="form.stop_loss"
                class="form-select"
                required
              >
                <option value="">Select Stop Loss</option>
                <option
                  v-for="option in formatOptions(TC.stopLossTypes)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="stop_loss" class="error-message" />
            </div>
          </div>
        </div>
        <div class="form-section">
          <h3 class="section-title">Results</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Result</label>
              <Field
                as="select"
                name="result"
                v-model="form.result"
                class="form-select"
                required
              >
                <option value="">Select Result</option>
                <option
                  v-for="option in formatOptions(TC.results)"
                  :key="option.value"
                  :value="option.label"
                >
                  {{ option.label }}
                </option>
              </Field>
              <ErrorMessage name="result" class="error-message" />
            </div>
            <div class="form-group">
              <label class="form-label">Profit ($)</label>
              <Field
                v-model="form.profit"
                name="profit"
                type="number"
                class="form-input"
                required
              />
              <ErrorMessage name="profit" class="error-message" />
            </div>
          </div>
        </div>
      </div>

      <div class="form-section">
        <h3 class="section-title">Related Data</h3>
        <div class="form-group">
          <label class="form-label" for="routines_id">Related Routines</label>
          <Field
            name="routines_id"
            as="select"
            class="form-select"
            id="routines_id"
            multiple
          >
            <option
              v-for="routine in routinesStore.routines"
              :key="routine.id"
              :value="routine.id"
            >
              #{{ routine.id }} - {{ routine.name }} - {{ routine.pair }} -
              {{ routine.date }}
            </option>
          </Field>
          <ErrorMessage name="routines_id" class="error" />
          <span class="form-help">
            Hold Ctrl/Cmd to select multiple routines
          </span>
        </div>
      </div>

      <div class="form-actions">
        <BaseButton variant="secondary" @click="router.back()" label="Cancel" />
        <BaseButton
          variant="primary"
          type="submit"
          :label="isEdit ? 'Update' : 'Add' + ' Trade'"
          @click="handleSubmit"
        />
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import { tradeSchema } from "@/schemas/trade";
import { useTradesStore } from "@/stores/trades";
import { useRoutinesStore } from "@/stores/routines";
import { TRADE_CONSTANTS as TC } from "@/data/data";

const { tradeId } = defineProps({
  tradeId: {
    type: Number,
    default: null,
  },
});

const router = useRouter();
const tradesStore = useTradesStore();
const routinesStore = useRoutinesStore();

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

const isEdit = computed(() => !!tradeId);

if (isEdit.value) {
  const trade = tradesStore.getTradeById(tradeId);
  if (trade) {
    Object.assign(form.value, trade);
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
      console.log(isEdit.value);
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
