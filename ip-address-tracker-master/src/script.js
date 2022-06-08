// dom variables
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const ipAddress = document.getElementById("ipAddress");
const ipISP = document.getElementById("ipISP");
const ipTimezone = document.getElementById("ipTimezone");
const ipLocation = document.getElementById("ipLocation");
const googleMap = document.getElementById("map");
// map variables
const map = L.map("map", {
  zoom: 16,
  zoomControl: false,
  dragging: false,
  boxZoom: false,
  doubleClickZoom: false,
  trackResize: false,
});

const mapTileLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "©OpenStreetMap",
  }
).addTo(map);

const mapLocationIcon = L.icon({
  iconUrl: "../images/icon-location.svg",
  iconSize: [46, 56],
});

// api variables
const geoIpifyAPIKey = "YOUR GEOPIPFY KEY";
const geoIpifyBaseUrl = "https://geo.ipify.org/api/v2/country,city";

// check ip is valid or not
const isIp = (ip) =>
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );

const getIpDetails = (ip) => {
  return fetch(`${geoIpifyBaseUrl}?apiKey=${geoIpifyAPIKey}&ipAddress=${ip}`)
    .then((res) => res.json())
    .catch((error) => alert(`Error: ${error.messages}`));
};

const initMap = (lat, lng) => {
  // set location in map
  map.setView([lat, lng], 16);
  // add marker to given location
  L.marker([lat, lng], {
    icon: mapLocationIcon,
  }).addTo(map);
};

const setDataFromRes = (res) => {
  const {
    ip,
    isp,
    location: { city, country, postalCode, timezone, lat, lng },
  } = res;
  // set ip details to dom
  ipAddress.textContent = ip;
  ipISP.textContent = isp;
  ipLocation.textContent = `${city}, ${country} ${postalCode}`;
  ipTimezone.textContent = `UTC ${timezone}`;
  // init map with ip latitude and longitude
  initMap(lat, lng);
};

const drawMapAndSetDataFromIp = async (ip) => {
  const res = await getIpDetails(ip);

  if (
    res.hasOwnProperty("messages") &&
    res.hasOwnProperty("code") &&
    res.code.toString().startsWith(4)
  ) {
    alert(`Error: ${res.messages}`);
  } else {
    setDataFromRes(res);
    searchInput.value = "";
  }
};

// reset dom elements for app
const init = () => {
  searchInput.value = "";
  ipAddress.textContent = "-";
  ipISP.textContent = "-";
  ipTimezone.textContent = "-";
  ipLocation.textContent = "-";
  drawMapAndSetDataFromIp("192.212.174.101");
};

init();

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!isIp(searchInput.value)) {
    alert("Enter valid IP Address");
    searchInput.focus();
    return;
  }
  drawMapAndSetDataFromIp(searchInput.value);
});
