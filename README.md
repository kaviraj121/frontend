
# Patient Management System - Frontend

This is the frontend application for the Patient Management System, built using React and Tailwind CSS. It allows users to manage patient records and prior treatment authorizations.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
   ```bash
     git clone https://github.com/yourusername/patient-management-frontend.git
     cd patient-management-frontend

2. **Install dependencies**:

    ```bash
        npm install

3. **Set up environment variables**: **Create a .env file in the root of the project and add the following variables**:
   ```bash
       REACT_APP_API_URL=http://localhost:5000/api

## Running the Application
To start the development server, run the following command:

    

       npm start
Open your browser and navigate to http://localhost:3000 to view the application.

## Features
+ View a list of patients.
+ Add prior treatment authorizations for patients.
+ View the status of authorizations submitted for each patient.
## API Endpoints
The frontend interacts with the following backend API endpoints:

+ GET /api/patients
   - Fetches all patients.
+ GET /api/authorizations
    - Fetches authorizations for a specific patient by patientId.
    - Example: GET /api/authorizations?patientId=PATIENT_ID
+ POST /api/authorizations

    - Submits a new authorization request.
    - Payload:

          {
            "patientId": "PATIENT_ID",
             "treatment": "TREATMENT_DESCRIPTION",
              "doctorNotes": "DOCTOR_NOTES"
            }
## Technologies Used
+ React
+ Tailwind CSS
+ Axios (for API calls)
+ React Router (for navigation)
## Contributing
   Contributions are welcome! Please feel free to submit a pull request or create an issue if you find any bugs or have 
   suggestions for improvements.