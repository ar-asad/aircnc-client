import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddRoom from "../pages/Dashboard/AddRoom";
import MyListings from "../pages/Dashboard/MyListings";
import { getRoom } from "../api/rooms";
import MyBooknigs from "../pages/Dashboard/MyBookings";
import ManageBooking from "../pages/Dashboard/ManageBooking";
import MyWishList from "../pages/Dashboard/MyWishList";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/room/:id',
                element: (
                    <PrivateRoute>
                        <RoomDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) => getRoom(params.id),

            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard/add-room',
                element: <AddRoom />
            },
            {
                path: '/dashboard/my-listings',
                element: <MyListings />
            },
            {
                path: '/dashboard/my-bookings',
                element: <MyBooknigs />
            },
            {
                path: '/dashboard/manage-bookings',
                element: <ManageBooking />
            },
            {
                path: '/dashboard/my-wishList',
                element: <MyWishList />
            }

        ]
    }
]);

