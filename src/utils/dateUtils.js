export function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

export function getCurrentDay() {
  const now = new Date();
  return now.toLocaleDateString();
}

export function getWeekday() {
  const now = new Date();
  return now.toLocaleString("default", { weekday: "long" });
}

export function getWeekNumber() {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), 0, 1);
  const diff = now - startDate;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return Math.ceil(dayOfYear / 7);
}

export function getCurrentMonth() {
  const now = new Date();
  return now.toLocaleString("default", { month: "long" });
}

export function getMonthNumber() {
  const now = new Date();
  return now.getMonth() + 1;
}

export function getCurrentQuarter() {
  const now = new Date();
  const month = now.getMonth() + 1;
  return Math.ceil(month / 3);
}

export function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}
