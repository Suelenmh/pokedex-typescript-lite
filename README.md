# Pokédex TypeScript Lite   

Este é um mini-projeto em TypeScript desenvolvido para gerenciar um catálogo local de Pokémon consumindo dados em tempo real diretamente da **PokeAPI**. O projeto aplica conceitos rígidos de tipagem do TypeScript, Programação Orientada a Objetos e métodos de manipulação de arrays funcionais.

## Objetivo
Praticar e consolidar conceitos fundamentais do desenvolvimento Back-End com Node.js e TypeScript puro:
- **Tipagem estrita** e contratos de dados por meio de interfaces.
- **Funções assíncronas** com tratamento de erros usando blocos `try/catch`.
- **Manipulação avançada de listas** através de métodos nativos de array (`.map()`, `.some()`, `.forEach()`, `.filter()`).
- **Programação Orientada a Objetos** com encapsulamento e modificadores de acesso.
- **Persistência de dados local** utilizando o módulo nativo `node:fs/promises`.

## 🗺️ Quadro Kanban do Projeto

Backlog  |A Fazer  |Em Andamento  |Concluído 
                                   - Criar repositório no GitHub
                                   - Configurar projeto Node com TypeScript
                                   - Criar package.json
                                   - Criar tsconfig.json
                                   - Criar src/main.ts
                                   - Criar interface PokemonResumo
                                   - Criar interface PokemonApiResponse
                                   - Criar função buscarPokemon
                                   - Usar fetch para consultar a PokeAPI
                                   - Tratar erro de Pokémon inexistente
                                   - Mapear resposta da API
                                   - Criar classe CatalogoPokemon
                                   - Criar método adicionar
                                   - Bloquear Pokémon duplicado
                                   - Criar método listar
                                   - Criar método remover
                                   - Usar pelo menos 3 métodos de array
                                   - Testar fluxo no main.ts
                                   - Atualizar README.md
                                   - Registrar exemplos de execução no README
                                   - Enviar links no AVA
  
                                     

---

## 🛠️ Tecnologias Utilizadas
- **Node.js** (Ambiente de execução)
- **TypeScript** (Linguagem com tipagem estática) 
- **TSX** (Executor rápido de arquivos TypeScript em ambiente de desenvolvimento)
- **PokeAPI** (API REST pública do ecossistema Pokémon)

---

## 📁 Estrutura de Pastas e Arquivos
pokedex-typescript-lite/
├── dist/                  # Arquivos compilados em JavaScript 
├── src/                   # Código fonte principal do projeto 
│   ├── models/            # Modelagem e interfaces de dados
│   │   └── Pokemon.ts     # Interfaces PokemonResumo e PokemonApiResponse 
│   ├── services/          # Serviços e regras de negócio da aplicação
│   │   ├── CatalogoPokemon.ts # Gerenciamento em memória (push, some, forEach, filter) 
│   │   └── PokeApiService.ts  # Conexão assíncrona com a PokeAPI (fetch, try/catch) pdf
│   └── main.ts            # Ponto de entrada e execução dos cenários de teste 
├── package.json           # Manifesto do projeto e scripts de execução
├── tsconfig.json          # Configurações rígidas do compilador TypeScript 
└── README.md              # Documentação oficial do projeto 

---
##  Pré-requisitos
Antes de executar o projeto, certifique-se de possuir instalado em sua máquina:
- **Node.js** (Ambiente de execução)
- **npm** (Gerenciador de pacotes do Node)
- **Git** (Sistema de controle de versão) 

## Como Executar o Projeto Localmente

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Executar em ambiente de desenvolvimento (Roteiro de Testes):**
   ```bash
   npm run dev
   ```

3. **Compilar o projeto para JavaScript nativo:**
   ```bash
   npm run build
   ```

## 🧪 Exemplos de execução (Logs obtidos)

```text
=== POKÉDEX TYPESCRIPT LITE ===

[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo (salvo em pc_box.json).

[OK] Pokémon encontrado: charmander
[OK] charmander adicionado ao catálogo (salvo em pc_box.json).

[OK] Pokémon encontrado: pikachu
[AVISO] pikachu já está no catálogo.

[ERRO] Pokémon não encontrado: pokemon-inexistente

--- 📋 CATÁLOGO ATUAL ---
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
-------------------------

[OK] Pokémon removido do catálogo local.

--- 📋 CATÁLOGO ATUAL ---
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
-------------------------
```

---

## 🧠 Conceitos aplicados
- **TypeScript**: Utilização de tipos primitivos, parâmetros fortemente tipados e anotações explícitas de retornos em Promises (`Promise<PokemonResumo | null>`).
- **Interfaces**: Criação das interfaces `PokemonResumo` e `PokemonApiResponse` para blindagem de tipagem dos dados manipulados.
- **Métodos de Array**: Aplicação de métodos modernos e declarativos do JavaScript para manipulação da lista: `.map()` para conversão de tipos da API, `.some()` para validação de duplicidade, `.forEach()` para a listagem formatada e `.filter()` para a remoção segura.
- **Classes**: Estruturação da classe corporativa `CatalogoPokemon` usando o modificador de acesso `private` para encapsular a instância do serviço de arquivos e manter a segurança estrutural.

---

## 🔀 Branches utilizadas (GitFlow)
As ramificações criadas e enviadas seguem o fluxo lógico do GitFlow sugerido para a entrega do projeto:
- `main`: Código final homologado, estável e pronto para avaliação.
- `develop`: Branch de integração e consolidação técnica das funcionalidades.
- `feat/pokedex`: Branch destinada ao desenvolvimento do consumo da API, persistência local e catálogo.
- `docs/readme`: Branch focada na criação e ajustes da documentação oficial.