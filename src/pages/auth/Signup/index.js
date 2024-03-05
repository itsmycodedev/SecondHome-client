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
import Stack from '@mui/material/Stack'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import loginimage from '../../../assests/images/login.gif'

// TODO remove, this demo shouldn't need to reset the theme.
const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is not valid').required('Email is required'),
    phonenumber: yup
        .string()
        .required('Phone number is required')
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Phone number is not valid!'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

let renderCount = 0
const defaultTheme = createTheme()

export default function Signup() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => console.log(data)

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const data = new FormData(event.currentTarget)
    //     console.log({
    //         name: data.get('name'),
    //         phone: data.get('phone'),
    //         email: data.get('email'),
    //         password: data.get('password'),
    //         confirmPassword: data.get('confirmpassword')
    //     })
    // }  sx={{ backgroundImage: `url(${signupimage})` }}

    return (
        <ThemeProvider theme={defaultTheme}>
            <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ margin: 10 }}>
                    <img src={loginimage} alt="login" />
                </Box>
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
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        // required
                                        {...register('name')}
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                    <Typography variant="body2" color="red">
                                        {errors.name?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register('phonenumber')}
                                        placeholder="Enter your email"
                                        id="phone"
                                        label="Phone Number"
                                        name="phonenumber"
                                    />
                                    <Typography variant="body2" color="red">
                                        {errors.phonenumber?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register('email')}
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                    />
                                    <Typography variant="body2" color="red">
                                        {errors.email?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register('password')}
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                    <Typography variant="body2" color="red">
                                        {errors.password?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register('confirmpassword')}
                                        label="Confirm Password"
                                        type="password"
                                        id="confirmpassword"
                                        name="confirmpassword"
                                        // autoComplete="confirm-password"
                                    />
                                    <Typography variant="body2" color="red">
                                        {errors.confirmpassword?.message}
                                    </Typography>
                                </Grid>
                                {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={() => navigate('/login')}>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* <DevTool control={control} /> */}
                    </Box>
                </Container>
            </Stack>
        </ThemeProvider>
    )
}
