let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let milliseconds = date.getMilliseconds();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let utcDate = new Date();
let utcYear = utcDate.getUTCFullYear();
let utcMonth = date.getUTCMonth();
let utcDay = date.getUTCDate();
let utcHours = date.getUTCHours();
let utcMinutes = date.getUTCMinutes();
let utcSeconds = date.getUTCSeconds();

if (month < 10) {
    month = `0${month}`;
}
if (day < 10) {
    day = `0${day}`;
}
if (hours < 10) {
    hours = `0${hours}`;
}
if (minutes < 10) {
    minutes = `0${minutes}`;
}
if (seconds < 10) {
    seconds = `0${seconds}`;
}
if (milliseconds < 10) {
    milliseconds = `00${milliseconds}`;
}
if (milliseconds < 100 && milliseconds > 10) {
    milliseconds = `0${milliseconds}`;
}
if (utcMonth < 10) {
    utcMonth = `0${utcMonth}`;
}
if (utcDay < 10) {
    utcDay = `0${utcDay}`;
}
if (utcHours < 10) {
    utcHours = `0${utcHours}`;
}
if (utcMinutes < 10) {
    utcMinutes = `0${utcMinutes}`;
}
if (utcSeconds < 10) {
    utcSconds = `0${utcSeconds}`;
}

function getDateTimeWithMilliSeconds() {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${milliseconds}ms`;
}

function getLocalDateTimeWithMilliSeconds() {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${milliseconds}ms`;
}

function getDateTime() {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function getDateTimeWithShowTimeZone() {
    let diffHours = hours - utcHours;
    let diffMinutes = minutes - utcMinutes;
    let sign;
    if (diffMinutes > 0) {
        sign = "+";
    }
    if (diffHours < 0) {
        sign = "-";
    }
    if (diffHours === 0 && diffMinutes > 0) {
        sign = "+";
    }
    if (diffHours === 0 && diffMinutes < 0) {
        sign = "-";
    }
    let absHours = Math.abs(diffHours);
    let absMinutes = Math.abs(diffMinutes);
    if (absMinutes < 10) {
        absMinutes = `0${absMinutes}`;
    }
    if (absHours < 10) {
        absHours = `0${absHours}`;
    }
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC${sign}${absHours}:${absMinutes} `;
}

function getDateTimeWithShowTimeZoneWithMilliSeconds() {
    let diffHours = hours - utcHours;
    let diffMinutes = minutes - utcMinutes;
    let sign;
    if (diffMinutes > 0) {
        sign = "+";
    }
    if (diffHours < 0) {
        sign = "-";
    }
    if (diffHours === 0 && diffMinutes > 0) {
        sign = "+";
    }
    if (diffHours === 0 && diffMinutes < 0) {
        sign = "-";
    }
    let absHours = Math.abs(diffHours);
    let absMinutes = Math.abs(diffMinutes);
    if (absMinutes < 10) {
        absMinutes = `0${absMinutes}`;
    }
    if (absHours < 10) {
        absHours = `0${absHours}`;
    }
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${milliseconds}ms UTC${sign}${absHours}:${absMinutes}`;
}

function getDateTimeInUTCWithTimeZone() {
    return `${utcYear}-${utcMonth}-${utcDay} ${utcHours}:${utcMinutes}:${utcSeconds} UTC`;
}

function getDateTimeInUTCWithTimeZoneWithMilliSeconds() {
    return `${utcYear}-${utcMonth}-${utcDay} ${utcHours}:${utcMinutes}:${utcSeconds} ${milliseconds}ms UTC`;
}

function getDateTimeInUTC() {
    return `${utcYear}-${utcMonth}-${utcDay} ${utcHours}:${utcMinutes}:${utcSeconds}`;
}

module.exports = {
    getDateTime,
    getDateTimeInUTC,
    getDateTimeWithMilliSeconds,
    getLocalDateTimeWithMilliSeconds,
    getDateTimeWithShowTimeZone,
    getDateTimeInUTCWithTimeZone,
    getDateTimeWithShowTimeZoneWithMilliSeconds,
    getDateTimeInUTCWithTimeZoneWithMilliSeconds
};
