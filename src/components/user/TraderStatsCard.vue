<template>
    <BaseCard title="Trading Statistics">
        <BaseGrid columns="3">
            <CardItem>
                <span class="stat-label">Total Trades</span>
                <span class="stat-value">150</span>
            </CardItem>
            <CardItem>
                <span class="stat-label">Win Rate</span>
                <span class="stat-value">65%</span>
            </CardItem>
            <CardItem>
                <span class="stat-label">Profit Factor</span>
                <span class="stat-value">2.1</span>
            </CardItem>
            <CardItem>
                <span class="stat-label">Average Win</span>
                <span class="stat-value">$250</span>
            </CardItem>
            <CardItem>
                <span class="stat-label">Average Loss</span>
                <span class="stat-value">$100</span>
            </CardItem>
        </BaseGrid>
    </BaseCard>
</template>

<script>
export default {
    name: "TraderStatsCard",
}
</script>

<style scoped>
.stat-item {
    @apply flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg;
}

.stat-label {
    @apply text-sm text-gray-500 dark:text-gray-400 mb-2;
}

.stat-value {
    @apply text-xl font-medium;
}
</style>