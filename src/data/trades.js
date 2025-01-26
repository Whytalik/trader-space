import { TRADE_CONSTANTS as TC } from "./constants/tradeConstants";
import sessions from "./tradesData/sessions.json";
import notes from "./commonData/notes.json";
import mistakeTypes from "./commonData/mistake_types.json";

export const trades = [
  {
    id: 1,
    name: "BTC Long Swing",
    date: "2024-03-01",
    pair: TC.pairs.BtcUsdt,
    session: sessions.LONDON,
    direction: TC.directions.Long,
    position_type: TC.positionTypes.Swing,
    risk: "1.5",
    result: TC.results.WIN,
    profit: "300",
    point_A: TC.pointTypes.BreakOfStructure,
    point_B: TC.pointTypes.LIQUIDITY,
    fta: TC.pointTypes.BREAK_OF_STRUCTURE,
    entry_model: TC.entryModels.IDM,
    entry_tf: TC.timeframes.H4,
    stop_loss: TC.stopLossTypes.D1Erl,
    notes:
      notes.MARKET_CONDITIONS +
      ": Strong uptrend\n" +
      notes.ENTRY_REASON +
      ": Clean break of structure",
    conclusion: "Well executed trade following the plan",
    mistakes: mistakeTypes.EARLY_ENTRY,
    routine_id: 1,
  },
  {
    id: 2,
    name: "ETH Short Scalp",
    date: "2024-03-02",
    pair: TC.pairs.EthUsd,
    session: sessions.NEW_YORK,
    direction: TC.directions.SHORT,
    position_type: TC.positionTypes.Scalp,
    risk: "0.5",
    result: TC.results.LOSS,
    profit: "-50",
    point_A: TC.pointTypes.SUPPLY,
    point_B: TC.pointTypes.BREAK_OF_STRUCTURE,
    fta: TC.pointTypes.SUPPLY,
    entry_model: TC.entryModels.BMS,
    entry_tf: TC.timeframes.M15,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Ranging market\n" +
      notes.ENTRY_REASON +
      ": Supply test",
    conclusion: "Should have waited for better confirmation",
    mistakes: mistakeTypes.BREAKING_TRADING_PLAN,
    routine_id: 2,
  },
  {
    id: 3,
    name: "SOL Intraday Long",
    date: "2024-03-03",
    pair: TC.pairs.SolUsd,
    session: sessions.TOKYO,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.Intraday,
    risk: "1",
    result: TC.results.WIN,
    profit: "200",
    point_A: TC.pointTypes.DEMAND,
    point_B: TC.pointTypes.FVG,
    fta: TC.pointTypes.ORDER_BLOCK,
    entry_model: TC.entryModels.SMS,
    entry_tf: TC.timeframes.H1,
    stop_loss: TC.stopLossTypes.H4_ERL,
    notes:
      notes.MARKET_CONDITIONS +
      ": Clear trend\n" +
      notes.ENTRY_REASON +
      ": Strong demand",
    conclusion: "Perfect execution",
    mistakes: TC.mistakeTypes.NONE,
    routine_id: 3,
  },
  {
    id: 4,
    name: "BNB Range Trade",
    date: "2024-03-04",
    pair: TC.pairs.BnbUsd,
    session: sessions.LONDON,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.Scalp,
    risk: "0.75",
    result: TC.results.BREAK_EVEN,
    profit: "0",
    point_A: TC.pointTypes.RANGE,
    point_B: TC.pointTypes.CONSOLIDATION,
    fta: TC.pointTypes.LIQUIDITY,
    entry_model: TC.entryModels.PB,
    entry_tf: TC.timeframes.M30,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Ranging\n" +
      notes.ENTRY_REASON +
      ": Range bottom test",
    conclusion: "Good risk management saved from loss",
    mistakes: mistakeTypes.POOR_POSITION_SIZING,
    routine_id: 2,
  },
  {
    id: 5,
    name: "XRP Breakout",
    date: "2024-03-05",
    pair: TC.pairs.XrpUsd,
    session: sessions.NEW_YORK,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.Swing,
    risk: "2",
    result: TC.results.WIN,
    profit: "400",
    point_A: TC.pointTypes.BREAK_OF_STRUCTURE,
    point_B: TC.pointTypes.MITIGATION_BLOCK,
    fta: TC.pointTypes.BREAK_OF_STRUCTURE,
    entry_model: TC.entryModels.BMS,
    entry_tf: TC.timeframes.H4,
    stop_loss: TC.stopLossTypes.H1_ERL,
    notes:
      notes.MARKET_CONDITIONS +
      ": Breakout\n" +
      notes.ENTRY_REASON +
      ": Clean break",
    conclusion: "Perfect setup and execution",
    mistakes: TC.mistakeTypes.NONE,
    routine_id: 4,
  },
  {
    id: 6,
    name: "ADA Short Swing",
    date: "2024-03-06",
    pair: TC.pairs.AdaUsd,
    session: sessions.SYDNEY,
    direction: TC.directions.SHORT,
    position_type: TC.positionTypes.Swing,
    risk: "1",
    result: TC.results.LOSS,
    profit: "-100",
    point_A: TC.pointTypes.SUPPLY,
    point_B: TC.pointTypes.PREMIUM_DISCOUNT,
    fta: TC.pointTypes.SUPPLY,
    entry_model: TC.entryModels.IDM,
    entry_tf: TC.timeframes.D1,
    stop_loss: TC.stopLossTypes.PREVIOUS_HIGH_LOW,
    notes:
      notes.MARKET_CONDITIONS +
      ": Choppy\n" +
      notes.ENTRY_REASON +
      ": Supply test",
    conclusion: "Market conditions were not ideal",
    mistakes: mistakeTypes.IGNORING_MARKET_STRUCTURE,
    routine_id: 5,
  },
  {
    id: 7,
    name: "BTC Scalp Short",
    date: "2024-03-07",
    pair: TC.pairs.BtcUsdt,
    session: sessions.LONDON,
    direction: TC.directions.SHORT,
    position_type: TC.positionTypes.Scalp,
    risk: "0.5",
    result: TC.results.WIN,
    profit: "75",
    point_A: TC.pointTypes.BREAKER_BLOCK,
    point_B: TC.pointTypes.INEFFICIENCY,
    fta: TC.pointTypes.ORDER_BLOCK,
    entry_model: TC.entryModels.SMS,
    entry_tf: TC.timeframes.M5,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Clear structure\n" +
      notes.ENTRY_REASON +
      ": Quick scalp",
    conclusion: "Good quick execution",
    mistakes: mistakeTypes.LATE_ENTRY,
    routine_id: 1,
  },
  {
    id: 8,
    name: "ETH Intraday Break",
    date: "2024-03-08",
    pair: TC.pairs.EthUsdt,
    session: sessions.TOKYO,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.Intraday,
    risk: "1.5",
    result: TC.results.WIN,
    profit: "250",
    point_A: TC.pointTypes.EQUAL_HIGH_LOW,
    point_B: TC.pointTypes.IMBALANCE,
    fta: TC.pointTypes.BREAK_OF_STRUCTURE,
    entry_model: TC.entryModels.BMS,
    entry_tf: TC.timeframes.H1,
    stop_loss: TC.stopLossTypes.SWING_HIGH_LOW,
    notes:
      notes.MARKET_CONDITIONS +
      ": Strong trend\n" +
      notes.ENTRY_REASON +
      ": Break and retest",
    conclusion: "Well planned and executed",
    mistakes: TC.mistakeTypes.NONE,
    routine_id: 2,
  },
  {
    id: 9,
    name: "SOL Quick Scalp",
    date: "2024-03-09",
    pair: TC.pairs.SolUsd,
    session: sessions.NEW_YORK,
    direction: TC.directions.SHORT,
    position_type: TC.positionTypes.Scalp,
    risk: "0.75",
    result: TC.results.LOSS,
    profit: "-75",
    point_A: TC.pointTypes.SUPPLY,
    point_B: TC.pointTypes.PREVIOUS_HIGH_LOW,
    fta: TC.pointTypes.SUPPLY,
    entry_model: TC.entryModels.PB,
    entry_tf: TC.timeframes.M15,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    notes:
      notes.MARKET_CONDITIONS +
      ": Volatile\n" +
      notes.ENTRY_REASON +
      ": Quick reversal play",
    conclusion: "Too aggressive in volatile conditions",
    mistakes: mistakeTypes.FOMO_TRADING,
    routine_id: 3,
  },
  {
    id: 10,
    name: "BNB Trend Trade",
    date: "2024-03-10",
    pair: TC.pairs.BnbUsd,
    session: sessions.LONDON,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.Swing,
    risk: "1",
    result: TC.results.WIN,
    profit: "150",
    point_A: TC.pointTypes.DEMAND,
    point_B: TC.pointTypes.BREAK_OF_STRUCTURE,
    fta: TC.pointTypes.ORDER_BLOCK,
    entry_model: TC.entryModels.IDM,
    entry_tf: TC.timeframes.H4,
    stop_loss: TC.stopLossTypes.D1_ERL,
    notes:
      notes.MARKET_CONDITIONS +
      ": Strong trend\n" +
      notes.ENTRY_REASON +
      ": Clean structure",
    conclusion: "Perfect trend following trade",
    mistakes: TC.mistakeTypes.NONE,
    routine_id: 1,
  },
];
