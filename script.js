const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", () => {

    const runway =
        parseFloat(document.getElementById("runwayLength").value) || 0;

    const windSpeed =
        parseFloat(document.getElementById("windSpeed").value) || 0;

    const temperature =
        parseFloat(document.getElementById("temperature").value) || 15;

    const pressureAltitude =
        parseFloat(document.getElementById("pressureAltitude").value) || 0;

    const aircraftWeight =
        parseFloat(document.getElementById("aircraftWeight").value) || 0;

    // Density Altitude
    const densityAltitude =
        Math.round(
            pressureAltitude +
            (120 * (temperature - 15))
        );

    // Wind Components (Demo)
    const headwind =
        Math.round(windSpeed * 0.8);

    const crosswind =
        Math.round(windSpeed * 0.6);

    // MTOW
    let mtow = "";

    const aircraft =
        document.getElementById("aircraft").value;

    switch(aircraft){

        case "Boeing 737-800":
            mtow = "79,015 kg";
            break;

        case "Airbus A320":
            mtow = "78,000 kg";
            break;

        case "Boeing 777-300ER":
            mtow = "351,500 kg";
            break;

        case "Boeing 787-9":
            mtow = "254,000 kg";
            break;

        case "Cessna 172":
            mtow = "1,111 kg";
            break;

        case "ATR 72":
            mtow = "23,000 kg";
            break;

    }

    // Simple Performance Formula

    const takeoffDistance =
        Math.round(
            1200 +
            densityAltitude * 0.08 +
            aircraftWeight * 0.01 -
            headwind * 6
        );

    const landingDistance =
        Math.round(
            takeoffDistance * 0.75
        );

    // Output

    document.getElementById("densityAltitude").innerHTML =
        densityAltitude + " ft";

    document.getElementById("mtow").innerHTML =
        mtow;

    document.getElementById("headwind").innerHTML =
        headwind + " kt";

    document.getElementById("crosswind").innerHTML =
        crosswind + " kt";

    document.getElementById("takeoffDistance").innerHTML =
        takeoffDistance + " m";

    document.getElementById("landingDistance").innerHTML =
        landingDistance + " m";

    if(runway >= takeoffDistance){

        document.getElementById("status").innerHTML =
            "✅ SAFE";

        document.getElementById("status").style.color =
            "#4CFF7A";

    }else{

        document.getElementById("status").innerHTML =
            "❌ NOT SAFE";

        document.getElementById("status").style.color =
            "#FF5A5A";

    }

});
