<template>
  <button
    :class="[
      'btn',
      `btn-${variant}`,
      `btn-${size}`,
      { 'btn-disabled': disabled },
      { 'btn-icon-only': !label },
    ]"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon" class="icon">
      <component :is="icon" />
    </span>
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "small",
  },
  icon: {
    type: [Object, String],
    default: null,
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<style scoped>
.btn {
  @apply inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ease-in-out;
  height: 36px;
}

.btn-icon-only {
  @apply justify-center items-center w-full h-full;
  padding: 0;
}

.btn-primary {
  @apply bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500;
}

.btn-secondary {
  @apply bg-gray-200 text-gray-700 border border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500;
}

.btn-danger {
  @apply bg-red-500 text-white border border-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500;
}

.btn-success {
  @apply bg-green-500 text-white border border-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500;
}

.btn-warning {
  @apply bg-yellow-500 text-white border border-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500;
}

.btn-disabled {
  @apply bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300;
}

.btn-small {
  @apply px-4 py-2 text-sm;
}

.btn-medium {
  @apply px-6 py-3 text-base;
}

.btn-large {
  @apply px-8 py-4 text-lg;
}

.icon {
  display: inline-flex;
}

.btn:hover {
  @apply scale-105;
}

.btn:focus {
  @apply outline-none ring-2;
}

.dark .btn {
  @apply bg-gray-800 text-white border border-gray-700;
}

.dark .btn-primary {
  @apply bg-blue-700 text-white border border-blue-600 hover:bg-blue-800 focus:ring-2 focus:ring-blue-600;
}

.dark .btn-secondary {
  @apply bg-gray-600 text-gray-300 border border-gray-500 hover:bg-gray-700 focus:ring-2 focus:ring-gray-400;
}

.dark .btn-danger {
  @apply bg-red-700 text-white border border-red-600 hover:bg-red-800 focus:ring-2 focus:ring-red-600;
}

.dark .btn-success {
  @apply bg-green-700 text-white border border-green-600 hover:bg-green-800 focus:ring-2 focus:ring-green-600;
}

.dark .btn-warning {
  @apply bg-yellow-700 text-white border border-yellow-600 hover:bg-yellow-800 focus:ring-2 focus:ring-yellow-600;
}
</style>
