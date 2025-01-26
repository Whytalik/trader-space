import pairs from "./tradesData/pairs.json";
import directions from "./tradesData/directions.json";
import positionTypes from "./tradesData/position_types.json";
import results from "./tradesData/results.json";
import pointTypes from "./tradesData/point_types.json";
import entryModels from "./tradesData/entry_models.json";
import timeframes from "./tradesData/timeframes.json";
import stopLossTypes from "./tradesData/stop_loss_types.json";
import notes from "./commonData/notes.json";
import mistakes from "./commonData/mistakes.json";
import sessions from "./tradesData/sessions.json";
import narratives from "./routineData/narratives.json";
import execution from "./routineData/execution.json";
import outcomes from "./routineData/outcomes.json";

export const TRADE_CONSTANTS = {
  pairs,
  directions,
  positionTypes,
  results,
  pointTypes,
  entryModels,
  timeframes,
  stopLossTypes,
  notes,
  mistakes,
  sessions,
};

export const ROUTINE_CONSTANTS = {
  pairs,
  narratives,
  execution,
  outcomes,
  notes,
  mistakes,
};
