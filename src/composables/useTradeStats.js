import { computed } from "vue";
import {
  calculateTotalProfit,
  calculateWinningTrades,
  calculateLosingTrades,
  calculateAverageWin,
  calculateAverageLoss,
  calculateLargestWin,
  calculateLargestLoss,
  calculateAverageRisk,
  calculateMaxRisk,
  calculateMetricStats,
} from "@/utils/tradeStatsUtils";

export function useTradeStats(trades) {
  const totalTrades = computed(() => trades.value.length);

  const totalProfit = computed(() => calculateTotalProfit(trades.value));

  const winningTrades = computed(() => calculateWinningTrades(trades.value));

  const losingTrades = computed(() => calculateLosingTrades(trades.value));

  const avgWin = computed(() => calculateAverageWin(winningTrades.value));

  const avgLoss = computed(() => calculateAverageLoss(losingTrades.value));

  const largestWin = computed(() => calculateLargestWin(trades.value));

  const largestLoss = computed(() => calculateLargestLoss(trades.value));

  const avgRisk = computed(() =>
    calculateAverageRisk(trades.value, totalTrades.value)
  );

  const maxRisk = computed(() => calculateMaxRisk(trades.value));

  const bestPairStats = computed(() => {
    const pairStats = calculateMetricStats(trades.value, "pair");
    return pairStats[0] || { metric: null, winRate: 0, wins: 0, total: 0 };
  });

  const bestSessionStats = computed(() => {
    const sessionStats = calculateMetricStats(trades.value, "session");
    return sessionStats[0] || { metric: null, winRate: 0, wins: 0, total: 0 };
  });

  return {
    totalTrades,
    totalProfit,
    avgWin,
    avgLoss,
    largestWin,
    largestLoss,
    avgRisk,
    maxRisk,
    bestPairStats,
    bestSessionStats,
  };
}
