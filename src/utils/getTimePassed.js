/**
 * Consumes created_at date provided by Algolia Search's API and returns time passed for display purposes.
 * @param date date string
 * @return string representing how much time has passed in years, months, days, or hours
 */

export const getTimePassed = (date) => {
    let today = new Date();
    let pastDay = new Date(date);
    let difference = new Date(today.getTime() - pastDay.getTime());

    let years = parseInt(`${difference.getUTCFullYear() - 1970}`);
    let months = parseInt(difference.getUTCMonth());
    let days = parseInt(difference.getUTCDate() - 1);
    let hours = parseInt(difference.getUTCHours());
    let noun;

    if (years > 0) {
        years === 1 ? (noun = "year") : (noun = "years");
        return `${years} ${noun} ago`;
    } else if (months > 0) {
        months === 1 ? (noun = "month") : (noun = "months");
        return `${months} ${noun} ago`;
    } else if (days > 0) {
        days === 1 ? (noun = "day") : (noun = "days");
        return `${days} ${noun} ago`;
    } else {
        hours === 1 ? (noun = "hour") : (noun = "hours");
        return `${hours} ${noun} ago`;
    }
};
