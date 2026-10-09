# Pokédex TypeScript Lite   

Este é um mini-projeto em TypeScript desenvolvido para gerenciar um catálogo local de Pokémon consumindo dados em tempo real diretamente da **PokeAPI**. O projeto aplica conceitos rígidos de tipagem do TypeScript, Programação Orientada a Objetos e métodos de manipulação de arrays funcionais.

## Objetivo
Praticar e consolidar conceitos fundamentais do desenvolvimento Back-End com Node.js e TypeScript puro:
- **Tipagem estrita** e contratos de dados por meio de interfaces.
- **Funções assíncronas** com tratamento de erros usando blocos `try/catch`.
- **Manipulação avançada de listas** através de métodos nativos de array (`.map()`, `.some()`, `.forEach()`, `.filter()`).
- **Programação Orientada a Objetos** com encapsulamento e modificadores de acesso.
- **Persistência de dados local** utilizando o módulo nativo `node:fs/promises`.

### Quadro Kanban do Projeto

Link do Kanban: https://github.com/Suelenmh/pokedex-typescript-lite

| Backlog | A Fazer | Em Andamento | Concluído |
|---|---|---|---|
| Criar filtros por tipo | | | Criar repositório no GitHub |
| Criar API própria com Express | | | Configurar projeto Node com TypeScript |
| | | | Criar interfaces `PokemonResumo` e `PokemonApiResponse` |
| | | | Criar função `buscarPokemon` com `fetch` |
| | | | Tratar erro de Pokémon inexistente |
| | | | Mapear resposta da API |
| | | | Criar classe `CatalogoPokemon` |
| | | | Bloquear Pokémon duplicado |
| | | | Usar pelo menos 3 métodos de array |
| | | | Testar fluxo no `main.ts` |
| | | | Atualizar README e registrar exemplos |
| | | | Enviar links no AVA |
  
---

## Tecnologias Utilizadas
- Node.js - (Ambiente de execução)
- TypeScript - (Linguagem com tipagem estática) 
- TSX - (Executor rápido de arquivos TypeScript em ambiente de desenvolvimento)
- PokeAPI - (API REST pública do ecossistema Pokémon)

---

## Estrutura de Pastas e Arquivos
```
pokedex-typescript-lite/
├── dist/                  # Arquivos compilados em JavaScript;
├── node_modules/          # Dependências e bibliotecas de terceiros instaladas via npm;
├── src/                   # Código fonte principal do projeto;
│   ├── models/            # Modelagem e interfaces de dados;
│   │   └── Pokemon.ts     # Interfaces PokemonResumo e PokemonApiResponse;
│   ├── services/          # Serviços e regras de negócio da aplicação;
│   │   ├── BoxService.ts  # Lógica do sistema de armazenamento (PC Box) de Pokémon;
│   │   ├── CatalogoPokemon.ts # Gerenciamento em memória (push, some, forEach, filter);
│   │   └── PokeApiService.ts  # Conexão assíncrona com a PokeAPI (fetch, try/catch);
│   └── main.ts            # Ponto de entrada e execução dos cenários de teste;
├── .gitignore             # Arquivos e pastas ocultados do controle de versão do Git;
├── package.json           # Manifesto do projeto e scripts de execução;
├── pc_box.json            # Banco de dados local em formato JSON para salvar os Pokémon do PC;
├── tsconfig.json          # Configurações rígidas do compilador TypeScript;
└── README.md              # Documentação oficial do projeto.
```
##  Pré-requisitos
Antes de executar o projeto, certifique-se de possuir instalado em sua máquina:
- Node.js (Ambiente de execução)
- npm (Gerenciador de pacotes do Node)
- Git (Sistema de controle de versão) 
- Conexão com a internet

## Como Executar o Projeto Localmente

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Suelenmh/pokedex-typescript-lite
   ```

2. Acessar a pasta do projeto:
   ```bash
   cd pokedex-typescript-lite
   ```

3. Instalar as dependências do projeto:
   ```bash
   npm install
   ```

4. Compila o projeto para `dist/`:
   ```bash
   npm run build
   ```

5. Como executar:
   ```bash
   npm run start
   ```
## Funcionalidades

- Buscar Pokémon por nome ou ID na PokeAPI
- Tratar Pokémon inexistente (erro 404) sem quebrar o programa
- Transformar a resposta da API em um objeto simplificado
- Adicionar Pokémon ao catálogo, impedindo duplicados pelo `id`
- Listar o catálogo
- Remover Pokémon pelo ID
- Salvar o catálogo em `pc_box.json`
- Exibir mensagens claras no terminal (`[OK]`, `[AVISO]`, `[ERRO]`)


## 🧪 Exemplos de execução (Logs obtidos)
```
### Busca válida

Entrada testada: `pikachu`

```
[OK] Pokémon encontrado: #25 - pikachu
```

### Busca inválida

Entrada testada: `pokemon-inexistente`

```
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Duplicidade

Entrada testada: adicionar `pikachu` duas vezes

```
[OK] pikachu adicionado ao catálogo (salvo em pc_box.json).
[AVISO] pikachu já está no catálogo.
```

### Remoção

Entrada testada: remover ID `25`

```
[OK] Pokémon removido do catálogo local.
```

### Log completo da execução
```
=== POKÉDEX TYPESCRIPT LITE ===

[API] Carregando dados detalhados de 20 Pokémon da lista...
[OK] Pokémon encontrado: #1 - bulbasaur
[OK] Pokémon encontrado: #2 - ivysaur
[OK] Pokémon encontrado: #3 - venusaur
[OK] Pokémon encontrado: #4 - charmander
[OK] Pokémon encontrado: #5 - charmeleon
[OK] Pokémon encontrado: #6 - charizard
[OK] Pokémon encontrado: #7 - squirtle
[OK] Pokémon encontrado: #8 - wartortle
[OK] Pokémon encontrado: #9 - blastoise
[OK] Pokémon encontrado: #10 - caterpie
[OK] Pokémon encontrado: #11 - metapod
[OK] Pokémon encontrado: #12 - butterfree
[OK] Pokémon encontrado: #13 - weedle
[OK] Pokémon encontrado: #14 - kakuna
[OK] Pokémon encontrado: #15 - beedrill
[OK] Pokémon encontrado: #16 - pidgey
[OK] Pokémon encontrado: #17 - pidgeotto
[OK] Pokémon encontrado: #18 - pidgeot
[OK] Pokémon encontrado: #19 - rattata
[OK] Pokémon encontrado: #20 - raticate

[OK] Inserindo 20 Pokémon iniciais no catálogo...
[OK] bulbasaur adicionado ao catálogo (salvo em pc_box.json).
[OK] ivysaur adicionado ao catálogo (salvo em pc_box.json).
[OK] venusaur adicionado ao catálogo (salvo em pc_box.json).
[OK] charmander adicionado ao catálogo (salvo em pc_box.json).
[OK] charmeleon adicionado ao catálogo (salvo em pc_box.json).
[OK] charizard adicionado ao catálogo (salvo em pc_box.json).
[OK] squirtle adicionado ao catálogo (salvo em pc_box.json).
[OK] wartortle adicionado ao catálogo (salvo em pc_box.json).
[OK] blastoise adicionado ao catálogo (salvo em pc_box.json).
[OK] caterpie adicionado ao catálogo (salvo em pc_box.json).
[OK] metapod adicionado ao catálogo (salvo em pc_box.json).
[OK] butterfree adicionado ao catálogo (salvo em pc_box.json).
[OK] weedle adicionado ao catálogo (salvo em pc_box.json).
[OK] kakuna adicionado ao catálogo (salvo em pc_box.json).
[OK] beedrill adicionado ao catálogo (salvo em pc_box.json).
[OK] pidgey adicionado ao catálogo (salvo em pc_box.json).
[OK] pidgeotto adicionado ao catálogo (salvo em pc_box.json).
[OK] pidgeot adicionado ao catálogo (salvo em pc_box.json).
[OK] rattata adicionado ao catálogo (salvo em pc_box.json).
[OK] raticate adicionado ao catálogo (salvo em pc_box.json).

==================================================
=== INICIANDO O ROTEIRO DE CENÁRIOS DE TESTE ===
==================================================

[OK] Pokémon encontrado: #25 - pikachu
[OK] pikachu adicionado ao catálogo (salvo em pc_box.json).
[OK] Pokémon encontrado: #4 - charmander
[AVISO] charmander já está no catálogo.
[OK] Pokémon encontrado: #25 - pikachu
[AVISO] pikachu já está no catálogo.
[ERRO] Pokémon não encontrado: pokemon-inexistente

---  CATÁLOGO ATUAL ---
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
#2 - ivysaur | Tipos: grass, poison | Altura: 10 | Peso: 130
#3 - venusaur | Tipos: grass, poison | Altura: 20 | Peso: 1000
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#5 - charmeleon | Tipos: fire | Altura: 11 | Peso: 190
#6 - charizard | Tipos: fire, flying | Altura: 17 | Peso: 905
#7 - squirtle | Tipos: water | Altura: 5 | Peso: 90
#8 - wartortle | Tipos: water | Altura: 10 | Peso: 225
#9 - blastoise | Tipos: water | Altura: 16 | Peso: 855
#10 - caterpie | Tipos: bug | Altura: 3 | Peso: 29
#11 - metapod | Tipos: bug | Altura: 7 | Peso: 99
#12 - butterfree | Tipos: bug, flying | Altura: 11 | Peso: 320
#13 - weedle | Tipos: bug, poison | Altura: 3 | Peso: 32
#14 - kakuna | Tipos: bug, poison | Altura: 6 | Peso: 100
#15 - beedrill | Tipos: bug, poison | Altura: 10 | Peso: 295
#16 - pidgey | Tipos: normal, flying | Altura: 3 | Peso: 18
#17 - pidgeotto | Tipos: normal, flying | Altura: 11 | Peso: 300
#18 - pidgeot | Tipos: normal, flying | Altura: 15 | Peso: 395
#19 - rattata | Tipos: normal | Altura: 3 | Peso: 35
#20 - raticate | Tipos: normal | Altura: 7 | Peso: 185
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
-------------------------


[TESTE] Removendo Pokémon ID 25 (Pikachu)...
[OK] Pokémon removido do catálogo local.

---  CATÁLOGO ATUAL ---
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
#2 - ivysaur | Tipos: grass, poison | Altura: 10 | Peso: 130
#3 - venusaur | Tipos: grass, poison | Altura: 20 | Peso: 1000
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#5 - charmeleon | Tipos: fire | Altura: 11 | Peso: 190
#6 - charizard | Tipos: fire, flying | Altura: 17 | Peso: 905
#7 - squirtle | Tipos: water | Altura: 5 | Peso: 90
#8 - wartortle | Tipos: water | Altura: 10 | Peso: 225
#9 - blastoise | Tipos: water | Altura: 16 | Peso: 855
#10 - caterpie | Tipos: bug | Altura: 3 | Peso: 29
#11 - metapod | Tipos: bug | Altura: 7 | Peso: 99
#12 - butterfree | Tipos: bug, flying | Altura: 11 | Peso: 320
#13 - weedle | Tipos: bug, poison | Altura: 3 | Peso: 32
#14 - kakuna | Tipos: bug, poison | Altura: 6 | Peso: 100
#15 - beedrill | Tipos: bug, poison | Altura: 10 | Peso: 295
#16 - pidgey | Tipos: normal, flying | Altura: 3 | Peso: 18
#17 - pidgeotto | Tipos: normal, flying | Altura: 11 | Peso: 300
#18 - pidgeot | Tipos: normal, flying | Altura: 15 | Peso: 395
#19 - rattata | Tipos: normal | Altura: 3 | Peso: 35
#20 - raticate | Tipos: normal | Altura: 7 | Peso: 185
-------------------------

---

## Conceitos aplicados
- **TypeScript**: Utilização de tipos primitivos, parâmetros fortemente tipados e anotações explícitas de retornos em Promises (`Promise<PokemonResumo | null>`).
- **Interfaces**: Criação das interfaces `PokemonResumo` e `PokemonApiResponse` para blindagem de tipagem dos dados manipulados.
- **Métodos de Array**: Aplicação de métodos modernos e declarativos do JavaScript para manipulação da lista: `.map()` para conversão de tipos da API, `.some()` para validação de duplicidade, `.forEach()` para a listagem formatada e `.filter()` para a remoção segura.
- **Classes**: Estruturação da classe corporativa `CatalogoPokemon` usando o modificador de acesso `private` para encapsular a instância do serviço de arquivos e manter a segurança estrutural.

---

## Branches utilizadas (GitFlow)
As ramificações criadas e enviadas seguem o fluxo lógico do GitFlow sugerido para a entrega do projeto:
- `main`: Código final homologado, estável e pronto para avaliação.
- `develop`: Branch de integração e consolidação técnica das funcionalidades.
- `feat/pokedex`: Branch destinada ao desenvolvimento do consumo da API, persistência local e catálogo.
- `docs/readme`: Branch focada na criação e ajustes da documentação oficial.

## Vídeo de apresentação

Link do vídeo: https://drive.google.com/file/d/1bUBUxuBadf0XuTh7mvDRitfNatRvxGyr/view?usp=sharing