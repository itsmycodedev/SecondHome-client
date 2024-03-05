import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
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

function createData(name, floorno, roomno, capacity, facility) {
    return { name, floorno, roomno, capacity, facility }
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 159),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 159),
    createData('Eclair', 262, 16.0, 24, 6.0, 159),
    createData('Cupcake', 305, 3.7, 67, 4.3, 159),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 159),
    createData('Pizza', 159, 6.0, 24, 4.0, 159)
]

const AddRoom = () => {
    const [pg, setPg] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            choosepg: data.get('choosepg'),
            choosefloor: data.get('choosefloor'),
            roomno: data.get('roomno'),
            roomcapacity: data.get('roomcapacity'),
            roomfacility: data.get('roomfacility')
        })
    }

    const handlePgName = (event) => {
        setPg(event.target.value)
        console.log('pg name: ' + pg)
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
                            <MeetingRoomIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Room
                        </Typography>
                    </Box>{' '}
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    fullWidth
                                    select
                                    label="Choose Pg"
                                    name="choosepg"
                                    value={pg}
                                    onChange={handlePgName}
                                >
                                    <MenuItem value="Gracy">Gracy Pg</MenuItem>
                                    <MenuItem value="Anjali">Anjali Pg</MenuItem>
                                    <MenuItem value="Savi">Savi Pg</MenuItem>
                                    <MenuItem value="Aman">Aman Pg</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    select
                                    fullWidth
                                    id="choosefloor"
                                    label="Choose Floor"
                                    name="choosefloor"
                                    autoComplete="pg-rent"
                                >
                                    <MenuItem value="0">0</MenuItem>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    // required
                                    fullWidth
                                    id="roomno"
                                    label="Room number"
                                    name="roomno"
                                    // autoComplete="pg-securityamount"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="roomcapacity"
                                    label="Room Capacity"
                                    select
                                    id="roomcapacity"
                                    autoComplete="roomcapacity"
                                >
                                    <MenuItem value="1">1 sharing</MenuItem>
                                    <MenuItem value="2">2 sharing</MenuItem>
                                    <MenuItem value="3">3 sharing</MenuItem>
                                    <MenuItem value="4">4 sharing</MenuItem>
                                    <MenuItem value="5">5 sharing</MenuItem>
                                    <MenuItem value="6">6 sharing</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="roomfacility"
                                    label="Room Faciliity"
                                    select
                                    id="roomfacility"
                                    autoComplete="roomfacility"
                                >
                                    <MenuItem value="1">Air Conditioner</MenuItem>
                                    <MenuItem value="2">Wifi</MenuItem>
                                    <MenuItem value="3">Cooler</MenuItem>
                                    <MenuItem value="4">Celing fan</MenuItem>
                                    <MenuItem value="5">Balcony</MenuItem>
                                    <MenuItem value="6">Safe box</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Add Room
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default AddRoom
