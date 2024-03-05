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
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import { useNavigate } from 'react-router-dom'
import Pagination from '@mui/material/Pagination'
import { create } from '@mui/material/styles/createTransitions'

const defaultTheme = createTheme()

function createData(payment, month, date, paymentmethod, paymentstatus) {
    return { payment, month, date, paymentmethod, paymentstatus }
}

const rows = [
    createData(5000, 'september', '25/02/2024', 'complete', 'UPI'),
    createData(6000, 'october', '26/02/2024', 'incomplete', 'Credit'),
    createData(4500, 'november', '27/02/2024', 'complete', 'Debit'),
    createData(3000, 'december', '28/02/2024', 'incomplete', 'UPI')
]

const Pg = () => {
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
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <CurrencyRupeeIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Payment History
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
                                <TableCell sx={{ textTransform: 'uppercase', fontWeight: '600' }}>Payment</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Payment month
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Payment date
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Payment method
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Payment status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.payment}
                                    </TableCell>
                                    <TableCell align="right">{row.month}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.paymentmethod}</TableCell>
                                    <TableCell align="right">{row.paymentstatus}</TableCell>
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

export default Pg
