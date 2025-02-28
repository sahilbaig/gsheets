# Spreadsheet Web Application

This project is a web-based spreadsheet application that mimics the core functionalities of Google Sheets, built using React, Next.js, and Material UI.

## Features

### 1. Spreadsheet Interface

- Google Sheets-like UI with toolbar and structured cells.
- Drag functionality for cell content, selections, and resizing columns/rows.
- Cell dependencies for formulas and functions.
- Basic cell formatting (bold, italics, font size, color).
- Add, delete, and resize rows and columns dynamically.

### 2. Context Management

- Uses `SpreadsheetContext` to manage global spreadsheet state.
- Manages:
  - `cellValues`: Stores cell data.
  - `selectedCells`: Tracks selected cells.
  - `isSelectionStarted`: Determines if selection is active.
  - `activeCell`: Keeps track of the currently active cell.
  - `cellType`: Defines cell-specific properties.
  - `dragState`: Stores the drag-and-drop status.

### 3. Data Management

- Allows input of numbers, text, and other data types.
- Updates cell values dynamically based on user input.
- Clears selected cells on mouse events.

### 4. UI Components

- **`SpreadSheet` Component:**
  - Renders a grid-based spreadsheet layout.
  - Implements column resizing and row resizing.
  - Uses `Cell` components to handle individual cells.
- **`TopBar` Component:**
  - Contains menu options and toolbar.
- **`PrimaryToolBar` Component:**
  - Placeholder for toolbar functions.
- **`DataToolBar` Component:**
  - Placeholder for data-related operations.
- **`ShowValuesButton` Component:**
  - Console logs the selected cell values.

### 5. State Handling

- Uses `useState` for local state.
- Uses React Context (`SpreadsheetProvider`) for global state.
- Handles selection, updates, and drag operations.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <repo_url>
   cd <project_folder>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

## Tech Stack

- **Next.js**: Server-side rendering and static site generation.
- **React.js**: Component-based UI development.
- **Material UI**: Prebuilt UI components for styling.
- **Context API**: Global state management.

## Future Enhancements

- Implement spreadsheet formulas (SUM, AVERAGE, MAX, MIN, COUNT).
- Data validation and formatting options.
- Save and load spreadsheet data.
- Add charts and data visualization features.
