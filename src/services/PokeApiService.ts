import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon.js";

// RF04 – Função assíncrona para buscar Pokémon por nome ou ID
export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co{nomeOuId.toLowerCase().trim()}`;

  try {
    const resposta = await fetch(url);

    // RF05 – Tratar erro de Pokémon inexistente (Status 404)
    if (!resposta.ok) {
      console.log("[ERRO] Pokémon não encontrado.");
      return null;
    }

    const dados: PokemonApiResponse = await resposta.json();

    // RF11 – Usar o método de array '.map' para extrair os tipos da PokeAPI
    const tipos = dados.types.map((item) => item.type.name);

    // RF06 – Mapear o retorno da API para o formato de objeto simplificado
    const pokemonSimplificado: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: tipos,
      altura: dados.height,
      peso: dados.weight,
    };

    return pokemonSimplificado;

  } catch (erro) {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
  }
}
