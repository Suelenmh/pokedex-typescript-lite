import { buscarPokemon } from "./services/PokeApiService.js";
import { CatalogoPokemon } from "./services/CatalogoPokemon.js";

async function main() {
  console.log("=== POKÉDEX TYPESCRIPT LITE ===\n");

  const catalogo = new CatalogoPokemon();

  const pikachu = await buscarPokemon("pikachu");
  if (pikachu) {
    await catalogo.adicionar(pikachu);
  }

  const charmander = await buscarPokemon("charmander");
  if (charmander) {
    await catalogo.adicionar(charmander);
  }

  const pikachuDuplicado = await buscarPokemon("pikachu");
  if (pikachuDuplicado) {
    await catalogo.adicionar(pikachuDuplicado);
  }

  await buscarPokemon("pokemon-inexistente");
  await catalogo.listar();
  await catalogo.remover(25);
  await catalogo.listar();
}

main();
