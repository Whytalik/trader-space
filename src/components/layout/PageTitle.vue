<template>
    <div class="page-title-wrapper">
        <h1 class="page-title">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: "PageTitle",
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.page-title-wrapper {
    @apply mb-6 pb-4 border-b border-input-border;
}

.page-title {
    @apply text-2xl font-bold;
}
</style>