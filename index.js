function success(pos) {
  if (pos.coords) {
    document.querySelector(".loading_gif").style.display = "none";
    document.getElementById("map").style.display = "block";
  }
  let { latitude, longitude } = pos.coords;

  const map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("Your Location😁")
    .openPopup();
}

function error(err) {
  console.log(err.message);
  document.getElementById("map").style.display = "none";

  if (err.message === "User denied Geolocation") {
    return document.querySelector('.pic').textContent = 'Please turn on your Location😉'
  }

  document.querySelector(".pic").textContent = err.message;
}

function data() {
  navigator.geolocation.getCurrentPosition(success, error);
}

data();
