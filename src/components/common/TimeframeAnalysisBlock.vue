<template>
  <div class="analysis-block">
    <div class="form-group">
      <label class="form-label">Image URL</label>
      <input
        :value="modelValue.image_url"
        @input="updateValue('image_url', $event.target.value)"
        type="text"
        class="form-input"
        placeholder="Paste image URL here..."
      />
    </div>
    <div class="form-group mt-2">
      <label class="form-label">Analysis</label>
      <textarea
        :value="modelValue.description"
        @input="updateValue('description', $event.target.value)"
        class="form-textarea"
        placeholder="Write your analysis here..."
        rows="3"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeframeAnalysisBlock',
  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => ({
        image_url: '',
        description: ''
      })
    }
  },
  methods: {
    updateValue(key, value) {
      this.$emit('update:modelValue', {
        ...this.modelValue,
        [key]: value
      });
    }
  }
}
</script>

<style scoped>
.analysis-block {
  @apply space-y-2;
}

.form-group {
  @apply flex flex-col;
}

.form-label {
  @apply text-sm font-medium text-gray-700 dark:text-gray-300 mb-1;
}

.form-input {
  @apply w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
    bg-white dark:bg-gray-800 
    text-gray-900 dark:text-gray-100
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

.form-textarea {
  @apply w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
    bg-white dark:bg-gray-800 
    text-gray-900 dark:text-gray-100
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    resize-y;
  min-height: 80px;
}
</style> 