import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon.js";

// RF04: Função assíncrona para buscar Pokémon por nome ou ID usando fetch e Promises
export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co{nomeOuId.toLowerCase()}`;

  // RF05: Bloco try/catch para tratamento de erros
  try {
    const resposta = await fetch(url);

    // Tratamento do erro 404/Pokémon inexistente
    if (!resposta.ok) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    const dados: PokemonApiResponse = await resposta.json();

    // RF06 & RF11: Mapeamento de dados da API usando o método de array .map()
    const tipos = dados.types.map((item) => item.type.name);

    const pokemonFormatado: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: tipos,
      altura: dados.height,
      peso: dados.weight
    };

    console.log(`[OK] Pokémon encontrado: ${pokemonFormatado.nome}`);
    return pokemonFormatado;

  } catch (erro) {
    console.log(`[ERRO] Falha ao conectar com a PokeAPI ao buscar: ${nomeOuId}`);
    return null;
  }
}

