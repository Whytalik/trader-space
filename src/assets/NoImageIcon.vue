<template>
  <BaseCard title="Trader Information">
    <div>
      <div>
        <div>
          <component :is="userAvatarComponent" />
        </div>
        <button>Change Photo</button>
      </div>
      <div>
        <BaseGrid columns="2">
          <div v-for="(value, label) in userInfo" :key="label">
            <span>{{ label }}</span>
            <span>{{ value }}</span>
          </div>
        </BaseGrid>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import { useUserStore } from "@/stores/user";
import NoImageIcon from "@/assets/NoImageIcon.vue";
import { mapState } from "pinia";

export default {
  name: "TraderInfoComponent",
  computed: {
    ...mapState(useUserStore, ["currentUser"]),
    
    userInfo() {
      return {
        Username: this.currentUser.username || "N/A",
        Email: this.currentUser.email || "N/A",
        "Full Name": this.currentUser.full_name || "N/A",
        Location: this.currentUser.location || "N/A",
        "Trading Experience": this.currentUser.trading_experience || "N/A",
        Bio: this.currentUser.bio || "N/A",
      };
    },

    userAvatarComponent() {
      return this.userStore.currentUser?.avatar ? "img" : NoImageIcon;
    },
  },
  /*methods: {
    userAvatarComponent() {
      return this.userStore.currentUser?.avatar
        ? {
            render: (h) =>
              h("img", {
                attrs: {
                  src: this.userStore.currentUser.avatar,
                  alt: this.userStore.currentUser.username,
                },
              }),
          }
        : NoImageIcon;
    },
  },*/
};
</script>

<style scoped></style>
