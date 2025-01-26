<template>
    <DataBaseWrapper title="Trades" :data="trades" :columns="columns" />
</template>

<script>
import { useTradesStore } from "../stores/trades";
import { generateColumns } from "../utils/columnGenerator";

export default {
    name: "TradesView",
    data() {
        return {
            trades: [],
            columns: []
        };
    },
    created() {
        const tradesStore = useTradesStore();
        this.trades = tradesStore.trades;
        this.columns = generateColumns(this.trades);
    }
};
</script>
