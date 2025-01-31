<template>
  <div class="today-routines-wrapper" :class="{ 'no-data': !todayRoutines.length }">
    <DataBaseWrapper
      title="Today's Routines"
      :data="todayRoutines"
      :columns="columns"
      routePath="/routines"
      storeId="today-routines"
      :hideControls="true"
    >
      <template #empty-state>
        <div class="empty-state">
          <p>No routines for today</p>
        </div>
      </template>
    </DataBaseWrapper>
  </div>
</template>

<script>
import { useRoutinesStore } from "@/stores/routines";
import DataBaseWrapper from "@/components/common/DataBaseWrapper.vue";

export default {
  name: "TodayRoutinesWrapper",
  components: {
    DataBaseWrapper
  },
  data() {
    return {
      routines: [],
      columns: []
    };
  },
  computed: {
    todayRoutines() {
      const today = new Date().toISOString().split('T')[0];
      return this.routines.filter(routine => routine.date === today);
    }
  },
  created() {
    const routinesStore = useRoutinesStore();
    this.routines = routinesStore.routines;
    this.columns = routinesStore.routineColumns;
  }
};
</script>

<style scoped>
.today-routines-wrapper {
  @apply mb-6;
}

.empty-state {
  @apply flex flex-col items-center justify-center py-8;
}

.empty-state p {
  @apply text-gray-500 mb-2;
}
</style> 