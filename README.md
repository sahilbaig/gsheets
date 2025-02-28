# Spreadsheet Web Application

This project is a web-based spreadsheet application that mimics the core functionalities of Google Sheets, built using React, Next.js, and Material UI.

## Features

### 1. Edit Cells

- Double click on any cell to start editing.
  ![Double Click to Edit](https://github.com/sahilbaig/allmygifs/blob/main/cellEdit.gif)

### 2. Drag Cells

- Drag cells around.
  ![Double Click to Edit](https://github.com/sahilbaig/allmygifs/blob/main/cellEdit.gif)

### 3. Select a group of cells

- Drag mouse around to select a group of cells.
- This is implemented using ContextAPI to track selected cells and MouseEvents to add or remove cells to list of Selected cells
  ![Double Click to Edit](https://github.com/sahilbaig/allmygifs/blob/main/cellEdit.gif)

### 4. Get SUM , MAX , MIN , AVERAGE , COUNT

- Select a target cell.
- Select the group of cells for which you want the value.
- Type command in functions box. - for sum type : =sum - for count type : =count - for max type : =max - for min type : =min - for average type : =average

  ![Double Click to Edit](https://github.com/sahilbaig/allmygifs/blob/main/cellEdit.gif)

### 4. Mathematical functions retain their value

## Tech Stack

- **Next.js**: Server-side rendering and static site generation.
- **React.js**: Component-based UI development.
- **Material UI**: Prebuilt UI components for styling.
- **Context API**: Global state management.

## Future Enhancements

- Data validation and formatting options.
- Save and load spreadsheet data.
- Add charts and data visualization features.
