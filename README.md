
# Weather Web Application

## Overview

This Weather Web Application allows users to view the current weather and air quality index (AQI) for any location worldwide. The application provides detailed information on hourly forecasts and 7-day forecasts. Further, it provides temperature, humidity, pressure, visibility, and sunrise/sunset times. Users can search for locations and view the weather data in an intuitive and user-friendly interface.

![image](https://github.com/Krish209/Weather-APP/assets/76595963/802b8bcc-c761-4545-a655-4d78724d4a79)

![image](https://github.com/Krish209/Weather-APP/assets/76595963/8884209a-5f1d-426f-b5ae-91d490fd290c)

![image](https://github.com/Krish209/Weather-APP/assets/76595963/819f501c-e961-428d-8da6-fa44a1a5bca7)

![image](https://github.com/Krish209/Weather-APP/assets/76595963/9d5c995a-1167-4a50-802a-239969afb867)



## Features

- **Current Weather**: Displays the current temperature, weather conditions, and other relevant details for the selected location.
- **Air Quality Index (AQI)**: Displays AQI data and pollutant levels for the selected location.
- **Hourly Forecast**: Provides a forecast for the next 24 hours with details on temperature, weather conditions, and wind speed.
- **5-Day Forecast**: Shows a 5-day weather forecast with daily temperature highs and conditions.
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
    git clone https://github.com/Krish209/weather-app.git
    ```

2.  **Open with VSCode**:

    ```bash
      code .
    ```

3. **Install Dependencies**:
    - Ensure you have a local server setup (e.g., using VSCode Live Server, XAMPP, etc.) to serve the application files.

4. **API Configuration**:
    - Obtain API keys from the weather service provider and reverse geocoding service.
    - Update the `api.js` file with your API keys:
        ```javascript
        const api_key = "YOUR_WEATHER_API_KEY";
        const geo_api_key = "YOUR_GEO_API_KEY";
        ```

5. **Run the Application**:
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
|   ├── route.js
├── favicon.svg
├── index.html
└── README.md
