import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
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
import { useNavigate } from 'react-router-dom'
import { create } from '@mui/material/styles/createTransitions'

const defaultTheme = createTheme()

function createData(name, rent, security, oname, oaddress, omobile) {
    return { name, rent, security, oname, oaddress, omobile }
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 159),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 159),
    createData('Eclair', 262, 16.0, 24, 6.0, 159),
    createData('Cupcake', 305, 3.7, 67, 4.3, 159),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 159),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 159)
]

const AddPG = () => {
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
                        // marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <AddHomeIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            PG
                        </Typography>
                    </Box>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="rent"
                                    label="Rent"
                                    name="rent"
                                    autoComplete="pg-rent"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="securityamount"
                                    label="Security Amount"
                                    name="securityamount"
                                    autoComplete="pg-securityamount"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="ownername"
                                    label="Owner name"
                                    type="text"
                                    id="ownername"
                                    autoComplete="ownername"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    rows={2}
                                    required
                                    fullWidth
                                    name="owneraddress"
                                    label="Owner address"
                                    id="owneraddress"
                                    autoComplete="owner-address"
                                    multiline
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="ownermobile"
                                    label="Owner mobile"
                                    type="text"
                                    id="ownermobile"
                                    autoComplete="owner-mobile"
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Add Pg
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default AddPG
