<h1 align='center'> Dinâmica frontend - Pokedex</h1>

## Índices

- [O que é o projeto](#projectDescription)
- [Organização da equipe](#groups)
- [Link de acesso ao design e dados sobre a poke API](#project)
- [Etapas do projeto e critério de avaliação](#criteria)


<h3 id='projectDescription'>O que é o projeto?</h3>

Esse projeto foi criado para testar a dinâmica entre vocês como desenvolvedores, o projeto consiste em recriar uma interface gráfica em dupla. Abaixo será repassado o link de acesso ao design do projeto. Por se tratar de um projeto em dupla, ambos deverão gerenciar o tempo e dividir as tarefas de forma equivalente. 

Abaixo será dado instruções mais técnicas referente a qual *endpoint* será necessário acessar.

---

<h3 id='groups'>Organização da equipe</h3>


Cada grupo será composto de dois a três integrantes, vocês deverão criar uma **branch** nova com o nome do grupo e lá deverão juntar o trabalho da equipe, segue abaixo as instruções de como deverá ser feito a nova branch:

O projeto base está localizado na branch **pokedex-base**, é apenas um projeto default next js, já configurado com tailwind e typescript.


- Para criar uma branch a partir do projeto use:

```
git checkout -b nomeDoSeuGrupo origin/pokedex-base
```

- Após criar local, agora é necessário subir para o remoto:

```
git push -u origin nomeDoSeuGrupo
```

#### Dica para evitar problemas de merge durante a conciliação das branchs


- Vocês estão trabalhando em equipe, portanto para mergear de forma correta, suba um de cada vez.
Após subir as novas modificações, peça para o colega dar pull das mudanças que você fez.

- Sempre antes de subir, dê pull da branch do grupo.

---

<h3 id='project'>Link de acesso e dados sobre a poke API</h3>

A *API* utilizada para esse projeto é conhecida como **Poke API**, vocês deverão conversar e usar os seguintes endpoints para o projeto:

```
https://pokeapi.co/api/v2/pokemon?limit=60&offset=0
```

```
https://pokeapi.co/api/v2/pokemon/ditto
```


- Ambos endpoints foram baseados na própria documentação, segue o link de acesso:

[Poke API - documentação](https://pokeapi.co/)


- Link de acesso ao design:

[Figma do projeto](https://www.figma.com/design/r9ILc1psJKnJY79lFtcHTn/Vereda---Projeto-Pokemon?node-id=0-1&t=HIWdhFORMCZxhU4T-1)

---

<h3 id='criteria'>Etapas do projeto e critério de avaliação</h3>

Segue uma recomendação do que será avaliado, não é necessário completar todas as etapas, mas serão adicionais interessantes caso consiga realizar: 

#### Critérios de avaliação

1. Renderizar os itens de acordo com o design proposto.
2. Adicionar barra de procura para filtrar o pokemon baseado na escolha do usuário.
3. Adicionar as cores do card baseado no tipo do pokemón, [lista de cores](#pokemonColorScheme).
4. Adicionar um **carregar mais** ou infinite scroll para renderizar novos pokemons à lista.



<details>
    <summary>
        <h4 id='pokemonColorScheme'>Lista de cores</h4>
    </summary>

- normal: "#a4acaf",
- fighting: "#d56723",
- flying: "#7ecdf7",
- poison: "#6f55af",
- ground: "#906727",
- rock: "#a38c21",
- bug: "#729f3f",
- ghost: "#7b62a3",
- steel: "#9eb7b8",
- fire: "#fd7d24",
- water: "#4592c4",
- grass: "#9bcc50",
- electric: "#eed535",
- psychic: "#f355b9",
- ice: "#51c4e7",
- dragon: "#fc801e",
- dark: "#707070",
- fairy: "#fdb9e9",
- unknown: "#666666",
- shadow: "#3b3b3b"

</details>
