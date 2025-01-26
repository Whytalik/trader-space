<template>
    <div class="view-toggle">
        <button class="toggle-btn" :class="{ 'active': modelValue === 'list' }"
            @click="$emit('update:modelValue', 'list')">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
            </svg>
        </button>
        <button class="toggle-btn" :class="{ 'active': modelValue === 'gallery' }"
            @click="$emit('update:modelValue', 'gallery')">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd" />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ViewToggle',
    props: {
        modelValue: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.view-toggle {
    @apply flex gap-2;
}

.toggle-btn {
    @apply p-2 rounded-md hover:bg-input-bg transition-colors duration-fast;
}

.toggle-btn.active {
    @apply bg-input-bg text-button-primary-bg;
}

.icon {
    @apply w-5 h-5;
}
</style>