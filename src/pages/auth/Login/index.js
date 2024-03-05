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
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { DevTool } from '@hookform/devtools'
import signupimage from '../../../assests/images/signup.gif'

// TODO remove, this demo shouldn't need to reset the theme.
const schema = yup.object({
    emailorphonenumber: yup.string().required('Email or Phone number is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
})

const defaultTheme = createTheme()

export default function Login() {
    const navigate = useNavigate()

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const data = new FormData(event.currentTarget)
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password')
    //     })
    // }
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

    return (
        <ThemeProvider theme={defaultTheme}>
            <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ margin: 10 }}>
                    <img src={signupimage} alt="signup" />
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
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                {...register('emailorphonenumber')}
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                // autoFocus
                            />
                            <Typography variant="body2" color="red">
                                {errors.emailorphonenumber?.message}
                            </Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                {...register('password')}
                                label="Password"
                                type="password"
                                id="password"
                            />
                            <Typography variant="body2" color="red">
                                {errors.password?.message}
                            </Typography>
                            {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Login
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={() => navigate('/signup')}>
                                        <Typography variant="body1">Don't have an account? Signup</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                </Container>
            </Stack>
        </ThemeProvider>
    )
}
