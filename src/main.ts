import { buscarPokemonDaApi } from './services/PokeApiService.js';
import { CatalogoPokemon } from './services/CatalogoPokemon.js';

async function main() {
    console.log("=== POKÉDEX TYPESCRIPT LITE ===\n");
    const catalogo = new CatalogoPokemon();
  
    const pikachu = await buscarPokemonDaApi("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }
    
    const charmander = await buscarPokemonDaApi("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander);
    }

    const pikachuDuplicado = await buscarPokemonDaApi("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo.adicionar(pikachuDuplicado);
    }

    await buscarPokemonDaApi("pokemon-inexistente");
    catalogo.listar();
    catalogo.remover(25);
    catalogo.listar();
}

main();