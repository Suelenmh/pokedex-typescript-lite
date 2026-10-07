import { PokemonResumo } from "../models/Pokemon.js";
import { BoxService } from "./BoxService.js";

export class CatalogoPokemon {
  private boxService = new BoxService();

  async adicionar(pokemon: PokemonResumo): Promise<void> {
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

  async listar(): Promise<void> {
    console.log("\n--- 📋 CATÁLOGO ATUAL ---");
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

  async remover(id: number): Promise<void> {
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
