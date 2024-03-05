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
import PreviewIcon from '@mui/icons-material/Preview'
import EditIcon from '@mui/icons-material/Edit'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Pagination from '@mui/material/Pagination'
import EditPgDetailsModal from '../../../../components/EditPgDetailsModal'

const defaultTheme = createTheme()

function createData(pgname, rent, securityamount, ownername, owneraddress, ownermobile, status, actions) {
    return { pgname, rent, securityamount, ownername, owneraddress, ownermobile, status, actions }
}

const rows = [
    createData(
        'Anjali PG',
        6000,
        2000,
        'Anjali Dogra',
        'bestech sec-66',
        798607366,
        <Button variant="contained" size="small">
            Active
        </Button>,
        <Box>
            <VisibilityIcon
                sx={{
                    backgroundColor: 'blue',
                    color: 'white',
                    marginRight: 1,
                    borderRadius: '2px',
                    cursor: 'pointer'
                    // fontSize: '20px'
                }}
            />
            <EditIcon
                sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
                onClick={() => alert('Edit clicked')}
            />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            {/* <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', borderRadius: '2px', cursor: 'pointer' }} /> */}
        </Box>
    ),
    createData(
        'Savi PG',
        4500,
        1000,
        'Savi Dhiman',
        'bestech sec-66',
        907636524,
        <Button variant="contained" size="small">
            Active
        </Button>,
        <Box>
            <VisibilityIcon
                sx={{ backgroundColor: 'blue', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            {/* <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', borderRadius: '2px', cursor: 'pointer' }} /> */}
        </Box>
    ),
    createData(
        'Gracy PG',
        5000,
        2000,
        'Gracy sikarwar',
        'bestech sec-66',
        985423456,
        <Button variant="contained" size="small">
            Active
        </Button>,
        <Box>
            <VisibilityIcon
                sx={{ backgroundColor: 'blue', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            {/* <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', borderRadius: '2px', cursor: 'pointer' }} /> */}
        </Box>
    ),
    createData(
        'Aman PG',
        3000,
        1000,
        'Amandeep kaur',
        'bestech sec-66',
        7254178345,
        <Button variant="contained" size="small">
            Active
        </Button>,
        <Box>
            <VisibilityIcon
                sx={{ backgroundColor: 'blue', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            {/* <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', borderRadius: '2px', cursor: 'pointer' }} /> */}
        </Box>
    )
]

const ViewPGs = () => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)

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
                            View PGs
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
                                <TableCell sx={{ textTransform: 'uppercase', fontWeight: '600' }}>Pg name</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Rent
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Security amount
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Owner name
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Owner address
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Owner mobile
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Status
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.pgname} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.pgname}
                                    </TableCell>
                                    <TableCell align="right">{row.rent}</TableCell>
                                    <TableCell align="right">{row.securityamount}</TableCell>
                                    <TableCell align="right">{row.ownername}</TableCell>
                                    <TableCell align="right">{row.owneraddress}</TableCell>
                                    <TableCell align="right">{row.ownermobile}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                    <TableCell align="right">{row.actions}</TableCell>
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

export default ViewPGs
