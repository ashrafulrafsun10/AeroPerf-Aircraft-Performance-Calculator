const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function () {

    const aircraft = document.getElementById("aircraft").value;

    const runway = Number(document.getElementById("runwayLength").value);

    const windSpeed = Number(document.getElementById("windSpeed").value);

    const temperature = Number(document.getElementById("temperature").value);

    const pressureAltitude = Number(document.getElementById("pressureAltitude").value);

    const aircraftWeight = Number(document.getElementById("aircraftWeight").value);

    if (runway <= 0) {
        alert("Please enter Runway Length");
        return;
    }

    let mtow = 0;

    switch (aircraft) {

        case "Boeing 737-800":
            mtow = 79015;
            break;

        case "Airbus A320":
            mtow = 78000;
            break;

        case "Boeing 777-300ER":
            mtow = 351500;
            break;

        case "Boeing 787-9":
            mtow = 254000;
            break;

        case "Cessna 172":
            mtow = 1111;
            break;

        case "ATR 72":
            mtow = 23000;
            break;

        default:
            mtow = 0;
    }

    const densityAltitude =
        Math.round(
            pressureAltitude +
            ((temperature - 15) * 120)
        );

    const headwind =
        Math.round(windSpeed * 0.8);

    const crosswind =
        Math.round(windSpeed * 0.6);

    const takeoffDistance =
        Math.round(
            1200 +
            densityAltitude * 0.08 +
            aircraftWeight * 0.01 -
            headwind * 5
        );

    const landingDistance =
        Math.round(takeoffDistance * 0.75);

    document.getElementById("densityAltitude").textContent =
        densityAltitude + " ft";

    document.getElementById("mtow").textContent =
        mtow.toLocaleString() + " kg";

    document.getElementById("headwind").textContent =
        headwind + " kt";

    document.getElementById("crosswind").textContent =
        crosswind + " kt";

    document.getElementById("takeoffDistance").textContent =
        takeoffDistance + " m";

    document.getElementById("landingDistance").textContent =
        landingDistance + " m";

    const status = document.getElementById("status");

    if (aircraftWeight <= mtow && runway >= takeoffDistance) {

        status.textContent = "✅ SAFE";

        status.style.color = "#42ff8c";

    } else {

        status.textContent = "❌ NOT SAFE";

        status.style.color = "#ff5555";

    }

});
