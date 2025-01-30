<template>
  <div class="trade-view">
    <div class="trade-header">
      <h2 class="trade-title">Trade Details</h2>
      <BaseButton @click="$router.push('/trades')">Back to Trades</BaseButton>
    </div>
    <div class="trade-content" v-if="trade">
      <!-- Основні властивості -->
      <div class="trade-info">
        <div class="info-grid">
          <div
            class="info-item"
            v-for="column in displayColumns"
            :key="column.field"
          >
            <span class="label">{{ column.header }}</span>
            <span
              class="value"
              :class="getValueClass(column.field, trade[column.field])"
            >
              {{ formatFieldValue(column, trade[column.field]) }}
            </span>
          </div>
        </div>
      </div>

      <!-- Пов'язані дані -->
      <div class="related-data" v-if="hasRelatedData">
        <h3 class="section-title">Related Data</h3>
        <div class="related-cards">
          <!-- Пов'язана рутина -->
          <div class="related-card" v-if="relatedRoutine">
            <div class="card-header">
              <h4 class="card-title">Routine</h4>
            </div>
            <div class="card-content">
              <div class="routines-grid">
                <div
                  class="routine-card"
                  @click="$router.push(`/routines/${relatedRoutine.id}`)"
                >
                  <div class="routine-card-content">
                    <span class="routine-id">#{{ relatedRoutine.id }}</span>
                    <span class="routine-name">{{ relatedRoutine.name }}</span>
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

<script>
import { useTradesStore } from "@/stores/trades";
import { useRoutinesStore } from "@/stores/routines";
import BaseButton from "@/components/common/BaseButton.vue";
import CalendarIcon from "@/assets/icons/CalendarIcon.vue";
import TagIcon from "@/assets/icons/TagIcon.vue";
import ChartIcon from "@/assets/icons/ChartIcon.vue";
import StatusIcon from "@/assets/icons/StatusIcon.vue";

export default {
  name: "TradeDetails",
  components: {
    BaseButton,
    CalendarIcon,
    TagIcon,
    ChartIcon,
    StatusIcon,
  },
  data() {
    return {
      trade: null,
      relatedRoutine: null,
      tradesStore: useTradesStore(),
      routinesStore: useRoutinesStore(),
    };
  },
  computed: {
    displayColumns() {
      return this.tradesStore.tradeColumns.filter(
        (col) => !col.isInformational
      );
    },
    informationalColumns() {
      return this.tradesStore.tradeColumns.filter((col) => col.isInformational);
    },
    hasRelatedData() {
      return this.relatedRoutine !== null;
    },
  },
  created() {
    const tradeId = parseInt(this.$route.params.id);
    this.trade = this.tradesStore.trades.find((t) => t.id === tradeId);

    if (this.trade) {
      console.log('Trade:', this.trade);
      console.log('Routine ID:', this.trade.routine_id);
      console.log('All routines:', this.routinesStore.routines);
      
      this.relatedRoutine = this.routinesStore.routines.find(
        routine => routine.id === this.trade.routine_id
      );
      console.log('Found routine:', this.relatedRoutine);
    }

    if (!this.trade) {
      this.$router.push("/trades");
    }
  },
  methods: {
    formatFieldValue(column, value) {
      if (!value) return "N/A";
      if (column.options) {
        return column.options[value] || value;
      }
      if (column.field === "risk") return `${value}%`;
      if (column.field === "profit") return `$${value}`;
      return value;
    },
    getValueClass(field, value) {
      if (field === "direction") return value?.toLowerCase();
      if (field === "result") return value?.toLowerCase();
      return "";
    },
    getInformationalLink(field, value) {
      switch (field) {
        case "routine_id":
          return `/routines/${value}`;
        default:
          return "#";
      }
    },
    getInformationalText(field, value) {
      switch (field) {
        case "routine_id":
          const routine = this.routinesStore.routines.find(
            (r) => r.id === value
          );
          return routine ? `#${value} - ${routine.name}` : `#${value}`;
        default:
          return value;
      }
    },
  },
};
</script>

<style scoped>
.trade-view {
  @apply bg-gray-50 dark:bg-gray-900 border border-input-border rounded-lg p-6;
}

.trade-header {
  @apply flex justify-between items-center mb-6;
}

.trade-title {
  @apply text-2xl font-medium;
}

.trade-content {
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

.section-title {
  @apply text-xl font-medium mt-8 mb-4;
}

.routines-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}

.routine-card {
  @apply bg-white dark:bg-gray-800 p-4 rounded-lg border border-input-border cursor-pointer hover:border-input-focus transition-all duration-200;
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

/* Стилі для статусів */
.long {
  @apply text-green-600 dark:text-green-400;
}

.short {
  @apply text-red-600 dark:text-red-400;
}

.win {
  @apply text-green-600 dark:text-green-400;
}

.lose {
  @apply text-red-600 dark:text-red-400;
}

.related-data {
  @apply mt-8;
}

.related-cards {
  @apply space-y-6;
}

.related-card {
  @apply bg-white dark:bg-gray-800 rounded-lg border border-input-border overflow-hidden;
}

.card-header {
  @apply bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-input-border;
}

.card-title {
  @apply text-lg font-medium;
}

.card-content {
  @apply p-6;
}
</style>
