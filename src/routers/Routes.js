import * as React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/0auth/Dashboard'
import AddPG from '../pages/0auth/Pg/AddPG'
import Drawer from '../pages/0auth/Drawer'
import ViewPGs from '../pages/0auth/Pg/ViewPGs'
import AddRoom from '../pages/0auth/Room/AddRoom'
import ViewRooms from '../pages/0auth/Room/ViewRooms'
import AddGuest from '../pages/0auth/Guest/AddGuest'
import ViewGuests from '../pages/0auth/Guest/ViewGuests'
import AddPayment from '../pages/0auth/Payments/AddPayment'
import PaymentHistory from '../pages/0auth/Payments/PaymentHistory'
import AddExpense from '../pages/0auth/Expense/AddExpense'
import ExpenseCategory from '../pages/0auth/Expense/ExpenseCategory'
import ExpenseDetails from '../pages/0auth/Expense/ExpenseDetails'
import EditPgDetailsModal from '../components/EditPgDetailsModal'
import EditRoomDetailsModal from '../components/EditRoomDetailsModal'
import EditGuestDetailsModal from '../components/EditGuestDetailsModal'
import Demo from '../components/Demo'
import ViewGuest from '../pages/0auth/Guest/ViewGuest'
import Bills from '../pages/0auth/Bills'

const router = createBrowserRouter(
    createRoutesFromElements([
        <>
            {/* <Route path="/" element={<div>home</div>} /> */}
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="demo" element={<Demo />} />

            <Route path="/" element={<Drawer />}>
                <Route index element={<Dashboard />} />
                <Route path="addpg" element={<AddPG />} />
                <Route path="viewpgs" element={<ViewPGs />} />
                <Route path="editpg/:id" element={<EditPgDetailsModal />} />
                <Route path="addroom" element={<AddRoom />} />
                <Route path="viewrooms" element={<ViewRooms />} />
                <Route path="/editroom/:id" element={<EditRoomDetailsModal />} />
                <Route path="addguest" element={<AddGuest />} />
                <Route path="viewguests" element={<ViewGuests />} />
                <Route path="/viewguest/:id" element={<ViewGuest />} />
                <Route path="editguest/:id" element={<EditGuestDetailsModal />} />
                <Route path="addpayment" element={<AddPayment />} />
                <Route path="paymenthistory" element={<PaymentHistory />} />
                <Route path="expensecategory" element={<ExpenseCategory />} />
                <Route path="addexpense" element={<AddExpense />} />
                <Route path="expensedetails" element={<ExpenseDetails />} />
                <Route path="/bills" element={<Bills />} />
            </Route>
            <Route path="*" element={<div>404 not found</div>} />
        </>
    ])
)

export default router
