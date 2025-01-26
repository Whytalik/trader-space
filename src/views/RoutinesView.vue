<template>
    <div class="routines-view">
        <BaseCard>
            <DataBaseWrapper title="Trading Routines" :data="routines" :columns="columns" routePath="/routines" />
        </BaseCard>
    </div>
</template>

<script>
import { useRoutinesStore } from "../stores/routines";
import { generateColumns } from "../utils/columnGenerator";

export default {
    name: "RoutinesView",
    data() {
        return {
            routines: [],
            columns: []
        };
    },
    created() {
        const routinesStore = useRoutinesStore();
        this.routines = routinesStore.routines;
        this.columns = generateColumns(this.routines);
    }
};
</script>

<style scoped>
.routines-view {
    @apply space-y-6;
}
</style>
