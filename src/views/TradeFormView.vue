<template>
  <TradeForm :tradeId="tradeId" />
</template>

<script>
import TradeForm from "@/components/trades/TradeForm.vue";

export default {
  name: "TradeFormView",
  components: {
    TradeForm,
  },
  computed: {
    tradeId() {
      return this.$route.params.id ? Number(this.$route.params.id) : null;
    },
  },
};
</script>
