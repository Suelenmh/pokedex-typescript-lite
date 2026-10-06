import { writeFile, readFile } from "node:fs/promises";
import { join } from "node:path";
import { PokemonResumo } from "../models/Pokemon.js";

const CAMINHO_ARQUIVO = join(process.cwd(), "pc_box.json");

export class BoxService {
  
  async ler(): Promise<PokemonResumo[]> {
    try {
      const conteudo = await readFile(CAMINHO_ARQUIVO, "utf-8");
      return JSON.parse(conteudo) as PokemonResumo[];
    } catch (erro) {
    
      return [];
    }
  }

  async salvar(pokemons: PokemonResumo[]): Promise<void> {
    const json = JSON.stringify(pokemons, null, 2);
    await writeFile(CAMINHO_ARQUIVO, json, "utf-8");
  }
}
