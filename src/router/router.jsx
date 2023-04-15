import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

import Root from "../pages/Root";
import SinglePage from "../pages/SinglePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
                index: true
            },
            {
                path: '/products/:id',
                element: <SinglePage/>
            },
        ]
    },
    {

    }
]);

export default router;