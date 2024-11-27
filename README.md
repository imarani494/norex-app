Weather App 🌤️
A simple, responsive weather application that allows users to view the current weather and forecast for their selected city. Users can customize the number of forecast days (up to 5) and toggle between light and dark themes.

Features
🌎 City Selection: Choose from a predefined list of cities.
📅 Custom Forecast: View weather forecasts for up to 5 days.
💡 Theme Toggle: Switch between light and dark modes.
📍 Local Storage: Persist city and theme preferences across sessions.
🔗 Dynamic Updates: Data fetched live from the OpenWeather API.
Installation and Setup
Prerequisites
Ensure you have the following installed:

Node.js (v14 or later)
npm (v6 or later)
Steps
Clone the repository:
bash
Copy code

Navigate to the project folder:
bash
Copy code
cd weather-app
Install dependencies:
bash
Copy code
npm install
Create a .env file in the project root and add your OpenWeather API key:
env
Copy code

Start the development server:
bash
Copy code
npm start
Open your browser and navigate to:
arduino
Copy code

Usage

Select a city from the dropdown menu.
Adjust the number of forecast days using the input field (1–5 days).
View the weather details and forecast.
Toggle between light and dark themes using the button on the top right.
Project Structure
bash
Copy code




weather-app/
│
├── public/                # Static files
│   └── index.html         # Main HTML file
│
├── src/
│   ├── components/        # Reusable components
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherDropdown.jsx
│   │   └── WeatherForecast.jsx
│   ├── App.jsx            # Main application file
│   ├── index.jsx          # Entry point for React
│   └── styles.css         # Optional custom styles
│
├── .env                   # Environment variables
├── .gitignore             # Files and folders to ignore in Git
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation






Technologies Used
React: For building the user interface.
Axios: For making API requests.
Bootstrap: For styling and responsiveness.
OpenWeather API: For live weather data.
