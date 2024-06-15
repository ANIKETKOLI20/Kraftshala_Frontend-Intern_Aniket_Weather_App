Weather Application


Features
◦ Fetches and displays current weather information based on user input.
◦ Provides information such as location, temperature, date, and time.
◦ Includes a search functionality for fetching weather data for different locations.
◦ Responsive design for various devices (desktop, tablet, mobile).
◦ Dark mode and light mode toggle functionality.
◦ Displays additional weather details such as humidity, wind speed, and weather description.

Bonus Features
◦ Dark Mode: Implementation of a dark mode and light mode toggle functionality.
◦ Multiple Locations: Ability to display weather information for multiple locations at the same time.
◦ Additional Weather Information: Display additional weather details such as humidity, wind speed, and weather description.

Technologies Used
◦ HTML
◦ CSS
◦ JavaScript
◦ React
◦ Open Weather API

Installation and Running the Application
Prerequisites
◦ Node.js and npm installed on your machine.

Steps

1. Clone the repository:
    git clone <repository-link>
    cd weather-app

2. Install the dependencies: 
    npm install

3.  Open Weather API key:
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=$dc960d58c1d2da86c7fed960e58b0ce4&units=imperial
    

4. Start the development server:
    npm start




Approach and Technologies

◦ HTML & CSS: Used for structuring and styling the application.
◦ JavaScript (React): Used for building the user interface and managing state.
◦ Open Weather API: Integrated to fetch real-time weather data based on user input.
◦ Responsive Design: Ensured the app works well on various devices.
◦ Dark Mode: Implemented a toggle feature for switching between dark and light modes using CSS and React state management.

Known Issues and Limitations

◦ The application currently fetches weather data for one location at a time.
◦ Error handling for API responses and invalid inputs is basic and can be improved.
◦ Additional enhancements like animations and transitions for better user experience are not implemented.

Screenshots / Screen Recordings / Live Demo
◦ Screenshots and screen recordings are available in the Google Drive folder: Kraftshala_Frontend Intern_YourName
◦ Live demo (if available): Live Demo Link

Deployment
The application can be deployed on platforms like Vercel, Netlify, or any other preferred hosting service. Below is a basic guide for deploying on Vercel:

Install Vercel CLI:

    npm install -g vercel

Deploy the app: 
    vercel

Follow the prompts to complete the deployment.

License
This project is licensed under the MIT License.