import { ROUTINE_CONSTANTS as RC } from "./data";

export const routineColumns = [
  {
    field: "id",
    header: "ID",
    visible: false,
    isInformational: true
  },
  {
    field: "name",
    header: "Name",
    visible: true
  },
  {
    field: "date",
    header: "Date",
    visible: true
  },
  {
    field: "pair",
    header: "Pair",
    visible: true,
    options: RC.pairs
  },
  {
    field: "narrative",
    header: "Narrative",
    visible: true,
    options: RC.narratives
  },
  {
    field: "plan",
    header: "Plan",
    visible: true
  },
  {
    field: "execution",
    header: "Execution",
    visible: true,
    options: RC.execution
  },
  {
    field: "outcome",
    header: "Outcome",
    visible: true,
    options: RC.outcomes
  },
  {
    field: "mistakes",
    header: "Mistakes",
    visible: false,
    isInformational: true,
    options: RC.mistakes
  },
  {
    field: "notes",
    header: "Notes",
    visible: false,
    isInformational: true
  },
  {
    field: "trade_ids",
    header: "Related Trades",
    visible: false,
    isInformational: true
  },
  {
    field: "main_analysis",
    header: "Main Analysis",
    visible: false,
    isInformational: true
  },
  {
    field: "sub_analysis",
    header: "Sub Analysis",
    visible: false,
    isInformational: true
  }
];

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
