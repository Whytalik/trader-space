import { TRADE_CONSTANTS as TC } from "./data";

export const tradeColumns = [
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
    options: TC.pairs,
  },
  {
    field: "session",
    header: "Session",
    visible: true,
    options: TC.sessions,
  },
  {
    field: "direction",
    header: "Direction",
    visible: true,
    options: TC.directions,
  },
  {
    field: "position_type",
    header: "Position Type",
    visible: true,
    options: TC.positionTypes,
  },
  {
    field: "risk",
    header: "Risk",
    visible: true,
  },
  {
    field: "result",
    header: "Result",
    visible: true,
    options: TC.results,
  },
  {
    field: "profit",
    header: "Profit",
    visible: true,
  },
  {
    field: "point_A",
    header: "Point A",
    visible: false,
    options: TC.pointTypes,
  },
  {
    field: "point_B",
    header: "Point B",
    visible: false,
    options: TC.pointTypes,
  },
  {
    field: "fta",
    header: "FTA",
    visible: false,
    options: TC.pointTypes,
  },
  {
    field: "entry_model",
    header: "Entry Model",
    visible: false,
    options: TC.entryModels,
  },
  {
    field: "entry_tf",
    header: "Timeframe",
    visible: false,
    options: TC.timeframes,
  },
  {
    field: "stop_loss",
    header: "Stop Loss",
    visible: false,
    options: TC.stopLossTypes,
  },
  {
    field: "routine_id",
    header: "Routine ID",
    visible: false,
    isInformational: true,
  },
];

export const trades = [
  {
    id: 1,
    name: "BTC Long Swing",
    date: "2024-03-01",
    pair: TC.pairs.BTC_USD,
    session: TC.sessions.LONDON,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.SWING,
    risk: "1.5",
    result: TC.results.WIN,
    profit: "300",
    point_A: TC.pointTypes.BREAK_OF_STRUCTURE,
    point_B: TC.pointTypes.LIQUIDITY,
    fta: TC.pointTypes.BREAK_OF_STRUCTURE,
    entry_model: TC.entryModels.IDM,
    entry_tf: TC.entryTimeframes.H4,
    stop_loss: TC.stopLossTypes.PREVIOUS_LOW_HIGH,
    routine_id: [1],
  },
  {
    id: 2,
    name: "ETH Short Scalp",
    date: "2024-03-02",
    pair: TC.pairs.ETH_USD,
    session: TC.sessions.NEW_YORK,
    direction: TC.directions.SHORT,
    position_type: TC.positionTypes.SCALP,
    risk: "0.5",
    result: TC.results.LOSS,
    profit: "-50",
    point_A: TC.pointTypes.SUPPLY,
    point_B: TC.pointTypes.BREAK_OF_STRUCTURE,
    fta: TC.pointTypes.SUPPLY,
    entry_model: TC.entryModels.BMS,
    entry_tf: TC.entryTimeframes.M15,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    routine_id: [2],
  },
  {
    id: 3,
    name: "SOL Intraday Long",
    date: "2024-03-03",
    pair: TC.pairs.SOL_USD,
    session: TC.sessions.TOKYO,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.INTRADAY,
    risk: "1",
    result: TC.results.WIN,
    profit: "200",
    point_A: TC.pointTypes.DEMAND,
    point_B: TC.pointTypes.FVG,
    fta: TC.pointTypes.ORDER_BLOCK,
    entry_model: TC.entryModels.SMS,
    entry_tf: TC.entryTimeframes.H1,
    stop_loss: TC.stopLossTypes.PREVIOUS_LOW_HIGH,
    tda_image: null,
    exit_model_image: null,
    fta_image: null,
    routine_id: [3],
  },
  {
    id: 4,
    name: "BNB Range Trade",
    date: "2024-03-04",
    pair: TC.pairs.BNB_USD,
    session: TC.sessions.LONDON,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.SCALP,
    risk: "0.75",
    result: TC.results.NOT_EXECUTED,
    profit: "0",
    point_A: TC.pointTypes.LIQUIDITY,
    point_B: TC.pointTypes.DEMAND,
    fta: TC.pointTypes.LIQUIDITY,
    entry_model: TC.entryModels.PB,
    entry_tf: TC.entryTimeframes.M30,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    routine_id: [2],
  },
  {
    id: 5,
    name: "XRP Breakout",
    date: "2024-03-05",
    pair: TC.pairs.XRP_USD,
    session: TC.sessions.NEW_YORK,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.SWING,
    risk: "2",
    result: TC.results.WIN,
    profit: "400",
    point_A: TC.pointTypes.BREAK_OF_STRUCTURE,
    point_B: TC.pointTypes.ORDER_BLOCK,
    fta: TC.pointTypes.BREAK_OF_STRUCTURE,
    entry_model: TC.entryModels.BMS,
    entry_tf: TC.entryTimeframes.H4,
    stop_loss: TC.stopLossTypes.SWING_LOW_HIGH,
    tda_image: null,
    exit_model_image: null,
    fta_image: null,
    routine_id: [4],
  },
  {
    id: 6,
    name: "ADA Short Swing",
    date: "2024-03-06",
    pair: TC.pairs.ADA_USD,
    session: TC.sessions.SYDNEY,
    direction: TC.directions.SHORT,
    position_type: TC.positionTypes.SWING,
    risk: "1",
    result: TC.results.LOSS,
    profit: "-100",
    point_A: TC.pointTypes.SUPPLY,
    point_B: TC.pointTypes.LIQUIDITY,
    fta: TC.pointTypes.SUPPLY,
    entry_model: TC.entryModels.IDM,
    entry_tf: TC.entryTimeframes.D1,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    routine_id: [5],
  },
  {
    id: 7,
    name: "BTC Scalp Short",
    date: "2024-03-07",
    pair: TC.pairs.BTC_USD,
    session: TC.sessions.LONDON,
    direction: TC.directions.SHORT,
    position_type: TC.positionTypes.SCALP,
    risk: "0.5",
    result: TC.results.WIN,
    profit: "75",
    point_A: TC.pointTypes.DEMAND,
    point_B: TC.pointTypes.FVG,
    fta: TC.pointTypes.ORDER_BLOCK,
    entry_model: TC.entryModels.SMS,
    entry_tf: TC.entryTimeframes.M5,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    routine_id: [1],
  },
  {
    id: 8,
    name: "ETH Intraday Break",
    date: "2024-03-08",
    pair: TC.pairs.ETH_USD,
    session: TC.sessions.TOKYO,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.INTRADAY,
    risk: "1.5",
    result: TC.results.WIN,
    profit: "250",
    point_A: TC.pointTypes.BREAK_OF_STRUCTURE,
    point_B: TC.pointTypes.FVG,
    fta: TC.pointTypes.BREAK_OF_STRUCTURE,
    entry_model: TC.entryModels.BMS,
    entry_tf: TC.entryTimeframes.H1,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    routine_id: [2],
  },
  {
    id: 9,
    name: "SOL Quick Scalp",
    date: "2024-03-09",
    pair: TC.pairs.SOL_USD,
    session: TC.sessions.NEW_YORK,
    direction: TC.directions.SHORT,
    position_type: TC.positionTypes.SCALP,
    risk: "0.75",
    result: TC.results.LOSS,
    profit: "-75",
    point_A: TC.pointTypes.SUPPLY,
    point_B: TC.pointTypes.ORDER_BLOCK,
    fta: TC.pointTypes.SUPPLY,
    entry_model: TC.entryModels.PB,
    entry_tf: TC.entryTimeframes.M15,
    stop_loss: TC.stopLossTypes.STRUCTURE,
    routine_id: [3],
  },
  {
    id: 10,
    name: "BNB Trend Trade",
    date: "2024-03-10",
    pair: TC.pairs.BNB_USD,
    session: TC.sessions.LONDON,
    direction: TC.directions.LONG,
    position_type: TC.positionTypes.SWING,
    risk: "1",
    result: TC.results.WIN,
    profit: "150",
    point_A: TC.pointTypes.DEMAND,
    point_B: TC.pointTypes.BREAK_OF_STRUCTURE,
    fta: TC.pointTypes.ORDER_BLOCK,
    entry_model: TC.entryModels.IDM,
    entry_tf: TC.entryTimeframes.H4,
    stop_loss: TC.stopLossTypes.SWING_LOW_HIGH,
    routine_id: [1],
  },
];
