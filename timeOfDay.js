function getTimeOfDay(time) {
    console.log(time);
    if ( time >= 4 && 12 > time) {
        return "Morning";
    } else if ( time >= 12 && 17 > time) {
        return "Afternoon";
    } else if ( time >= 17 && 24 > time) {
        return "Evening";
    } else {
        return false;
    }
}

function isMorning(time) {
    if ( 12 > time && time >= 4) {
        return true;
    } else {
        return false;
    }
}

function isAfternoon(time) {
    if (17 > time && time >= 12) {
        return true;
    } else {
        return false;
    }
}

function isEvening(time) {
    if (24 > time && time >= 17) {
        return true;
    } else {
        return false;
    }
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening };