import { buscarPokemon } from "./services/PokeApiService.js";
import { CatalogoPokemon } from "./services/CatalogoPokemon.js";

async function main() {
  console.log("=== POKÉDEX TYPESCRIPT LITE ===\n");

  const catalogo = new CatalogoPokemon();

  // 1. Busca válida e adição
  const pikachu = await buscarPokemon("pikachu");
  if (pikachu) catalogo.adicionar(pikachu);

  const charmander = await buscarPokemon("charmander");
  if (charmander) catalogo.adicionar(charmander);

  // 2. Teste de duplicidade
  const pikachuDuplicado = await buscarPokemon("pikachu");
  if (pikachuDuplicado) catalogo.adicionar(pikachuDuplicado);

  // 3. Teste de busca por Pokémon inexistente
  await buscarPokemon("pokemon-inexistente");

  // 4. Listar catálogo
  catalogo.listar();

  // 5. Remover Pokémon por ID (Pikachu - ID 25)
  catalogo.remover(25);

  // 6. Listar catálogo atualizado
  catalogo.listar();
}

main();
