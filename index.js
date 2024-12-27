// index.js
const axios = require('axios');

/**
 * Makes a GET request to the provided URL.
 * @param {string} url - The URL to send the request to.
 * @returns {Promise<object>} - The response data.
 */
async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
        throw error;
    }
}

module.exports = fetchData;
