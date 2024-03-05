import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ApartmentIcon from '@mui/icons-material/Apartment'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import PaidIcon from '@mui/icons-material/Paid'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useNavigate } from 'react-router-dom'

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="PG" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Room" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Guests" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PaidIcon />
            </ListItemIcon>
            <ListItemText primary="Payments" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Expense" />
        </ListItemButton>
    </React.Fragment>
)

export const secondaryListItems = (
    <React.Fragment>
        {/* <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader> */}
        {/* <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Expense" />
        </ListItemButton> */}
        <ListItemButton>
            <ListItemIcon>
                <SettingsApplicationsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
    </React.Fragment>
)
