"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokeApiService_js_1 = require("./services/PokeApiService.js");
const CatalogoPokemon_js_1 = require("./services/CatalogoPokemon.js");
async function main() {
    console.log("=== POKÉDEX TYPESCRIPT LITE ===\n");
    const catalogo = new CatalogoPokemon_js_1.CatalogoPokemon();
    const listaPokemons = await (0, PokeApiService_js_1.buscarVariosPokemons)();
    if (listaPokemons.length > 0) {
        console.log(`\n[OK] Inserindo ${listaPokemons.length} Pokémon iniciais no catálogo...`);
        for (const pokemon of listaPokemons) {
            await catalogo.adicionar(pokemon);
        }
    }
    console.log("\n==================================================");
    console.log("=== INICIANDO O ROTEIRO DE CENÁRIOS DE TESTE ===");
    console.log("==================================================\n");
    const pikachu = await (0, PokeApiService_js_1.buscarPokemon)("pikachu");
    if (pikachu) {
        await catalogo.adicionar(pikachu);
    }
    const charmander = await (0, PokeApiService_js_1.buscarPokemon)("charmander");
    if (charmander) {
        await catalogo.adicionar(charmander);
    }
    const pikachuDuplicado = await (0, PokeApiService_js_1.buscarPokemon)("pikachu");
    if (pikachuDuplicado) {
        await catalogo.adicionar(pikachuDuplicado);
    }
    await (0, PokeApiService_js_1.buscarPokemon)("pokemon-inexistente");
    await catalogo.listar();
    console.log("\n[TESTE] Removendo Pokémon ID 25 (Pikachu)...");
    await catalogo.remover(25);
    await catalogo.listar();
}
main();
