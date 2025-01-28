export function generateColumns(data) {
  if (!data || data.length === 0) return [];

  const firstItem = data[0];
  return Object.keys(firstItem).map((key) => ({
    field: key,
    header: key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    visible: true,
  }));
}
