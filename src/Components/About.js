import React from 'react'

const About = () => {
    return (
        <div className='about-container'>
            <h3 className='about-heading'>Introduction:</h3>
            <p>This project aims to create a dynamic form builder application using React and Redux, allowing users to create custom forms with various input fields.</p>

            <h3 className='about-heading'>Features Created:</h3>
            <ul className='about-ul'>
                <li><strong>Form Builder Interface:</strong> Users can create custom forms by selecting different field types such as text input, dropdowns, checkboxes, radio buttons, and file uploads.</li>
                <li><strong>Dynamic Form Rendering:</strong> The application dynamically renders forms based on the user-defined structure, allowing for a flexible form-building experience.</li>
                <li><strong>Form Submission:</strong> Users can submit the created forms, and the application captures and displays the form data for further processing.</li>
                <li><strong>Form Deletion:</strong> Implemented functionality to delete forms from the list using a delete button, which updates the Redux store accordingly.</li>
                <li><strong>Client-side Routing:</strong> Utilized React Router for client-side routing, allowing seamless navigation between different pages and forms within the application.</li>
                <li><strong>Redux Store Management:</strong> Utilized Redux for state management, storing form data and handling form creation, deletion, and submission actions.</li>
            </ul>

            <h3 className='about-heading'>Technologies Used:</h3>
            <ul className='about-ul'>
                <li><strong>React:</strong> For building the user interface components and managing the application's frontend logic.</li>
                <li><strong>Redux:</strong> For managing the application's global state and handling form-related actions and data storage.</li>
                <li><strong>Ant Design:</strong> Used for UI components such as modals, forms, buttons, and icons, providing a clean and responsive design.</li>
                <li><strong>React Router:</strong> Implemented for client-side routing, allowing navigation between different pages and forms within the application.</li>
                <li><strong>Redux Toolkit:</strong> Used to simplify Redux setup and streamline the development process with its built-in utilities and conventions.</li>
            </ul>

            <h3 className='about-heading'>Overall Goal:</h3>
            <p>The project aims to provide users with a user-friendly interface for creating and managing custom forms dynamically, catering to various data collection needs in a seamless and efficient manner.</p>
        </div>
    )
}

export default About