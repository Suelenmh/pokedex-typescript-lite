// RF02: Interface para o Pokémon resumido dentro da aplicação
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}

// RF03: Interface simplificada para o retorno bruto da PokeAPI
export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
}
