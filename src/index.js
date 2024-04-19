import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import formStore from './redux/formStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={formStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
