import { createBrowserRouter } from "react-router-dom";
import { GuestSkin } from "../Skins/guestSkin";
import { LoginPage } from "../Pages/loginPage";
import { GuardSkin } from "../Skins/guardSkin";
import { DashboardPage } from "../Pages/dashboardPage";
import { KomputerPage } from "../Pages/komputerPage";
import { PaketPage } from "../Pages/paketPage";
import { MemberPage } from "../Pages/memberPage";
import { DiskonPage } from "../Pages/diskonPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <GuestSkin />,
        children: [
            {
                path: '/',
                element: <LoginPage />
            }
        ]
    },
    {
        path: '/',
        element: <GuardSkin />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage />
            },
            {
                path: '/master-komputer',
                element: <KomputerPage />
            },
            {
                path: '/master-paket',
                element: <PaketPage />
            },
            {
                path: '/master-member',
                element: <MemberPage />
            },
            {
                path: '/master-diskon',
                element: <DiskonPage />
            },
        ]
    }
]);

export default routes;