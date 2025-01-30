import { computed } from 'vue';

export function useTradeStats(trades) {
    const totalTrades = computed(() => trades.value.length);

    const totalProfit = computed(() => 
        trades.value.reduce((sum, trade) => sum + Number(trade.profit), 0)
    );

    const winningTrades = computed(() => 
        trades.value.filter(t => Number(t.profit) > 0)
    );

    const losingTrades = computed(() => 
        trades.value.filter(t => Number(t.profit) < 0)
    );

    const avgWin = computed(() => {
        const wins = winningTrades.value;
        return wins.length ? 
            (wins.reduce((sum, trade) => sum + Number(trade.profit), 0) / wins.length).toFixed(0) 
            : 0;
    });

    const avgLoss = computed(() => {
        const losses = losingTrades.value;
        return losses.length ?
            Math.abs(losses.reduce((sum, trade) => sum + Number(trade.profit), 0) / losses.length).toFixed(0)
            : 0;
    });

    const largestWin = computed(() => {
        const profits = trades.value.map(t => Number(t.profit)).filter(p => p > 0);
        return profits.length ? Math.max(...profits) : 0;
    });

    const largestLoss = computed(() => {
        const losses = trades.value.map(t => Number(t.profit)).filter(p => p < 0);
        return losses.length ? Math.abs(Math.min(...losses)) : 0;
    });

    const avgRisk = computed(() => 
        (trades.value.reduce((sum, trade) => sum + Number(trade.risk), 0) / totalTrades.value).toFixed(1)
    );

    const maxRisk = computed(() => 
        Math.max(...trades.value.map(t => Number(t.risk))).toFixed(1)
    );

    const calculateMetricStats = (field) => {
        const stats = {};
        trades.value.forEach(trade => {
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
                total: data.total
            }))
            .sort((a, b) => b.winRate - a.winRate || b.total - a.total);
    };

    const bestPairStats = computed(() => {
        const pairStats = calculateMetricStats('pair');
        return pairStats[0] || { metric: null, winRate: 0, wins: 0, total: 0 };
    });

    const bestSessionStats = computed(() => {
        const sessionStats = calculateMetricStats('session');
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
        bestSessionStats
    };
} 