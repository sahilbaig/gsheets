import { useSpreadsheet } from "../context/SpreadSheetContext";

const sum = (values) => values.reduce((acc, val) => acc + Number(val), 0);
const max = (values) => Math.max(...values.map(Number));
const min = (values) => Math.min(...values.map(Number));
const count = (values) => values.length;

const useOperations = () => {
  const { cellValues } = useSpreadsheet();

  const values = Object.values(cellValues).filter(
    (val) => !isNaN(val) && val !== ""
  );

  return {
    sum: sum(values),
    max: max(values),
    min: min(values),
    count: count(values),
  };
};

export default useOperations;
