import { testBtn, getPokemonOfGeneration, createPokeItem } from "./pokeInformation.js";

testBtn.addEventListener("click", async () => {
    const generationData = await getPokemonOfGeneration();
    createPokeItem(generationData); // mit dem macht es die Liste
  });