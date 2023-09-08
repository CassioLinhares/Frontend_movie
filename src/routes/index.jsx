import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {
    const {user} = useAuth();
    return(
        <BrowserRouter>
            { user ? <AppRouter /> : <AuthRoutes /> }
        </BrowserRouter>
    );
}