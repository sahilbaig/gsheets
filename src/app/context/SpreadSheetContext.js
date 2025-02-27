"use client"; // Mark as a Client Component
import { createContext, useContext, useState } from "react";

// Create the context
const SpreadsheetContext = createContext();

// Create a provider component
export const SpreadsheetProvider = ({ children }) => {
    // State to manage cell values
    const [cellValues, setCellValues] = useState({});
    const [isSelectionStarted, setIsSelectionStarted] = useState(false);
    const [dragState, setDragState] = useState(null)

    // State to manage selected cells
    const [selectedCells, setSelectedCells] = useState([]);

    // Function to update a cell's value
    const updateCellValue = (cellId, value) => {
        setCellValues((prev) => ({
            ...prev,
            [cellId]: value,
        }));
    };

    const showCellValue = () => {
        console.log(cellValues)
    }
    const showSelectionState = () => {
        return isSelectionStarted;
    }

    const isCellSelected = (id) => selectedCells.includes(id);

    const addCellSelection = (cellId) => {
        setSelectedCells((prev) => (prev.includes(cellId) ? prev : [...prev, cellId]));
    };

    const clearSelectedCells = () => {
        setSelectedCells([]);
    };
    const getMinCellValue = () => {
        if (selectedCells.length) {
            let minValue = Infinity;

            for (const cell of selectedCells) {
                const value = Number(cellValues[cell]);

                if (!isNaN(value)) {
                    console.log(`Cell ${cell}:`, value); // Print the value
                    minValue = Math.min(minValue, value);
                }
            }

            return minValue === Infinity ? null : minValue;
        }
        return null;

    };

    // Value to be provided by the context
    const value = {
        cellValues,
        selectedCells,
        updateCellValue,
        addCellSelection,
        clearSelectedCells,
        showCellValue,
        showSelectionState,
        setIsSelectionStarted,
        isCellSelected,
        setDragState,
        dragState,
        getMinCellValue
    };

    return (
        <SpreadsheetContext.Provider value={value}>
            {children}
        </SpreadsheetContext.Provider>
    );
};

export const useSpreadsheet = () => useContext(SpreadsheetContext);