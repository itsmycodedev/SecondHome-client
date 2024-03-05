import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Outlet, useNavigate } from 'react-router-dom'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ApartmentIcon from '@mui/icons-material/Apartment'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import AddHomeIcon from '@mui/icons-material/AddHome'
import PreviewIcon from '@mui/icons-material/Preview'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleIcon from '@mui/icons-material/People'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Collapse from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import BarChartIcon from '@mui/icons-material/BarChart'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ReceiptIcon from '@mui/icons-material/Receipt'

const drawerWidth = 240

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
})

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}))

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}))

export default function MiniDrawer() {
    const navigate = useNavigate()
    const theme = useTheme()
    const [open, setOpen] = useState(true)
    // const [isCollapse, setIsCollapse] = useState(false)

    const [collapseStates, setCollapseStates] = useState({
        pg: false,
        room: false,
        guests: false,
        payments: false,
        expense: false
    })

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    // const handleCollapse = () => {
    //     setIsCollapse(!isCollapse)
    // }

    const handleCollapse = (section) => {
        setCollapseStates((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }))
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px' // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' })
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Second Home
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {/* <List>
                    {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<DashboardIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleCollapse('pg')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<ApartmentIcon />}
                            </ListItemIcon>
                            <ListItemText primary="PG" sx={{ opacity: open ? 1 : 0 }} />
                            {collapseStates.pg ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={collapseStates.pg} timeout="auto" unmountOnExit>
                        {['Add PG', 'View PG'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5
                                    }}
                                    onClick={() => {
                                        if (text === 'Add PG') {
                                            navigate('/addpg')
                                        } else if (text === 'View PG') {
                                            navigate('/viewpgs')
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {index % 2 === 0 ? <AddHomeIcon /> : <PreviewIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Collapse>
                </List>

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleCollapse('room')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<MeetingRoomIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Room" sx={{ opacity: open ? 1 : 0 }} />
                            {collapseStates.room ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={collapseStates.room} timeout="auto" unmountOnExit>
                        {['Add Room', 'View Rooms'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5
                                    }}
                                    onClick={() => {
                                        if (text === 'Add Room') {
                                            navigate('/addroom')
                                        } else if (text === 'View Rooms') {
                                            navigate('/viewrooms')
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {index % 2 === 0 ? <InboxIcon /> : <MeetingRoomIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Collapse>
                </List>

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleCollapse('guests')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<PeopleIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Guests" sx={{ opacity: open ? 1 : 0 }} />
                            {collapseStates.guests ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={collapseStates.guests} timeout="auto" unmountOnExit>
                        {['Add Guest', 'View Guests'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5
                                    }}
                                    onClick={() => {
                                        if (text === 'Add Guest') {
                                            navigate('/addguest')
                                        } else if (text === 'View Guests') {
                                            navigate('/viewguests')
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {index % 2 === 0 ? <InboxIcon /> : <PeopleIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Collapse>
                </List>

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleCollapse('payments')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<CurrencyRupeeIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Payments" sx={{ opacity: open ? 1 : 0 }} />
                            {collapseStates.payments ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={collapseStates.payments} timeout="auto" unmountOnExit>
                        {['Add Payment', 'Payment history'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5
                                    }}
                                    onClick={() => {
                                        if (text === 'Add Payment') {
                                            navigate('/addpayment')
                                        } else if (text === 'Payment history') {
                                            navigate('/paymenthistory')
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {index % 2 === 0 ? <InboxIcon /> : <CurrencyRupeeIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Collapse>
                </List>

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleCollapse('expense')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<BarChartIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Expense" sx={{ opacity: open ? 1 : 0 }} />
                            {collapseStates.expense ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={collapseStates.expense} timeout="auto" unmountOnExit>
                        {['Expense category', 'Add Expense', 'Expense details'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5
                                    }}
                                    onClick={() => {
                                        if (text === 'Expense category') {
                                            navigate('/expensecategory')
                                        } else if (text === 'Add Expense') {
                                            navigate('/addexpense')
                                        } else {
                                            navigate('/expensedetails')
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {index % 2 === 0 ? <InboxIcon /> : <BarChartIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Collapse>
                </List>

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/bills')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<ReceiptIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Bills" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider />

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<SettingsApplicationsIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                {<ExitToAppIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {/* <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at
                    ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
                    convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
                    sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
                    quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
                    commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue
                    eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography> */}
                <Box>{<Outlet />}</Box>
            </Box>
        </Box>
    )
}
