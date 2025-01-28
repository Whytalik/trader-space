import { ROUTINE_CONSTANTS as RC } from "./data";

export const routines = [
  {
    id: 1,
    name: "Pre-trade analysis",
    date: "2024-03-01",
    pair: RC.pairs.BTC_USD,
    narrative: RC.narratives.BULLISH,
    plan: true,
    execution: RC.execution.WIN,
    outcome: RC.outcomes.BULLISH,
    mistakes: RC.mistakes.EARLY_ENTRY,
    notes:
      RC.notes.EARLY_ENTRY +
      ": Strong uptrend\n" +
      RC.notes.ENTRY_REASON +
      ": Clean break of structure",
    trade_ids: [1, 7],
    main_analysis: null,
    sub_analysis: [2, 3],
  },
  {
    id: 2,
    name: "Market Structure Review",
    date: "2024-03-02",
    pair: RC.pairs.ETH_USD,
    narrative: RC.narratives.BEARISH,
    plan: true,
    execution: RC.execution.LOSS,
    outcome: RC.outcomes.INVALID,
    mistakes: RC.mistakes.BREAKING_TRADING_PLAN,
    notes:
      RC.notes.BREAKING_TRADING_PLAN +
      ": Ranging market\n" +
      RC.notes.ENTRY_REASON +
      ": Supply test",
    trade_ids: [2, 8],
    main_analysis: 1,
    sub_analysis: [],
  },
  {
    id: 3,
    name: "Volume Analysis",
    date: "2024-03-03",
    pair: RC.pairs.SOL_USD,
    narrative: RC.narratives.NEUTRAL,
    plan: false,
    execution: RC.execution.NOT_EXECUTED,
    outcome: RC.outcomes.NEUTRAL,
    mistakes: RC.mistakes.IGNORING_MARKET_STRUCTURE,
    notes: RC.notes.ENTRY_REASON + ": Strong demand",
    trade_ids: [3, 9],
    main_analysis: 1,
    sub_analysis: [],
  },
];
