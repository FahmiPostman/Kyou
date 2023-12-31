/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des"
];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. format: "Sunday 19, Jan"
 */
export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH:MM AM/PM"
 */
export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH AM/PM"
 */
export const getUTCHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 * @param {number} mps Meter per hours
 * @returns {number} Kilometer per hours
 */
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level : "Good",
        message : "Air Quality is Good. Enjoy the fresh and clean air!"
    },
    2: {
        level : "Fair",
        message : "Air Quality is Fair. It's okay for most, but sensitive individuals should take precautions."
    },
    3: {
        level : "Moderate",
        message : "Air Quality is Moderate. Unusually sensitive people should consider limiting outdoor activities."
    },
    4: {
        level : "Poor",
        message : "Air Quality is Poor. Sensitive groups should avoid prolonged outdoor exposure."
    },
    5: {
        level : "Fair",
        message : "Air Quality is Very Poor. Everyone should limit outdoor activities to protect their health."
    }
}