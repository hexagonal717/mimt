import { useSelector } from 'react-redux';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import ProtectedRoutes from './routes/ProtectedRoutes.jsx';
import GuestRoutes from "@/routes/GuestRoutes.jsx";
import ProtectedRedirectedRoutes from "@/routes/ProtectedRedirectedRoutes.jsx";
import ProtectedUserRoutes from "@/routes/ProtectedUserRoutes.jsx";

function App() {
    const userToken = useSelector(
        (state) => state.userAuthSlice.accessToken?.status,
    );

    const pageRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                {!userToken && GuestRoutes()}

                {/* Protected Routes */}
                <Route element={<ProtectedRoutes />}>
                    {/* Protected Redirected Routes */}
                    {ProtectedRedirectedRoutes()}

                    {/* Protected Customer Routes */}
                    {userToken && ProtectedUserRoutes()}

                </Route>
            </Route>,
        ),
    );

    return (

            <RouterProvider router={pageRouter} />

    );
}

export default App;
