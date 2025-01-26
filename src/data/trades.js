import { pairs } from "./tradesData/pairs.json";
import { sessions } from "./tradesData/sessions.json";
import { directions } from "./tradesData/directions.json";
import { positionTypes } from "./tradesData/position_types.json";
import { results } from "./tradesData/results.json";
import { pointTypes } from "./tradesData/point_types.json";
import { entryModels } from "./tradesData/entry_models.json";
import { timeframes } from "./tradesData/timeframes.json";
import { stopLossTypes } from "./tradesData/stop_loss_types.json";
import { notes } from "./commonData/notes.json";
import { mistakeTypes } from "./commonData/mistake_types.json";
import { routine } from "./routine";

export const trades = [
  {
    id: 1,
    name: "BTC Long Swing",
    date: "2024-03-01",
    pair: pairs.BTC_USD,
    session: sessions.LONDON,
    direction: directions.LONG,
    position_type: positionTypes.SWING,
    risk: "1.5",
    result: results.WIN,
    profit: "300",
    point_A: pointTypes.ORDER_BLOCK,
    point_B: pointTypes.LIQUIDITY,
    fta: pointTypes.BREAK_OF_STRUCTURE,
    entry_model: entryModels.IDM,
    entry_tf: timeframes.H4,
    stop_loss: stopLossTypes.D1_ERL,
    notes:
      notes.MARKET_CONDITIONS +
      ": Strong uptrend\n" +
      notes.ENTRY_REASON +
      ": Clean break of structure",
    conclusion: "Well executed trade following the plan",
    mistakes: mistakeTypes.EARLY_ENTRY,
    routine: routine[0],
  },
  {
    id: 2,
    name: "ETH Short Scalp",
    date: "2024-03-02",
    pair: pairs.ETH_USD,
    session: sessions.NEW_YORK,
    direction: directions.SHORT,
    position_type: positionTypes.SCALP,
    risk: "0.5",
    result: results.LOSS,
    profit: "-50",
    point_A: pointTypes.SUPPLY,
    point_B: pointTypes.BREAK_OF_STRUCTURE,
    fta: pointTypes.SUPPLY,
    entry_model: entryModels.BMS,
    entry_tf: timeframes.M15,
    stop_loss: stopLossTypes.STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Ranging market\n" +
      notes.ENTRY_REASON +
      ": Supply test",
    conclusion: "Should have waited for better confirmation",
    mistakes: mistakeTypes.BREAKING_TRADING_PLAN,
    routine: routine[1],
  },
  {
    id: 3,
    name: "SOL Intraday Long",
    date: "2024-03-03",
    pair: pairs.SOL_USD,
    session: sessions.TOKYO,
    direction: directions.LONG,
    position_type: positionTypes.INTRADAY,
    risk: "1",
    result: results.WIN,
    profit: "200",
    point_A: pointTypes.DEMAND,
    point_B: pointTypes.FVG,
    fta: pointTypes.ORDER_BLOCK,
    entry_model: entryModels.SMS,
    entry_tf: timeframes.H1,
    stop_loss: stopLossTypes.H4_ERL,
    notes:
      notes.MARKET_CONDITIONS +
      ": Clear trend\n" +
      notes.ENTRY_REASON +
      ": Strong demand",
    conclusion: "Perfect execution",
    mistakes: mistakeTypes.NONE,
    routine: routine[2],
  },
  {
    id: 4,
    name: "BNB Range Trade",
    date: "2024-03-04",
    pair: pairs.BNB_USD,
    session: sessions.LONDON,
    direction: directions.LONG,
    position_type: positionTypes.SCALP,
    risk: "0.75",
    result: results.BREAK_EVEN,
    profit: "0",
    point_A: pointTypes.RANGE,
    point_B: pointTypes.CONSOLIDATION,
    fta: pointTypes.LIQUIDITY,
    entry_model: entryModels.PB,
    entry_tf: timeframes.M30,
    stop_loss: stopLossTypes.STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Ranging\n" +
      notes.ENTRY_REASON +
      ": Range bottom test",
    conclusion: "Good risk management saved from loss",
    mistakes: mistakeTypes.POOR_POSITION_SIZING,
    routine: routine[1],
  },
  {
    id: 5,
    name: "XRP Breakout",
    date: "2024-03-05",
    pair: pairs.XRP_USD,
    session: sessions.NEW_YORK,
    direction: directions.LONG,
    position_type: positionTypes.SWING,
    risk: "2",
    result: results.WIN,
    profit: "400",
    point_A: pointTypes.BREAK_OF_STRUCTURE,
    point_B: pointTypes.MITIGATION_BLOCK,
    fta: pointTypes.BREAK_OF_STRUCTURE,
    entry_model: entryModels.BMS,
    entry_tf: timeframes.H4,
    stop_loss: stopLossTypes.H1_ERL,
    notes:
      notes.MARKET_CONDITIONS +
      ": Breakout\n" +
      notes.ENTRY_REASON +
      ": Clean break",
    conclusion: "Perfect setup and execution",
    mistakes: mistakeTypes.NONE,
    routine: routine[3],
  },
  {
    id: 6,
    name: "ADA Short Swing",
    date: "2024-03-06",
    pair: pairs.ADA_USD,
    session: sessions.SYDNEY,
    direction: directions.SHORT,
    position_type: positionTypes.SWING,
    risk: "1",
    result: results.LOSS,
    profit: "-100",
    point_A: pointTypes.SUPPLY,
    point_B: pointTypes.PREMIUM_DISCOUNT,
    fta: pointTypes.SUPPLY,
    entry_model: entryModels.IDM,
    entry_tf: timeframes.D1,
    stop_loss: stopLossTypes.PREVIOUS_HIGH_LOW,
    notes:
      notes.MARKET_CONDITIONS +
      ": Choppy\n" +
      notes.ENTRY_REASON +
      ": Supply test",
    conclusion: "Market conditions were not ideal",
    mistakes: mistakeTypes.IGNORING_MARKET_STRUCTURE,
    routine: routine[4],
  },
  {
    id: 7,
    name: "BTC Scalp Short",
    date: "2024-03-07",
    pair: pairs.BTC_USDT,
    session: sessions.LONDON,
    direction: directions.SHORT,
    position_type: positionTypes.SCALP,
    risk: "0.5",
    result: results.WIN,
    profit: "75",
    point_A: pointTypes.BREAKER_BLOCK,
    point_B: pointTypes.INEFFICIENCY,
    fta: pointTypes.ORDER_BLOCK,
    entry_model: entryModels.SMS,
    entry_tf: timeframes.M5,
    stop_loss: stopLossTypes.STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Clear structure\n" +
      notes.ENTRY_REASON +
      ": Quick scalp",
    conclusion: "Good quick execution",
    mistakes: mistakeTypes.LATE_ENTRY,
    routine: routine[0],
  },
  {
    id: 8,
    name: "ETH Intraday Break",
    date: "2024-03-08",
    pair: pairs.ETH_USDT,
    session: sessions.TOKYO,
    direction: directions.LONG,
    position_type: positionTypes.INTRADAY,
    risk: "1.5",
    result: results.WIN,
    profit: "250",
    point_A: pointTypes.EQUAL_HIGH_LOW,
    point_B: pointTypes.IMBALANCE,
    fta: pointTypes.BREAK_OF_STRUCTURE,
    entry_model: entryModels.BMS,
    entry_tf: timeframes.H1,
    stop_loss: stopLossTypes.SWING_HIGH_LOW,
    notes:
      notes.MARKET_CONDITIONS +
      ": Strong trend\n" +
      notes.ENTRY_REASON +
      ": Break and retest",
    conclusion: "Well planned and executed",
    mistakes: mistakeTypes.NONE,
    routine: routine[1],
  },
  {
    id: 9,
    name: "SOL Quick Scalp",
    date: "2024-03-09",
    pair: pairs.SOL_USD,
    session: sessions.NEW_YORK,
    direction: directions.SHORT,
    position_type: positionTypes.SCALP,
    risk: "0.75",
    result: results.LOSS,
    profit: "-75",
    point_A: pointTypes.SUPPLY,
    point_B: pointTypes.PREVIOUS_HIGH_LOW,
    fta: pointTypes.SUPPLY,
    entry_model: entryModels.PB,
    entry_tf: timeframes.M15,
    stop_loss: stopLossTypes.STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Volatile\n" +
      notes.ENTRY_REASON +
      ": Quick reversal play",
    conclusion: "Too aggressive in volatile conditions",
    mistakes: mistakeTypes.FOMO_TRADING,
    routine: routine[2],
  },
  {
    id: 10,
    name: "BNB Trend Trade",
    date: "2024-03-10",
    pair: pairs.BNB_USD,
    session: sessions.LONDON,
    direction: directions.LONG,
    position_type: positionTypes.SWING,
    risk: "1",
    result: results.WIN,
    profit: "150",
    point_A: pointTypes.DEMAND,
    point_B: pointTypes.BREAK_OF_STRUCTURE,
    fta: pointTypes.ORDER_BLOCK,
    entry_model: entryModels.IDM,
    entry_tf: timeframes.H4,
    stop_loss: stopLossTypes.D1_ERL,
    notes:
      notes.MARKET_CONDITIONS +
      ": Strong trend\n" +
      notes.ENTRY_REASON +
      ": Clean structure",
    conclusion: "Perfect trend following trade",
    mistakes: mistakeTypes.NONE,
    routine: routine[0],
  },
];
