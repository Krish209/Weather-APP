
# Weather Web Application

## Overview

This Weather Web Application allows users to view the current weather and air quality index (AQI) for any location worldwide. The application provides detailed information on temperature, humidity, pressure, visibility, and sunrise/sunset times. Users can search for locations and view the weather data in an intuitive and user-friendly interface.

## Features

- **Current Weather**: Displays the current temperature, weather conditions, and other relevant details for the selected location.
- **Air Quality Index (AQI)**: Displays AQI data and pollutant levels for the selected location.
- **Sunrise & Sunset Times**: Shows the sunrise and sunset times for the current day.
- **Moonrise & Moonset Times**: Shows the moonrise and moonset times for the current day.
- **Search Functionality**: Allows users to search for any location worldwide and view its weather data.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling of the web pages.
- **JavaScript**: Client-side scripting and API interactions.
- **Weather API**: Fetches weather data from a weather service provider.
- **Reverse Geocoding API**: Converts geographic coordinates into a human-readable address.

## Setup and Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2.  **Open with VSCode**:

```bash
  code .
```

3.  **Open with live server**:
   
```bash
  npm run start
```

4. **Install Dependencies**:
    Ensure you have a local server setup (e.g., using VSCode Live Server, XAMPP, etc.) to serve the application files.

5. **API Configuration**:
    - Obtain API keys from the weather service provider and reverse geocoding service.
    - Update the `api.js` file with your API keys:
        ```javascript
        const api_key = "YOUR_WEATHER_API_KEY";
        const geo_api_key = "YOUR_GEO_API_KEY";
        ```

6. **Run the Application**:
    - Start your local server and navigate to the application URL (e.g., `http://localhost/weather-app`).

## Project Structure

```plaintext
weather-app/
├── assets/
│   ├── images/
│   ├── font/
├── css/
│   └── style.css
├── js/
│   ├── api.js
│   ├── app.js
│   ├── module.js
├── index.html
└── README.md