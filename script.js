const aircraftDatabase = {

    "Boeing 737-800": {

        mtow: 79015,

        takeoffFactor: 0.72,

        landingFactor: 0.58

    },

    "Airbus A320": {

        mtow: 78000,

        takeoffFactor: 0.70,

        landingFactor: 0.56

    },

    "Boeing 777-300ER": {

        mtow: 351500,

        takeoffFactor: 0.85,

        landingFactor: 0.70

    },

    "Boeing 787-9": {

        mtow: 254000,

        takeoffFactor: 0.80,

        landingFactor: 0.65

    },

    "Cessna 172": {

        mtow: 1111,

        takeoffFactor: 0.35,

        landingFactor: 0.28

    },

    "ATR 72": {

        mtow: 23000,

        takeoffFactor: 0.55,

        landingFactor: 0.45

    }

};
const calculateBtn = document.getElementById("calculate");
function calculateDensityAltitude(pressureAltitude, temperature) {

    return Math.round(
        pressureAltitude + (120 * (temperature - 15))
    );

}

function calculateWindComponents(windSpeed, windDirection, runwayHeading) {

    const angle = (windDirection - runwayHeading) * Math.PI / 180;

    return {

        headwind: Math.round(windSpeed * Math.cos(angle)),

        crosswind: Math.round(Math.abs(windSpeed * Math.sin(angle)))

    };

}
calculateBtn.addEventListener("click", function () {

    // Read Inputs
    const airport = document.getElementById("airport").value.toUpperCase();

    const runway = Number(document.getElementById("runwayLength").value);

    const windDirection = Number(document.getElementById("windDirection").value);

    const windSpeed = Number(document.getElementById("windSpeed").value);

    const temperature = Number(document.getElementById("temperature").value);

    const pressureAltitude = Number(document.getElementById("pressureAltitude").value);

    const aircraftWeight = Number(document.getElementById("aircraftWeight").value);

    const densityAltitude =
    calculateDensityAltitude(
        pressureAltitude,
        temperature
    );

const wind =
    calculateWindComponents(
        windSpeed,
        windDirection,
        180
    );

const headwind = wind.headwind;

const crosswind = wind.crosswind;
    const takeoffDistance = Math.round(
    runway * aircraftInfo.takeoffFactor
);

const landingDistance = Math.round(
    runway * aircraftInfo.landingFactor
);
const aircraft = document.getElementById("aircraft").value;

const aircraftInfo = aircraftDatabase[aircraft];
    // Show Results
    document.getElementById("densityAltitude").textContent =
        densityAltitude + " ft";

    document.getElementById("headwind").textContent =
        headwind + " kt";

    document.getElementById("crosswind").textContent =
        crosswind + " kt";

    document.getElementById("takeoffDistance").textContent =
        takeoffDistance + " m";

    document.getElementById("landingDistance").textContent =
        landingDistance + " m";
        document.getElementById("mtow").textContent =
    aircraftInfo.mtow.toLocaleString() + " kg";

    if (aircraftWeight > aircraftInfo.mtow) {

    document.getElementById("status").textContent =
    "❌ OVERWEIGHT";

    document.getElementById("status").style.color =
    "#ff4d4d";

}
else if (runway >= takeoffDistance) {

    document.getElementById("status").textContent =
    "✅ SAFE";

    document.getElementById("status").style.color =
    "#5cff8d";

}
else {

    document.getElementById("status").textContent =
    "⚠ RUNWAY TOO SHORT";

    document.getElementById("status").style.color =
    "#ffd54a";

}

});