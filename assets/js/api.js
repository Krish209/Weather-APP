/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright 2024 All rights reserved
 * @author Me
 */

'use strict';

const api_key = "0dae487bdc5bcb678d65b27f1d423e0d";

/**Fetch data from the server
 * @param {string} URL - API URL
 * @param {Function} callback - Callback function
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 401) {
                console.error("Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.");
            } else {
                callback(data);
            }
        })
        .catch(error => console.error('Error:', error));

}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },

    /**Fetch data from the server
     * @param {string} query - Search Query 
     * */

    

    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }
};