<template>
  <div class="profile-container">
    <div class="content">
      <!-- Avatar Section -->
      <div class="photo">
        <div class="photo-container">
          <img v-if="userAvatar" :src="userAvatar" :alt="username" />
          <svg v-else viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        </div>
        <button class="btn-primary" @click="triggerFileInput">
          Change Photo
        </button>
        <input
          type="file"
          ref="fileInput"
          class="hidden"
          accept=".png,.jpg,.jpeg"
          @change="handleFileChange"
        />
      </div>

      <!-- User Information Section -->
      <div class="info">
        <div class="info-grid">
          <div class="info-item">
            <span class="label">Username</span>
            <span>{{ username }}</span>
          </div>
          <div class="info-item">
            <span class="label">Email</span>
            <span>{{ email }}</span>
          </div>
          <div class="info-item">
            <span class="label">Full Name</span>
            <span>{{ fullName }}</span>
          </div>
          <div class="info-item">
            <span class="label">Location</span>
            <span>{{ location }}</span>
          </div>
          <div class="info-item">
            <span class="label">Trading Experience</span>
            <span>{{ experience }}</span>
          </div>
          <div class="info-item">
            <span class="label">Bio</span>
            <span>{{ bio }}</span>
          </div>
          <div class="info-item">
            <span class="label">Join Date</span>
            <span>{{ joinDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const username = computed(() => userStore.currentUser?.username || "N/A");
const email = computed(() => userStore.currentUser?.email || "N/A");
const fullName = computed(() => userStore.currentUser?.full_name || "N/A");
const location = computed(() => userStore.currentUser?.location || "N/A");
const experience = computed(() => userStore.currentUser?.trading_experience || "N/A");
const bio = computed(() => userStore.currentUser?.bio || "N/A");
const joinDate = computed(() => userStore.currentUser?.join_date || "N/A");
const userAvatar = computed(() => userStore.currentUser?.avatar || null);

const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && isValidImage(file)) {
    const reader = new FileReader();
    reader.onloadend = () => {
      uploadAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file (.png, .jpg, .jpeg)");
  }
};

const isValidImage = (file) => {
  const validTypes = ["image/png", "image/jpeg", "image/jpg"];
  return validTypes.includes(file.type);
};

const uploadAvatar = (fileData) => {
  userStore.updateAvatar(fileData);
};
</script>

<style scoped>
.profile-container {
  @apply py-6 px-4 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200;
}

.content {
  @apply flex flex-col md:flex-row gap-6;
}

.photo {
  @apply flex flex-col items-center gap-4;
}

.photo-container {
  @apply w-48 h-48 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center border-4 border-gray-400;
}

.photo-container img,
.photo-container svg {
  @apply w-full h-full object-cover;
}

.photo-container svg {
  @apply w-24 h-24 text-gray-400;
}

.info {
  @apply flex-1;
}

.info-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
}

.info-item {
  @apply flex flex-col gap-1;
}

.label {
  @apply text-sm text-gray-700 dark:text-gray-300 font-medium;
}

span {
  @apply text-lg text-black dark:text-white;
}

.btn-primary {
  @apply px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none transition-colors;
}

.hidden {
  display: none;
}
</style>
