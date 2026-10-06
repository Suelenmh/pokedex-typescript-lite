import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon.js";

// RF04: Função assíncrona para buscar Pokémon por nome ou ID usando fetch
export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = 'https://pokeapi.co' + nomeOuId.toLowerCase().trim();

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    const dados: PokemonApiResponse = await resposta.json();

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

  } catch (erro: any) {
    // DIAGNÓSTICO: Mostra o motivo técnico real do erro de conexão no terminal
    console.log(`[ERRO] Falha técnica ao buscar ${nomeOuId}. Detalhe do sistema: ${erro.message}`);
    return null;
  }
}

