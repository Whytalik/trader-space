<template>
  <button
    :class="['btn', `btn-${variant}`, `btn-${size}`]"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon" class="icon">
      <component :is="icon" class="mr-2" />
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
    default: "medium",
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

<style scoped></style>
