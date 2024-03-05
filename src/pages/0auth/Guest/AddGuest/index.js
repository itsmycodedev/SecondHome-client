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
import PeopleIcon from '@mui/icons-material/People'
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

const AddGuest = () => {
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
                        // marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <PeopleIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Add Guest
                        </Typography>
                    </Box>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    // required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    // autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth id="address" label="Address" name="address" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    id="occupation"
                                    label="Occupation"
                                    name="occupation"
                                    autoComplete="occupation"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    id="mobile"
                                    label="Mobile"
                                    name="mobile"
                                    autoComplete="mobile"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    id="alternatemobile"
                                    label="Alternate mobile"
                                    name="alternatemobile"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="roomno"
                                    label="Room no"
                                    type="text"
                                    id="roomno"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="email"
                                    label="Email"
                                    id="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="joiningdate"
                                    label="Joining date"
                                    id="joiningdate"
                                    autoComplete="joiningdate"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="paymentpermonth"
                                    label="Payment per/month"
                                    id="paymentpermonth"
                                    autoComplete="paymentpermonth"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="guardianname"
                                    label="Guardian name"
                                    id="guardianname"
                                    autoComplete="guardianname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="guardianmobile"
                                    label="Guardian mobile"
                                    id="guardianmobile"
                                    // autoComplete="guardianmobile"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="guardianrelation"
                                    label="Guardian relation"
                                    id="guardianrelation"
                                    // autoComplete="guardianmobile"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="securitydeposit"
                                    label="Security deposit"
                                    id="securitydeposit"
                                    // autoComplete="guardianmobile"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="status"
                                    label="Status"
                                    id="status"
                                    // autoComplete="guardianmobile"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="uploadID"
                                    label="Upload ID"
                                    id="uploadID"
                                    // type="file"
                                    // autoComplete="guardianmobile"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    fullWidth
                                    name="uploadphoto"
                                    label="Upload photo"
                                    id="uploadphoto"
                                    // type="file"
                                    // autoComplete="guardianmobile"
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
                            Add Guest
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

export default AddGuest
