<template>
    <div class="base-card">
        <h2 v-if="title" class="card-title">{{ title }}</h2>
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseCard",
    props: {
        title: {
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>
.base-card {
    @apply bg-white dark:bg-gray-800 rounded-lg border border-input-border p-6;
}

.card-title {
    @apply text-lg font-medium mb-4;
}

.card-content {
    @apply space-y-4;
}
</style>