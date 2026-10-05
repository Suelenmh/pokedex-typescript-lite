import { PokemonResumo } from "../models/Pokemon.js";

// RF12: Classe simples para gerenciamento do catálogo
export class CatalogoPokemon {
  // RF07: Array mantido apenas em memória
  private pokemons: PokemonResumo[] = [];

  // RF08 & RF11: Adiciona Pokémon validando duplicidade por ID com .some()
  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  // RF09 & RF11: Lista os itens usando .forEach()
  listar(): void {
    console.log("\n--- 📋 CATÁLOGO ATUAL ---");
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }

    this.pokemons.forEach((p) => {
      console.log(`#${p.id} - ${p.nome} | Tipos: ${p.tipos.join(", ")} | Altura: ${p.altura} | Peso: ${p.peso}`);
    });
    console.log("-------------------------\n");
  }

  // RF10 & RF11: Remove Pokémon por ID usando .filter()
  remover(id: number): void {
    const existe = this.pokemons.some((item) => item.id === id);

    if (!existe) {
      console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID.`);
      return;
    }

    this.pokemons = this.pokemons.filter((item) => item.id !== id);
    console.log(`[OK] Pokémon removido do catálogo.`);
  }
}
