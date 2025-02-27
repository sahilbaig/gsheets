"use client"; // Mark as a Client Component
import { createContext, useContext, useState } from "react";

// Create the context
const SpreadsheetContext = createContext();

// Create a provider component
export const SpreadsheetProvider = ({ children }) => {
    // State to manage cell values
    const [cellValues, setCellValues] = useState({});

    // State to manage selected cells
    const [selectedCells, setSelectedCells] = useState([]);

    // Function to update a cell's value
    const updateCellValue = (cellId, value) => {
        setCellValues((prev) => ({
            ...prev,
            [cellId]: value,
        }));
    };

    // Function to select/deselect a cell
    const toggleCellSelection = (cellId) => {
        setSelectedCells((prev) => {
            if (prev.includes(cellId)) {
                return prev.filter((id) => id !== cellId); // Deselect
            } else {
                return [...prev, cellId]; // Select
            }
        });
    };

    // Function to clear all selected cells
    const clearSelectedCells = () => {
        setSelectedCells([]);
    };

    // Value to be provided by the context
    const value = {
        cellValues,
        selectedCells,
        updateCellValue,
        toggleCellSelection,
        clearSelectedCells,
    };

    return (
        <SpreadsheetContext.Provider value={value}>
            {children}
        </SpreadsheetContext.Provider>
    );
};

// Custom hook to use the context
export const useSpreadsheet = () => useContext(SpreadsheetContext);