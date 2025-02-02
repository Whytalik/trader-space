import { ROUTINE_CONSTANTS as RC } from "./data";

export const routineColumns = [
  {
    field: "id",
    header: "ID",
    visible: false,
    isInformational: true,
  },
  {
    field: "name",
    header: "Name",
    visible: true,
  },
  {
    field: "date",
    header: "Date",
    visible: true,
  },
  {
    field: "pair",
    header: "Pair",
    visible: true,
    options: RC.pairs,
  },
  {
    field: "narrative",
    header: "Narrative",
    visible: true,
    options: RC.narratives,
  },
  {
    field: "plan",
    header: "Plan",
    visible: true,
  },
  {
    field: "execution",
    header: "Execution",
    visible: true,
    options: RC.execution,
  },
  {
    field: "outcome",
    header: "Outcome",
    visible: true,
    options: RC.outcomes,
  },
  {
    field: "trades_id",
    header: "Related Trades",
    visible: false,
    isInformational: true,
  },
];

export const routines = [
  {
    id: 1,
    name: "Pre-trade analysis",
    date: "2024-03-01",
    pair: RC.pairs.BTC_USD,
    narrative: RC.narratives.BEARISH,
    plan: true,
    execution: RC.execution.WIN,
    outcome: RC.outcomes.BULLISH,
    trades_id: [1, 7],
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
    trades_id: [2, 8],
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
    trades_id: [3, 9],
  },
];
