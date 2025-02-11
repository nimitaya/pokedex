const testBtn = document.getElementById("test-btn");
const pokemonList = document.querySelector(".pokemon-list");

async function getPokemonOfGeneration() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151"); // erstmal nur alle Pokis aus Kanto TODO
  const generationData = await response.json();
  return generationData;
}

function createPokeItem(genData) {
  
  genData.results.forEach((pokemon) => {
    let pokeListItem = document.createElement("li");
    let pokeImageElement = document.createElement("img");
    let pokeNameElement = document.createElement("p");
    
    let pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.slice(34,-1)}.png` // Bild des Pokis mit Nummer aus der URL der genData
    pokeImageElement.setAttribute("src", pokemonImageUrl) // Bild url einfügen
    
    let pokeName = pokemon.name;
    let pokeNumber = pokemon.url.slice(34,-1) // nur die Nummer aus der URL der genData
    pokeNameElement.textContent = `${pokeNumber}. ${pokeName[0].toUpperCase() + pokeName.slice(1)}`;

    pokeListItem.append(pokeImageElement, pokeNameElement);
    pokemonList.appendChild(pokeListItem);
  });
}

export { testBtn, getPokemonOfGeneration, createPokeItem };

