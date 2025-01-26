<template>
    <div class="trader-stats">
        <h2 class="title">Trading Statistics</h2>
        <div class="content">
            <!-- Тут буде статистика трейдера -->
        </div>
    </div>
</template>

<script>
export default {
    name: "TraderStatsCard"
}
</script>

<style scoped>
.trader-stats {
    @apply space-y-4;

}

.title {
    @apply text-lg font-medium text-text;
}

.content {
    @apply bg-background p-4 rounded-lg border border-input-border;
}
</style>