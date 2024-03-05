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
import EditIcon from '@mui/icons-material/Edit'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Pagination from '@mui/material/Pagination'

const defaultTheme = createTheme()

function createData(
    name,
    address,
    occupation,
    mobile,
    roomno,
    email,
    paymentpermonth,
    actions,
    joiningdate,
    guardianname,
    guardianmobile,
    guardianrelation,
    securityamount,
    status,
    uploadadhaar,
    uploadphoto
) {
    return {
        name,
        address,
        occupation,
        mobile,
        roomno,
        email,
        paymentpermonth,
        actions,
        joiningdate,
        guardianname,
        guardianmobile,
        guardianrelation,
        securityamount,
        status,
        uploadadhaar,
        uploadphoto
    }
}

const rows = [
    createData(
        'Anjali',
        'sec-17, chandigarh',
        'Developer',
        2493752423,
        101,
        'anjali@codesoftic.com',
        6000,
        <Box>
            <VisibilityIcon
                sx={{ backgroundColor: 'blue', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', borderRadius: '2px', cursor: 'pointer' }} />
        </Box>
    ),
    createData(
        'Gracy',
        'sec-17, chandigarh',
        'Designer',
        2493752423,
        102,
        'gracy@codesoftic.com',
        5000,
        <Box>
            <VisibilityIcon
                sx={{ backgroundColor: 'blue', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', borderRadius: '2px', cursor: 'pointer' }} />
        </Box>
    ),
    createData(
        'Savi',
        'sec-17, chandigarh',
        'SEO',
        2493752423,
        201,
        'savi@codesoftic.com',
        4500,
        <Box>
            <VisibilityIcon
                sx={{ backgroundColor: 'blue', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', borderRadius: '2px', cursor: 'pointer' }} />
        </Box>
    ),
    createData(
        'Aman',
        'sec-17, chandigarh',
        'Web designer',
        2493752423,
        103,
        'aman@codesoftic.com',
        3000,
        <Box>
            <VisibilityIcon
                sx={{ backgroundColor: 'blue', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <EditIcon sx={{ backgroundColor: 'yellow', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }} />
            <DeleteIcon
                sx={{ backgroundColor: 'red', color: 'white', marginRight: 1, borderRadius: '2px', cursor: 'pointer' }}
            />
            <WhatsAppIcon sx={{ backgroundColor: 'green', color: 'white', borderRadius: '2px', cursor: 'pointer' }} />
        </Box>
    )
]

const ViewGuests = () => {
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
                            <PeopleIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            View Guests
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
                                <TableCell sx={{ textTransform: 'uppercase', fontWeight: '600' }}>Name</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Address
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Occupation
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Mobile
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Room no
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Email
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Payment/month
                                </TableCell>
                                <TableCell align="right" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.address}</TableCell>
                                    <TableCell align="right">{row.occupation}</TableCell>
                                    <TableCell align="right">{row.mobile}</TableCell>
                                    <TableCell align="right">{row.roomno}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.paymentpermonth}</TableCell>
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

export default ViewGuests
