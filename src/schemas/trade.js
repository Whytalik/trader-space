import * as yup from "yup";

export const tradeSchema = yup.object({
  name: yup.string().required("Name is required"),
  date: yup
    .date()
    .required("Date is required")
    .max(new Date(), "Date cannot be in the future"),
  pair: yup.string().required("Pair is required"),
  session: yup.string().required("Session is required"),
  direction: yup.string().required("Direction is required"),
  position_type: yup.string().required("Position type is required"),
  risk: yup
    .number()
    .min(0, "Risk must be a positive number")
    .max(100, "Risk cannot be more than 100")
    .required("Risk is required"),
  result: yup.string().required("Result is required"),
  profit: yup.number().required("Profit is required"),
  point_A: yup.string().required("Point A is required"),
  point_B: yup.string().required("Point B is required"),
  fta: yup.string().required("FTA is required"),
  entry_model: yup.string().required("Entry model is required"),
  entry_tf: yup.string().required("Entry timeframe is required"),
  stop_loss: yup.string().required("Stop loss type is required"),
  routine_id: yup.number().required("Routine ID is required"),
});
