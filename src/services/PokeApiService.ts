import { PokemonResumo, PokemonApiResponse } from '../models/Pokemon.js';


function extrairIdDaUrl(url: string): number {
  const partes = url.split('/').filter(Boolean);
  const ultimoPedaço = partes[partes.length - 1];
  return parseInt(ultimoPedaço, 10) || 999;
}

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const termo = nomeOuId.toLowerCase().trim();

  const url = `https://pokeapi.co/api/v2/pokemon/${termo}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
  if (resposta.status === 404) {
    console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
  } else {
    console.log(`[ERRO] Falha ao consultar a PokeAPI (status ${resposta.status}).`);
  }
  return null;
}
    const dadosBrutos: PokemonApiResponse = await resposta.json();
    const tiposMapped = dadosBrutos.types.map((item: any) => item.type.name);

    let hp = 0, attack = 0, defense = 0;
    dadosBrutos.stats.forEach((item: any) => {
      if (item.stat.name === 'hp') hp = item.base_stat;
      if (item.stat.name === 'attack') attack = item.base_stat;
      if (item.stat.name === 'defense') defense = item.base_stat;
    });

    const pokemonFormatado: PokemonResumo = {
      id: dadosBrutos.id,
      nome: dadosBrutos.name,
      tipos: tiposMapped,
      altura: dadosBrutos.height,
      peso: dadosBrutos.weight,
      status: { hp, attack, defense }
    };

    console.log(`[OK] Pokémon encontrado: #${pokemonFormatado.id} - ${pokemonFormatado.nome}`);
    return pokemonFormatado;

  } 
    catch (erro) {
  console.log('[ERRO] Não foi possível buscar o Pokémon. Verifique sua conexão.');
  return null;
}
}

export async function buscarVariosPokemons(): Promise<PokemonResumo[]> {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  const lista: PokemonResumo[] = [];

  try {
    const resposta = await fetch(url);
    
    if (!resposta.ok) {
      console.log("[ERRO] Não foi possível carregar a lista inicial de Pokémon.");
      return lista;
    }

    const dados = await resposta.json();
    const resultados = dados.results as Array<{ name: string; url: string }>;

    console.log(`\n[API] Carregando dados detalhados de ${resultados.length} Pokémon da lista...`);

    for (const item of resultados) {
      const idUrl = extrairIdDaUrl(item.url);
      const pokemonDetalhes = await buscarPokemon(item.name);
      
      if (pokemonDetalhes) {
        pokemonDetalhes.id = idUrl; 
        lista.push(pokemonDetalhes);
      }
    }

    return lista;

  }
    catch (erro) {
    console.log('[ERRO] Não foi possível carregar a lista inicial de Pokémon.');
    return lista;
  }
}

