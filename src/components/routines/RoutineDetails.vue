<template>
  <div class="routine-view">
    <div class="routine-header">
      <h2 class="routine-title">Routine Details</h2>
      <div class="header-actions">
        <BaseButton variant="secondary" @click="handleEdit">
          <EditIcon class="mr-2" />
          Edit
        </BaseButton>
        <BaseButton variant="danger" @click="handleDelete" class="ml-2">
          <DeleteIcon class="mr-2" />
          Delete
        </BaseButton>
        <BaseButton @click="$router.push('/routines')" class="ml-2"
          >Back to Routines</BaseButton
        >
      </div>
    </div>
    <div class="routine-content" v-if="routine">
      <div class="routine-info">
        <div class="info-grid">
          <div
            class="info-item"
            v-for="column in displayColumns"
            :key="column.field"
          >
            <span class="label">{{ column.header }}</span>
            <span class="value">
              {{ formatFieldValue(column, routine[column.field]) }}
            </span>
          </div>
        </div>
      </div>
      <div class="related-data" v-if="hasRelatedData">
        <h3 class="section-title">Related Data</h3>
        <div class="related-cards">
          <div class="related-card" v-if="relatedTrades.length">
            <div class="card-header">
              <h4 class="card-title">Trades</h4>
            </div>
            <div class="card-content">
              <div class="trades-grid">
                <div
                  v-for="trade in relatedTrades"
                  :key="trade.id"
                  class="trade-card"
                  @click="$router.push(`/trades/${trade.id}`)"
                >
                  <div class="trade-card-content">
                    <span class="trade-id">#{{ trade.id }}</span>
                    <span class="trade-name">{{ trade.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="routine-not-found">Routine not found</div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useRoutinesStore } from "@/stores/routines";
import { useTradesStore } from "@/stores/trades";
import BaseButton from "@/components/common/BaseButton.vue";
import EditIcon from "@/assets/EditIcon.vue";
import DeleteIcon from "@/assets/DeleteIcon.vue";

const router = useRouter();
const route = useRoute();
const routinesStore = useRoutinesStore();
const tradesStore = useTradesStore();

const routineId = parseInt(route.params.id);
const routine = routinesStore.routines.find((r) => r.id === routineId);
const relatedTrades = routine
  ? tradesStore.trades.filter((trade) => routine.trade_ids.includes(trade.id))
  : [];

const displayColumns = routinesStore.routineColumns.filter(
  (col) => !col.isInformational
);
const hasRelatedData = relatedTrades.length > 0;

const formatFieldValue = (column, value) => {
  if (value === undefined || value === null) return "N/A";

  if (column.field === "plan") {
    return value ? "✅" : "❌";
  }

  if (column.options) {
    return column.options[value] || value;
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return value;
};

const handleEdit = () => {
  router.push(`/routines/form/${routine.id}`);
};

const handleDelete = () => {
  if (confirm("Are you sure you want to delete this routine?")) {
    routinesStore.deleteRoutine(routine.id);
    router.push("/routines");
  }
};
</script>

<style scoped>
.routine-view {
  @apply bg-gray-50 dark:bg-gray-900 border border-input-border rounded-lg p-6;
}

.routine-header {
  @apply flex justify-between items-center mb-6;
}

.routine-title {
  @apply text-2xl font-medium;
}

.routine-content {
  @apply bg-white dark:bg-gray-800 rounded-lg p-6 border border-input-border;
}

.info-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.info-item {
  @apply flex flex-col gap-1;
}

.label {
  @apply text-sm text-gray-500 dark:text-gray-400;
}

.value {
  @apply text-base font-medium;
}

.routine-not-found {
  @apply text-center py-12 text-gray-500;
}

.section-title {
  @apply text-xl font-medium mt-8 mb-4;
}

.trades-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}

.trade-card {
  @apply bg-white dark:bg-gray-800 p-4 rounded-lg border border-input-border cursor-pointer hover:border-input-focus transition-all duration-200;
}

.trade-card-content {
  @apply flex justify-between items-center;
}

.trade-id {
  @apply text-sm font-medium;
}

.trade-name {
  @apply text-sm text-gray-500;
}

.header-actions {
  @apply flex items-center;
}

.btn-danger {
  @apply bg-red-600 hover:bg-red-700 text-white;
}
</style>
