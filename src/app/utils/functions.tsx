import { useSpreadsheet } from "../context/SpreadSheetContext";

export const useSum = () => {
  const { cellValues, selectedCells } = useSpreadsheet();
  return selectedCells
    .map((cell: number) => Number(cellValues[cell]))
    .filter((val) => !isNaN(val))
    .reduce((acc, val) => acc + val, 0);
};

export const useMin = () => {
  const { cellValues, selectedCells } = useSpreadsheet();

  if (!selectedCells.length) return null;

  let minValue = Infinity;
  for (const cell of selectedCells) {
    const value = Number(cellValues[cell]);
    if (!isNaN(value)) {
      minValue = Math.min(minValue, value);
    }
  }

  return minValue === Infinity ? null : minValue;
};

export const useMax = () => {
  const { cellValues, selectedCells } = useSpreadsheet();
  const values = selectedCells
    .map((cell: number) => Number(cellValues[cell]))
    .filter((val) => !isNaN(val));

  return values.length ? Math.max(...values) : null;
};

export const useCount = () => {
  const { selectedCells } = useSpreadsheet();
  return selectedCells.length;
};
export const useAverage = () => {
  const { cellValues, selectedCells } = useSpreadsheet();

  const values = selectedCells
    .map((cell) => Number(cellValues[cell]))
    .filter((val) => !isNaN(val)); // Only count valid numbers

  return values.length
    ? values.reduce((acc, val) => acc + val, 0) / values.length
    : null;
};
