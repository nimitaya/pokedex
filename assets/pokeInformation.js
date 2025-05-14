const testBtn = document.getElementById("test-btn");
const pokemonList = document.querySelector(".pokemon-list");

// Prüfen, welche Generation ausgewählt ist und Limit setzen
const getCurrentGen = () => {
  let currentValue = document.getElementById("hidden").value;
  let parameter;
  switch (currentValue) {
    case "1":
      parameter = "?limit=151";
      return parameter;

    case "2":
      parameter = "?limit=100&offset=151";
      return parameter;

    case "3":
      parameter = "?limit=135&offset=251";
      return parameter;

    case "4":
      parameter = "?limit=107&offset=386";
      return parameter;

    case "5":
      parameter = "?limit=156&offset=493";
      return parameter;

    case "6":
      parameter = "?limit=72&offset=649";
      return parameter;

    case "7":
      parameter = "?limit=88&offset=721";
      return parameter;

    case "8":
      parameter = "?limit=96&offset=809";
      return parameter;

    case "9":
      parameter = "?limit=120&offset=905";
      return parameter;

    default:
      break;
  }
};

// Pokemon der Generation fetchen
async function getPokemonOfGeneration() {
  let currentLimit = getCurrentGen();
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${currentLimit}`
  );
  const generationData = await response.json();
  if (!generationData) {
    alert("Something went wrong");
  }
  return generationData;
}

// Liste erstellen aus Daten
function createPokeItem(genData) {
  pokemonList.innerHTML = ""; // leer machen

  genData.results.forEach((pokemon) => {
    let pokeListItem = document.createElement("li");
    let pokeImageElement = document.createElement("img");
    let pokeNameElement = document.createElement("p");

    let pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.slice(34,-1)}.png`; // Bild des Pokis mit Nummer aus der URL der genData
    pokeImageElement.setAttribute("src", pokemonImageUrl); // Bild url einfügen

    let pokeName = pokemon.name;
    let pokeNumber = pokemon.url.slice(34, -1); // nur die Nummer aus der URL der genData
    pokeNameElement.textContent = `${pokeNumber}. ${
      pokeName[0].toUpperCase() + pokeName.slice(1)
    }`;

    pokeListItem.append(pokeImageElement, pokeNameElement);
    pokemonList.appendChild(pokeListItem);
  });
}

export { testBtn, getPokemonOfGeneration, createPokeItem };
