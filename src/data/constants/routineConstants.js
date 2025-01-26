import { jsonToConstants } from "../../utils/jsonToConstants";
import pairsJson from "../tradesData/pairs.json";
import narrativesJson from "../routineData/narratives.json";
import executionJson from "../routineData/execution.json";
import outcomesJson from "../routineData/outcomes.json";

export const ROUTINE_CONSTANTS = {
  pairs: jsonToConstants(pairsJson),
  narratives: jsonToConstants(narrativesJson),
  execution: jsonToConstants(executionJson),
  outcomes: jsonToConstants(outcomesJson),
};
