export function calculateTotalProfit(trades) {
  return trades.reduce((sum, trade) => sum + Number(trade.profit), 0);
}

export function calculateWinningTrades(trades) {
  return trades.filter((t) => Number(t.profit) > 0);
}

export function calculateLosingTrades(trades) {
  return trades.filter((t) => Number(t.profit) < 0);
}

export function calculateAverageWin(winningTrades) {
  if (winningTrades.length === 0) return 0;
  const totalWin = winningTrades.reduce(
    (sum, trade) => sum + Number(trade.profit),
    0
  );
  return (totalWin / winningTrades.length).toFixed(0);
}

export function calculateAverageLoss(losingTrades) {
  if (losingTrades.length === 0) return 0;
  const totalLoss = losingTrades.reduce(
    (sum, trade) => sum + Number(trade.profit),
    0
  );
  return Math.abs((totalLoss / losingTrades.length).toFixed(0));
}

export function calculateLargestWin(trades) {
  const profits = trades.map((t) => Number(t.profit)).filter((p) => p > 0);
  return profits.length ? Math.max(...profits) : 0;
}

export function calculateLargestLoss(trades) {
  const losses = trades.map((t) => Number(t.profit)).filter((p) => p < 0);
  return losses.length ? Math.abs(Math.min(...losses)) : 0;
}

export function calculateAverageRisk(trades, totalTrades) {
  return (
    trades.reduce((sum, trade) => sum + Number(trade.risk), 0) / totalTrades
  ).toFixed(1);
}

export function calculateMaxRisk(trades) {
  return Math.max(...trades.map((t) => Number(t.risk))).toFixed(1);
}

export function calculateMetricStats(trades, field) {
  const stats = {};
  trades.forEach((trade) => {
    if (!stats[trade[field]]) {
      stats[trade[field]] = { wins: 0, total: 0 };
    }
    stats[trade[field]].total++;
    if (Number(trade.profit) > 0) stats[trade[field]].wins++;
  });

  return Object.entries(stats)
    .map(([metric, data]) => ({
      metric,
      winRate: ((data.wins / data.total) * 100).toFixed(1),
      wins: data.wins,
      total: data.total,
    }))
    .sort((a, b) => b.winRate - a.winRate || b.total - a.total);
}
