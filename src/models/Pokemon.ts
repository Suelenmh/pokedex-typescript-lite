export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[]; 
  altura: number;
  peso: number;
  status: {
    hp: number;
    attack: number;
    defense: number;
  };
}

export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}
