/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author Danish <dan72mail@gmail.com>
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
    "Dec"
];

// Param {number} dateUnix Unix date in sec
// Param {number} timeZone Time 
// Return  {string} Date String. Formate : "Sunday 10, Jan"
export const getData = function (dateUnix, timezone){
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];
    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`
}
// Param {number} dateUnix Unix date in sec
// Param {number} timeZone Time 
// Return  {string} Date String. Formate : "Sunday 10, Jan" 
export const getTime = function (timeUnix, timezone){
    const date= new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes   = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}
// Param {number} dateUnix Unix date in sec
// Param {number} timeZone Time 
// Return  {string} Date String. Formate : "Sunday 10, Jan" 
export const getHours = function (timeUnix, timezone){
    const date= new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}
// Param {mps}
// return {Number} mph
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}
export const aqiText = {
    1:{
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    2:{
        level:"Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate health consern for a very small number of people who are unusally sensitive to air pollution"
    },
    3:{
        level:"Moderate",
        message: "Members of sensitive group may experience health effects. The general public is not likely to be affected"
    },
    4:{
        level:"Poor",
        message: "Everyone may begin to experience health effects; member of sensitive groups may experience more serious health effects"
    },
    5:{
        level:"Very Poor",
        message: "Health warnings to emergency conditions. The entire population is more likely to be affected"
    }
}