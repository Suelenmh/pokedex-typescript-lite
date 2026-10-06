import { PokemonResumo } from '../models/Pokemon.js';

const POKEMONS_MOCK: Record<string, PokemonResumo> = {
    "pikachu": { id: 25, nome: "pikachu", tipos: ["electric"], altura: 4, peso: 60 },
    "charmander": { id: 4, nome: "charmander", tipos: ["fire"], altura: 6, peso: 85 },
    "bulbasaur": { id: 1, nome: "bulbasaur", tipos: ["grass", "poison"], altura: 7, peso: 69 },
    "squirtle": { id: 7, nome: "squirtle", tipos: ["water"], altura: 5, peso: 90 }
};

export async function buscarPokemonDaApi(nomeOuId: string): Promise<PokemonResumo | null> {

    await new Promise(resolve => setTimeout(resolve, 100));

    const termoBusca = nomeOuId.toLowerCase();
    
    const encontrado = Object.values(POKEMONS_MOCK).find(
        p => p.nome === termoBusca || p.id === Number(termoBusca)
    );

    if (encontrado) {
        console.log(`[OK] Pokémon encontrado: ${encontrado.nome}`);
        return encontrado;
    } else {
        console.log("[ERRO] Pokémon não encontrado.");
        return null;
    }
}