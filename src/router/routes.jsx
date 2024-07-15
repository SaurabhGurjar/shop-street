import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../components/ErrorPage';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    }
]

const router = createBrowserRouter(routes);
export default router;