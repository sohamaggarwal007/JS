let timer;

function startCountdown(){

    clearInterval(timer);

    const daysValue = Number(document.getElementById("input-days").value) || 0;
    const hrsValue = Number(document.getElementById("input-hrs").value) || 0;
    const minsValue = Number(document.getElementById("input-mins").value) || 0;
    const secsValue = Number(document.getElementById("input-secs").value) || 0;

    const totalDuration =
        (daysValue * 24 * 60 * 60 * 1000) +
        (hrsValue * 60 * 60 * 1000) +
        (minsValue * 60 * 1000) +
        (secsValue * 1000);

    const startDate = new Date().getTime();
    const endDate = startDate + totalDuration;

    timer = setInterval(function(){

        const now = new Date().getTime();

        const distancePending = endDate - now;
        const distanceCovered = now - startDate;

        const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));

        const hrs = Math.floor(
            (distancePending % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        );

        const mins = Math.floor(
            (distancePending % (60 * 60 * 1000)) / (60 * 1000)
        );

        const secs = Math.floor(
            (distancePending % (60 * 1000)) / 1000
        );

        // Update UI
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hrs;
        document.getElementById("minutes").innerHTML = mins;
        document.getElementById("seconds").innerHTML = secs;

        // Progress bar
        const percentage = (distanceCovered / totalDuration) * 100;

        document.getElementById("progress-bar").style.width = percentage + "%";

        if(distancePending < 0){

            clearInterval(timer);

            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            document.getElementById("progress-bar").style.width = "100%";
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}