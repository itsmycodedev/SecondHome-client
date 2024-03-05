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
import EditIcon from '@mui/icons-material/Edit'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import Pagination from '@mui/material/Pagination'

const defaultTheme = createTheme()

function createData(pgname, floor, roomno, roomcapacity, roomfacility, status, actions) {
    return { pgname, floor, roomno, roomcapacity, roomfacility, status, actions }
}

const rows = [
    createData(
        'Anjali PG',
        1,
        101,
        4,
        'ac, cooler, wifi',
        <Button variant="contained" size="small">
            Active
        </Button>,
        <Box>
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
        </Box>
    ),
    createData(
        'Anjali PG',
        2,
        201,
        2,
        'ac, cooler, wifi',
        <Button variant="contained" size="small">
            Active
        </Button>,
        <Box>
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
        </Box>
    ),
    createData(
        'Anjali PG',
        2,
        202,
        3,
        'ac, cooler, wifi',
        <Button variant="contained" size="small">
            Active
        </Button>,
        <Box>
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
        </Box>
    ),
    createData(
        'Anjali PG',
        1,
        102,
        4,
        'ac, cooler, wifi',
        <Button variant="contained" size="small">
            Active
        </Button>,
        <Box>
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
        </Box>
    )
]

const ViewRooms = () => {
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
                            View Rooms
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
                                <TableCell sx={{ textTransform: 'uppercase', fontWeight: '600' }}>PG name</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Floor
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    room no
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    room capacity
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    room facility
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
                                    <TableCell align="right">{row.floor}</TableCell>
                                    <TableCell align="right">{row.roomno}</TableCell>
                                    <TableCell align="right">{row.roomcapacity}</TableCell>
                                    <TableCell align="right">{row.roomfacility}</TableCell>
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

export default ViewRooms
