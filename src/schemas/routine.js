import * as yup from "yup";

export const routineSchema = yup.object({
  name: yup.string().required("Name is required"),
  date: yup.date().required("Date is required"),
  pair: yup.string().required("Pair is required"),
  narrative: yup.string().required("Narrative is required"),
  plan: yup.boolean().required("Plan is required"),
  execution: yup.string().required("Execution is required"),
  outcome: yup.string().required("Outcome is required"),
  trades_id: yup.array().of(yup.number()).required("Trade IDs are required"),
});

