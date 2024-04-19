# FormTheBuilder Application

## Description

The FormTheBuilder (Random-Form-Generator) Application is a web-based tool built using React.js that allows users to create custom forms with various types of form fields. It's designed to be highly customizable, supporting text inputs, dropdowns, checkboxes, radio buttons, and file upload fields. Users can add and remove form fields dynamically, specify field types, set options for dropdowns, and configure validation rules.

## Key Features

- **Dynamic Form Creation:** Users can add and remove form fields on the fly.
- **Customizable Field Types:** Each form field includes a label and a component tailored to the field type.
- **Supported Field Types:** Text input, text area, dropdown, checkbox, radio button, and file upload.
- **Dropdown Options:** For dropdown fields, users can define a list of options.
- **Form Submission:** The application provides form submission and validation, displaying error messages for invalid fields.
- **Form Data in JSON:** Users can see the form configurations as JSON data in console.

## Additional Features

- **Validation Rules:** Users can set validation rules for form fields, including required fields, minimum/maximum length, and specific formats (e.g., email, phone number).
- **File Upload Fields:** Support for file upload fields, including validation for file type.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- React.js
- Redux
- React Routing

## Usage

Follow these steps to use the Dynamic Form Generator Application:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/thegauravjha/Random-Form-Generator.git
   cd Random-Form-Generator
   ```

2. **Install the Dependencies:**

   ```bash
    npm install
   ```

3. **Start the Application:**

   ```bash
   npm start
   ```

4. **Open the Application in a Browser:**

   ```bash
    Localhost: http://localhost:5173
    Deployed Version: https://formthebuilder.vercel.app/
   ```

## Create a Form:

- Click the "Create New Form" button to create a new form.
- Select a field type from the dropdown menu.
- Enter a label for the field.
- Click the "Add Field" button to add the new field to the form.
- Repeat these steps to add more fields.
- Click the "Submit" button to Create the form.
- On the Home page, you'll find a new from with names as form title.
- Click on Form name, it'll open your form
- Open Console.log, and start filling the form
- Click on "Submit" and you'll see the JSON data in the console

## Overall Goal:

The project aims to provide users with a user-friendly interface for creating and managing custom forms dynamically, catering to various data collection needs in a seamless and efficient manner.
