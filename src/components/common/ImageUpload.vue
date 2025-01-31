<template>
  <div class="image-upload">
    <div 
      class="image-preview"
      @click="triggerFileInput"
      :class="{ 'has-image': imageUrl }"
    >
      <img 
        v-if="imageUrl" 
        :src="imageUrl" 
        alt="Preview"
        class="preview-image"
      />
      <div v-else class="placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
        </svg>
        <span>Click to upload image</span>
      </div>
    </div>
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      accept="image/*"
      class="hidden"
    />
    <textarea
      v-model="description"
      placeholder="Add description..."
      class="description-input"
      @input="emitUpdate"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'ImageUpload',
  props: {
    value: {
      type: Object,
      default: () => ({ image: null, description: '' })
    }
  },
  data() {
    return {
      imageUrl: null,
      description: this.value.description || ''
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        this.imageUrl = URL.createObjectURL(file)
        this.emitUpdate()
      }
    },
    emitUpdate() {
      this.$emit('input', {
        image: this.imageUrl,
        description: this.description
      })
    }
  }
}
</script>

<style scoped>
.image-upload {
  @apply space-y-2;
}

.image-preview {
  @apply border-2 border-dashed border-gray-300 dark:border-gray-600 
    rounded-lg cursor-pointer 
    hover:border-blue-500 dark:hover:border-blue-400
    transition-colors duration-200
    flex items-center justify-center
    h-48;
}

.preview-image {
  @apply w-full h-full object-contain rounded-lg;
}

.placeholder {
  @apply flex flex-col items-center justify-center text-gray-400 dark:text-gray-500;
}

.icon {
  @apply w-12 h-12 mb-2;
}

.description-input {
  @apply w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
    rounded-md bg-white dark:bg-gray-800 
    text-gray-900 dark:text-gray-100
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    resize-y;
  min-height: 60px;
}
</style> 