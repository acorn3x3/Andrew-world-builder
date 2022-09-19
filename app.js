const worldHeader = document.getElementById("world-header");
const territoryHeader = document.getElementById("territory-header");
const cityHeader = document.getElementById("city-header");
const championHeader = document.getElementById("champion-header");
const silverwingHeader = document.getElementById("silverwing-header");

const environmentWorld = document.getElementById("environment-world");
const environmentTerritory = document.getElementById("environment-territory");
const environmentCity = document.getElementById("environment-city");
const environmentChampion = document.getElementById("environment-champion");
const environmentSilverwing = document.getElementById("environment-silverwing");

const worldSelect = document.getElementById("world-select");
const territorySelect = document.getElementById("territory-select");
const citySelect = document.getElementById("city-select");
const championSelect = document.getElementById("champion-select");
const silverwingSelect = document.getElementById("silverwing-select");

const worldImage = document.getElementById("enviroment-world");
const territoryImage = document.getElementById("enviroment-territory");
const cityImage = document.getElementById("enviroment-city");
const championImage = document.getElementById("enviroment-champion");
const silverwingImage = document.getElementById("enviroment-silverwing");

let environment = {
  world: "",
  territory: "",
  city: "",
  champion: "",
  silverwing: "",
};

worldSelect.addEventListener("change", () => {
  console.log("here");
  const nullselection = document.getElementById("worldselectblank");
  if (nullselection) nullselection.remove();
  environment.world = worldSelect.value;
  displayEnvironment();
});

territorySelect.addEventListener("change", () => {
  environment.territory = territorySelect.value;
  const nullselection = document.getElementById("territoryselectblank");
  if (nullselection) nullselection.remove();
  displayEnvironment();
});

citySelect.addEventListener("change", () => {
  environment.city = citySelect.value;
  const nullselection = document.getElementById("cityselectblank");
  if (nullselection) nullselection.remove();
  displayEnvironment();
});

championSelect.addEventListener("change", () => {
  environment.champion = championSelect.value;
  const nullselection = document.getElementById("championselectblank");
  if (nullselection) nullselection.remove();
  displayEnvironment();
});
silverwingSelect.addEventListener("change", () => {
  environment.silverwing = silverwingSelect.value;
  const nullselection = document.getElementById("silverwingselectblank");
  if (nullselection) nullselection.remove();
  displayEnvironment();
});

//
function displayEnvironment() {
  worldHeader.textContent = environment.world;
  environmentWorld.src = "assets/" + environment.world + ".png";

  environmentTerritory.src = "assets/" + environment.territory + ".png";

  environmentCity.src = "assets/" + environment.city + ".png";

  environmentChampion.src = "assets/" + environment.champion + ".png";

  environmentSilverwing.src = "assets/" + environment.silverwing + ".png";
}
//const addButton = document.getElementById('add-button');
displayEnvironment();
