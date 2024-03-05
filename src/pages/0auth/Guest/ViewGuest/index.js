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
import Stack from '@mui/material/Stack'
import PeopleIcon from '@mui/icons-material/People'
import AddHomeIcon from '@mui/icons-material/AddHome'
import BarChartIcon from '@mui/icons-material/BarChart'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
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
import ProfilepicImage from '../../../../assests/images/profilepic.jpg'

const defaultTheme = createTheme()
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}))

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
]

const ViewGuest = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Typography
                    variant="h4"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
                >
                    Paying Guest Details
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <img src={ProfilepicImage} alt="profilepic" style={{ width: '150px' }} />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                {/* <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell> */}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
            <Stack direction="row" spacing={2} sx={{ paddingTop: '50px' }}>
                <TableContainer component={Paper}>
                    <Typography
                        variant="h4"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
                    >
                        Rents
                    </Typography>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Payment Date</TableCell>
                                <TableCell align="right">Remarks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper}>
                    <Typography
                        variant="h4"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
                    >
                        Electricity Bills
                    </Typography>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Payment Date</TableCell>
                                <TableCell align="right">Remarks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </ThemeProvider>
    )
}

export default ViewGuest
