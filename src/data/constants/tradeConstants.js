import { jsonToConstants } from "../../utils/jsonToConstants";
import pairsJson from "../tradesData/pairs.json";
import directionsJson from "../tradesData/directions.json";
import positionTypesJson from "../tradesData/position_types.json";
import resultsJson from "../tradesData/results.json";
import pointTypesJson from "../tradesData/point_types.json";
import entryModelsJson from "../tradesData/entry_models.json";
import timeframesJson from "../tradesData/timeframes.json";
import stopLossTypesJson from "../tradesData/stop_loss_types.json";
import mistakeTypesJson from "../commonData/mistake_types.json";

export const TRADE_CONSTANTS = {
  pairs: jsonToConstants(pairsJson),
  directions: jsonToConstants(directionsJson),
  positionTypes: jsonToConstants(positionTypesJson),
  results: jsonToConstants(resultsJson),
  pointTypes: jsonToConstants(pointTypesJson),
  entryModels: jsonToConstants(entryModelsJson),
  timeframes: jsonToConstants(timeframesJson),
  stopLossTypes: jsonToConstants(stopLossTypesJson),
  mistakeTypes: jsonToConstants(mistakeTypesJson),
};
