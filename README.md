# Spreadsheet Web Application

This project is a web-based spreadsheet application that mimics the core functionalities of Google Sheets, built using React, Next.js, and Material UI.

## 🔗 Live Demo : https://gsheets-nu.vercel.app/

## Features

### 1. Edit Cells

- Double click on any cell to start editing.  
  ![Double Click to Edit](https://github.com/sahilbaig/allmygifs/blob/main/cellEdit.gif)

### 2. Drag Cells

- Drag cells around.
- This is implemented using ContextAPI to track `startCell` location and `endCell` location.
  ![Drag Cells](https://github.com/sahilbaig/allmygifs/blob/main/drag.gif)

### 3. Select a Group of Cells

- Drag mouse around to select a group of cells.
- This is implemented using ContextAPI to track selected cells and MouseEvents to add or remove cells from the list of selected cells.  
  ![Select Cells](https://github.com/sahilbaig/allmygifs/blob/main/select.gif)

### 4. Get SUM, MAX, MIN, AVERAGE, COUNT

- Select a target cell.
- Select the group of cells for which you want the value.
- Type command in the functions box:

  - For sum type: `=sum`
  - For count type: `=count`
  - For max type: `=max`
  - For min type: `=min`
  - For average type: `=average`

  ![Functions](https://github.com/sahilbaig/allmygifs/blob/main/functions.gif)

### 5. Mathematical Functions Retain Their Value

- Cells update their value when cells which were initially used to create them change their values.
- This is implemented using ContextAPI to keep track of cell type.
- `useState` is used to maintain cells dependency.  
  ![Functions](https://github.com/sahilbaig/allmygifs/blob/main/retain.gif)

### 6. Even More Mathematical Functions

- Toolbar provides even more mathematical functions:

  - `Trim`: Remove any white-spaces from selected cells.
  - `Upper`: Converts the selected cell into Uppercase.
  - `Lower`: Converts selected cell value to Lowercase.
  - `Duplicate`: Remove duplicates from selected range of cells.

  ![Functions](https://github.com/sahilbaig/allmygifs/blob/main/dataQuality.gif)

## Tech Stack

- **Next.js**: Server-side rendering and static site generation.
- **React.js**: Component-based UI development.
- **Material UI**: Prebuilt UI components for styling.
- **Context API**: Global state management.

## Future Enhancements

- Data validation and formatting options.
- Save and load spreadsheet data.
- Add charts and data visualization features.
