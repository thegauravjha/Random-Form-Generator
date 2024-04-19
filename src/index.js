import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import formStore from './redux/formStore';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import FormList from './Components/FormList';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Form from './Components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
    return (
        <Provider store={formStore}>
            <React.StrictMode>
                <div>
                    <Navbar />
                    <div className='main-container'>
                        <Outlet />
                    </div>
                </div>
            </React.StrictMode>
        </Provider>
    )
}

const indexRoute = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <FormList />
            },
            {
                path: "/form/:formName",
                element: <Form />
            },
        ]
    },
])

root.render(

);

root.render(<RouterProvider router={indexRoute} />)