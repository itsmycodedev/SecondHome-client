import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'

const MyTable = ({ data }) => {
    const [showAllColumns, setShowAllColumns] = useState(false)

    const columnsToShow = showAllColumns ? data.columns : data.columns.slice(0, 4)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columnsToShow.map((column) => (
                            <TableCell key={column.id}>{column.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.rows.map((row, index) => (
                        <TableRow key={index}>
                            {columnsToShow.map((column) => (
                                <TableCell key={column.id}>{row[column.id]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {!showAllColumns && (
                <Button onClick={() => setShowAllColumns(true)} variant="contained" color="primary">
                    Show All
                </Button>
            )}
        </TableContainer>
    )
}

// Example usage:
const data = {
    columns: [
        { id: 'column1', label: 'Column 1' },
        { id: 'column2', label: 'Column 2' },
        { id: 'column3', label: 'Column 3' },
        { id: 'column4', label: 'Column 4' },
        { id: 'column5', label: 'Column 5' },
        { id: 'column6', label: 'Column 6' },
        { id: 'column7', label: 'Column 7' }
    ],
    rows: [
        {
            column1: 'Data 1-1',
            column2: 'Data 1-2',
            column3: 'Data 1-3',
            column4: 'Data 1-4',
            column5: 'Data 1-5',
            column6: 'Data 1-6',
            column7: 'Data 1-7'
        },
        {
            column1: 'Data 2-1',
            column2: 'Data 2-2',
            column3: 'Data 2-3',
            column4: 'Data 2-4',
            column5: 'Data 2-5',
            column6: 'Data 2-6',
            column7: 'Data 2-7'
        }
    ]
}

const App = () => {
    return (
        <div>
            <MyTable data={data} />
        </div>
    )
}

export default App
