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

const defaultTheme = createTheme()

function createData(expensecategory, name, month, amount, date, roomno, currentreading, previousreading) {
    return { expensecategory, name, month, amount, date, roomno, currentreading, previousreading }
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 159, 6.0, 24),
    createData('Eclair', 262, 16.0, 24, 6.0, 159, 6.0, 24),
    createData('Cupcake', 305, 3.7, 67, 4.3, 159, 6.0, 24),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 159, 6.0, 24),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 159, 6.0, 24),
    createData('Eclair', 262, 16.0, 24, 6.0, 159, 6.0, 24),
    createData('Cupcake', 305, 3.7, 67, 4.3, 159, 6.0, 24)
]

const ExpenseCategory = () => {
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
            <Container component="main" maxWidth="sm">
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
                            <BarChartIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Add Expense category
                        </Typography>
                    </Box>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <TextField
                                    autoComplete="given-name"
                                    name="expensecategory"
                                    // required
                                    fullWidth
                                    id="expensecategory"
                                    label="Expense Category"
                                    // autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Add Expense
                        </Button>
                        {/* <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={() => navigate('/login')}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ExpenseCategory
