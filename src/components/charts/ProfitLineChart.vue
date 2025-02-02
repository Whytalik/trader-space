<template>
  <div class="chart-container">
    <h3 class="chart-title">Profit Dynamics</h3>
    <Line v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  trades: {
    type: Array,
    required: true,
  },
});

const chartData = computed(() => {
  const sortedTrades = [...props.trades].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  let cumulativeProfit = 0;
  const profitData = sortedTrades.map((trade) => {
    cumulativeProfit += Number(trade.profit);
    return cumulativeProfit;
  });

  return {
    labels: sortedTrades.map((trade) => trade.date),
    datasets: [
      {
        label: "Total Profit",
        data: profitData,
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      ticks: {
        callback: (value) => "$" + value,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (context) => "Profit: $" + context.raw,
      },
    },
  },
};
</script>

<style scoped>
.chart-container {
  @apply bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700;
  height: 400px;
}

.chart-title {
  @apply text-lg font-medium mb-4 text-gray-700 dark:text-gray-300;
}
</style>
