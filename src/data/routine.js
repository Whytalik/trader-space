import { ROUTINE_CONSTANTS as RC } from "./constants/routineConstants";
import pairs from "./tradesData/pairs.json";
import narratives from "./routineData/narratives.json";
import execution from "./routineData/execution.json";
import outcomes from "./routineData/outcomes.json";
import mistakeTypes from "./commonData/mistake_types.json";
import notes from "./commonData/notes.json";

export const routines = [
  {
    id: 1,
    name: "Pre-trade analysis",
    date: "2024-03-01",
    pair: RC.pairs.BtcUsd,
    narrative: RC.narratives.Bullish,
    plan: true,
    execution: RC.execution.Win,
    outcome: outcomes.BULLISH,
    mistakes: mistakeTypes.EARLY_ENTRY,
    notes:
      notes.MARKET_CONDITIONS +
      ": Strong uptrend\n" +
      notes.ENTRY_REASON +
      ": Clean break of structure",
    trade_ids: [1, 7],
    main_analysis: null,
    sub_analysis: [2, 3],
  },
  {
    id: 2,
    name: "Market Structure Review",
    date: "2024-03-02",
    pair: pairs.ETH_USD,
    narrative: narratives.BEARISH,
    plan: true,
    execution: execution.LOSS,
    outcome: outcomes.INVALID,
    mistakes: mistakeTypes.BREAKING_TRADING_PLAN,
    notes:
      notes.MARKET_CONDITIONS +
      ": Ranging market\n" +
      notes.ENTRY_REASON +
      ": Supply test",
    trade_ids: [2, 8],
    main_analysis: 1,
    sub_analysis: [],
  },
  {
    id: 3,
    name: "Volume Analysis",
    date: "2024-03-03",
    pair: pairs.SOL_USD,
    narrative: narratives.NEUTRAL,
    plan: false,
    execution: execution.NOT_EXECUTED,
    outcome: outcomes.NEUTRAL,
    mistakes: mistakeTypes.IGNORING_MARKET_STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Clear trend\n" +
      notes.ENTRY_REASON +
      ": Strong demand",
    trade_ids: [3, 9],
    main_analysis: 1,
    sub_analysis: [],
  },
];
