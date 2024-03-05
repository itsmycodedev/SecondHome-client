import React, { useState } from 'react'
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
import MenuItem from '@mui/material/MenuItem'
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

const AddExpense = () => {
    const [expenseCategory, setExpenseCategory] = useState('')
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

    const handlePExpenseCategory = (event) => {
        console.log('expense category', expenseCategory)
        setExpenseCategory(event.target.value)
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
                            Expense
                        </Typography>
                    </Box>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="expensecategory"
                                    select
                                    fullWidth
                                    id="expensecategory"
                                    label="Expense Category"
                                    value={expenseCategory}
                                    onChange={handlePExpenseCategory}
                                    // autoFocus
                                >
                                    <MenuItem value="electricity">Electricity Bill</MenuItem>
                                    <MenuItem value="water">Water Bill</MenuItem>
                                    <MenuItem value="TV">TV Bill</MenuItem>
                                    <MenuItem value="Wifi">Wifi Bill</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="name" label="Name" name="name" autoComplete="name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    id="month"
                                    label="Month"
                                    name="month"
                                    autoComplete="month"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="amount"
                                    label="Amount"
                                    name="amount"
                                    autoComplete="amount"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="date" label="Date" name="date" autoComplete="date" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="roomno"
                                    label="Room no"
                                    type="text"
                                    id="roomno"
                                    autoComplete="roomno"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="currentreading"
                                    label="Current Reading"
                                    id="currentreading"
                                    autoComplete="currentreading"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="previousreading"
                                    label="Previous Reading"
                                    id="previousreading"
                                    autoComplete="previousreading"
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="ownermobile"
                                    label="Owner mobile"
                                    type="text"
                                    id="ownermobile"
                                    autoComplete="owner-mobile"
                                />
                            </Grid> */}
                            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
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

export default AddExpense
