function checkAirQuality() {
  const airQuality = Number(document.querySelector("#airquality").value);
  const h2Output = document.querySelector("h2");
  const h3Output = document.querySelector("h3");
  const body = document.querySelector("body");
  const luftQualität = document.querySelector("p");

  if (airQuality <= 50) {
    h2Output.innerHTML = "Level of health concern:good";
    h3Output.innerHTML = "Level of health effect :Little or no Risk";
    body.style.backgroundColor = "green";
    luftQualität.innerHTML = " luftqualität : " + airQuality;
  } else if (airQuality > 50 && airQuality <= 100) {
    // man kann auch .textcontent nutzen anstatt.innerhtml wenn es um ein text geht?
    h2Output.innerHTML = "Level of health concern :Moderate";
    h3Output.innerHTML = "Level of health effect :Acceptable quality";
    body.style.backgroundColor = "yellow";
    luftQualität.innerHTML = " luftqualität : " + airQuality;
  } else if (airQuality > 100 && airQuality <= 150) {
    h2Output.innerHTML =
      "Level of health concern:Unhealthy for sensitive groups";
    h3Output.innerHTML =
      "Level of health effect:Generable publics not likely affected";
    body.style.backgroundColor = "orange";
    luftQualität.innerHTML = " luftqualität : " + airQuality;
  }
}
