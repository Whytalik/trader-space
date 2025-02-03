<template>
  <div class="trade-view">
    <div class="trade-header">
      <h2 class="trade-title">Trade Details</h2>
      <div class="header-actions">
        <BaseButton
          variant="secondary"
          @click="handleEdit"
          label="Edit"
          :icon="EditIcon"
        />

        <BaseButton
          variant="danger"
          class="ml-2"
          @click="handleDelete"
          label="Delete"
          :icon="DeleteIcon"
        />

        <BaseButton
          class="ml-2"
          @click="router.push('/trades')"
          label="Back to Trades"
        />
      </div>
    </div>
    <div class="trade-content" v-if="trade">
      <div class="trade-info">
        <div class="info-grid">
          <div
            class="info-item"
            v-for="column in displayColumns"
            :key="column.field"
          >
            <span class="label">{{ column.header }}</span>
            <span class="value">
              {{ formatFieldValue(column, trade[column.field]) }}
            </span>
          </div>
        </div>
      </div>

      <div class="related-data" v-if="hasRelatedData">
        <h3 class="section-title">Related Data</h3>
        <div class="related-cards">
          <div class="related-card" v-if="relatedRoutines">
            <div class="card-header">
              <h4 class="card-title">Routines</h4>
            </div>
            <div class="card-content">
              <div class="routines-grid">
                <div
                  v-for="routine in relatedRoutines"
                  :key="routine.id"
                  class="routine-card"
                  @click="router.push(`/routines/${routine.id}`)"
                >
                  <div class="routine-card-content">
                    <span class="routine-id">#{{ routine.id }}</span>
                    <span class="routine-name">{{ routine.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="trade-not-found">Trade not found</div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTradesStore } from "@/stores/trades";
import EditIcon from "@/assets/EditIcon.vue";
import DeleteIcon from "@/assets/DeleteIcon.vue";

const router = useRouter();
const route = useRoute();
const tradesStore = useTradesStore();

const tradeId = parseInt(route.params.id);
const trade = ref(tradesStore.getTradeById(tradeId));

const relatedRoutines = computed(() => {
  return tradesStore.getRelatedRoutine(trade.value);
});

const displayColumns = computed(() => {
  return tradesStore.tradeColumns.filter((col) => !col.isInformational);
});

const hasRelatedData = computed(() => relatedRoutines.value.length > 0);

const formatFieldValue = (column, value) => {
  if (!value) return "N/A";
  const formatters = {
    risk: (val) => `${val}%`,
    profit: (val) => `${val}$`,
  };

  return column.options
    ? column.options[value] || value
    : formatters[column.field]
      ? formatters[column.field](value)
      : value;
};

const handleEdit = () => {
  router.push(`/trades/form/${trade.value.id}`);
};

const handleDelete = () => {
  if (confirm("Are you sure you want to delete this trade?")) {
    tradesStore.deleteTrade(trade.value.id);
    router.push("/trades");
  }
};
</script>

<style scoped>
.trade-view {
  @apply bg-gray-50 dark:bg-gray-900 border  rounded-lg p-6;
}

.trade-header {
  @apply flex justify-between items-center mb-6;
}

.trade-title {
  @apply text-2xl font-medium;
}

.trade-content {
  @apply bg-white dark:bg-gray-800 rounded-lg p-6 border ;
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

.section-title {
  @apply text-xl font-medium mt-8 mb-4;
}

.routines-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}

.routine-card {
  @apply bg-white dark:bg-gray-800 p-4 rounded-lg border  cursor-pointer  transition-all duration-200;
}

.routine-card-content {
  @apply flex justify-between items-center;
}

.routine-id {
  @apply text-sm font-medium;
}

.routine-name {
  @apply text-sm text-gray-500;
}

.trade-not-found {
  @apply text-center py-12 text-gray-500;
}

.related-data {
  @apply mt-8;
}

.related-cards {
  @apply space-y-6;
}

.related-card {
  @apply bg-white dark:bg-gray-800 rounded-lg border  overflow-hidden;
}

.card-header {
  @apply bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b ;
}

.card-title {
  @apply text-lg font-medium;
}

.card-content {
  @apply p-6;
}

.header-actions {
  @apply flex items-center;
}

.btn-danger {
  @apply bg-red-600 bg-red-700 text-white;
}
</style>
