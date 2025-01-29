export function sortArray(array, column) {
  if (array.length === 0) return array;

  if (!column) return array;

  return array.sort((a, b) => {
    const param = column.field;

    if (a[param] === b[param]) return 0;

    if (typeof a[param] === "number") {
      return a[param] - b[param];
    }

    if (typeof a[param] === "string") {
      return a[param].localeCompare(b[param]);
    }

    if (typeof a[param] === "boolean") {
      return a[param] === b[param] ? 0 : a[param] ? -1 : 1;
    }

    if (a[param] instanceof Date) {
      return a[param] - b[param];
    }

    return 0;
  });
}
