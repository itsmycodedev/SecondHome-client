import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import PaidIcon from '@mui/icons-material/Paid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import AddHomeIcon from '@mui/icons-material/AddHome'
import BarChartIcon from '@mui/icons-material/BarChart'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { create } from '@mui/material/styles/createTransitions'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const defaultTheme = createTheme()

function createData(expensecategory, name, month, amount, date, roomno, currentreading, previousreading) {
    return { expensecategory, name, month, amount, date, roomno, currentreading, previousreading }
}

const rows = [
    createData('Electricity Bill', 159, 'september', 5000, '27/02/2024', 101, 6.0, 5),
    createData('Water Bill', 237, 'october', 6000, '28/02/2024', 102, 6.0, 4),
    createData('TV Bill', 262, 'november', 4500, '28/02/2024', 201, 5.0, 7),
    createData('Wifi Bill', 305, 'december', 3000, '29/02/2024', 205, 7.0, 6)
]

const ExpenseDetails = () => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            name: data.get('name'),
            rent: data.get('rent'),
            securityamount: data.get('securityamount'),
            ownername: data.get('ownername'),
            owneraddress: data.get('owneraddress')
        })
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <BarChartIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Expense Details
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Box
                component="div"
                maxWidth="lg"
                sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, margin: '2rem auto' }}
            >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Expense category
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Name
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Month
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Amount
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Date
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Room no
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Current reading
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Previous reading
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.expensecategory}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.month}</TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.roomno}</TableCell>
                                    <TableCell align="right">{row.currentreading}</TableCell>
                                    <TableCell align="right">{row.previousreading}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" justifyContent="flex-end">
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default ExpenseDetails
