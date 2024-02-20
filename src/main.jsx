import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import ErrorPage from './pages/ErrorPage';
import Portfolio from "./pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
        {
            index: true,
            element: <Home /> 
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/resume",
            element: <Resume />
        },
        {
            path: "/portfolio",
            element: <Portfolio />
        },
        {
            path: "/contact",
            element: <Contact />
        }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  
