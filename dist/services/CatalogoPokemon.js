"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoPokemon = void 0;
const BoxService_js_1 = require("./BoxService.js");
class CatalogoPokemon {
    boxService = new BoxService_js_1.BoxService();
    async adicionar(pokemon) {
        const pokemons = await this.boxService.ler();
        const jaExiste = pokemons.some((item) => item.id === pokemon.id);
        if (jaExiste) {
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
            return;
        }
        pokemons.push(pokemon);
        await this.boxService.salvar(pokemons);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo (salvo em pc_box.json).`);
    }
    async listar() {
        console.log("\n---  CATÁLOGO ATUAL ---");
        const pokemons = await this.boxService.ler();
        if (pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }
        pokemons.forEach((p) => {
            console.log(`#${p.id} - ${p.nome} | Tipos: ${p.tipos.join(", ")} | Altura: ${p.altura} | Peso: ${p.peso}`);
        });
        console.log("-------------------------\n");
    }
    async remover(id) {
        let pokemons = await this.boxService.ler();
        const existe = pokemons.some((item) => item.id === id);
        if (!existe) {
            console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID.`);
            return;
        }
        pokemons = pokemons.filter((item) => item.id !== id);
        await this.boxService.salvar(pokemons);
        console.log(`[OK] Pokémon removido do catálogo local.`);
    }
}
exports.CatalogoPokemon = CatalogoPokemon;
