"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxService = void 0;
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const CAMINHO_ARQUIVO = (0, node_path_1.join)(process.cwd(), "pc_box.json");
class BoxService {
    async ler() {
        try {
            const conteudo = await (0, promises_1.readFile)(CAMINHO_ARQUIVO, "utf-8");
            return JSON.parse(conteudo);
        }
        catch (erro) {
            return [];
        }
    }
    async salvar(pokemons) {
        const json = JSON.stringify(pokemons, null, 2);
        await (0, promises_1.writeFile)(CAMINHO_ARQUIVO, json, "utf-8");
    }
}
exports.BoxService = BoxService;
