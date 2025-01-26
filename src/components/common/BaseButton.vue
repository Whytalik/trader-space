<template>
    <button :class="[
        'button-base',
        `button-${variant}`,
        size && `button-${size}`,
        { 'opacity-50 cursor-not-allowed': disabled }
    ]" :disabled="disabled" @click="$emit('click')">
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => ['primary', 'secondary', 'danger', 'ghost'].includes(value)
        },
        size: {
            type: String,
            default: 'md',
            validator: (value) => ['sm', 'md', 'lg'].includes(value)
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.button-base {
    @apply inline-flex items-center justify-center gap-2 rounded-md transition-all duration-fast font-medium;
}

/* Sizes */
.button-sm {
    @apply px-3 py-1.5 text-sm;
}

.button-md {
    @apply px-4 py-2 text-sm;
}

.button-lg {
    @apply px-6 py-3 text-base;
}

/* Variants */
.button-primary {
    @apply bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover disabled:hover:bg-button-primary-bg;
}

.button-secondary {
    @apply bg-background text-text border border-input-border hover:border-input-focus hover:bg-input-bg;
}

.button-danger {
    @apply bg-red-500 text-white hover:bg-red-600 disabled:hover:bg-red-500;
}

.button-ghost {
    @apply bg-transparent text-text hover:bg-input-bg;
}
</style>