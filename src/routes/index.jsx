import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    return(
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}