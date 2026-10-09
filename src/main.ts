import { buscarVariosPokemons, buscarPokemon } from "./services/PokeApiService.js";
import { CatalogoPokemon } from "./services/CatalogoPokemon.js";

async function main() {
  console.log("=== POKÉDEX TYPESCRIPT LITE ===\n");

  const catalogo = new CatalogoPokemon();

  const listaPokemons = await buscarVariosPokemons();
  
  if (listaPokemons.length > 0) {
    console.log(`\n[OK] Inserindo ${listaPokemons.length} Pokémon iniciais no catálogo...`);
    for (const pokemon of listaPokemons) {
      await catalogo.adicionar(pokemon);
    }
  }

  console.log("\n==================================================");
  console.log("=== INICIANDO O ROTEIRO DE CENÁRIOS DE TESTE ===");
  console.log("==================================================\n");

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
  console.log("\n[TESTE] Removendo Pokémon ID 25 (Pikachu)...");
  await catalogo.remover(25);
  await catalogo.listar();
}

main();
