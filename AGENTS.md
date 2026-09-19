# SETLIST.EXE — Project Context

## 1. Projeto

Nome do projeto:

`setlist.exe`

Descrição:

Aplicação web para gerenciamento de setlists de bandas, com foco inicial em organizar músicas para apresentações ao vivo.

A aplicação está sendo desenvolvida como um projeto de estudo e também como uma ferramenta potencialmente utilizável pela banda do usuário.

A ideia visual é uma aplicação com estética inspirada em softwares dos anos 2000, especialmente:

* Windows XP
* players de música dos anos 2000
* Guitar Hero 3
* interfaces antigas de programas de computador
* setlists impressas em papel

Importante: a aplicação deve ser inspirada nessa estética, mas não deve copiar diretamente logos, assets, screenshots ou elementos proprietários dessas marcas/jogos.

---

## 2. Objetivo inicial

O objetivo da primeira versão é permitir:

* cadastrar músicas
* visualizar músicas
* organizar músicas em uma setlist
* editar informações das músicas
* reorganizar a ordem das músicas
* salvar os dados localmente no navegador
* visualizar uma setlist com aparência de software antigo
* futuramente imprimir/exportar a setlist

A primeira versão NÃO precisa ter:

* login
* banco de dados
* sistema de usuários
* colaboração online
* upload de áudio
* backend complexo

Esses recursos podem ser adicionados posteriormente.

---

## 3. Contexto musical

O projeto nasceu da necessidade de organizar setlists de uma banda de nu metal.

As setlists possuem várias restrições musicais e práticas, por exemplo:

* diferentes afinações
* diferentes vocalistas
* determinadas músicas precisam aparecer cedo
* determinadas músicas precisam ficar no final
* algumas músicas funcionam melhor como abertura
* algumas funcionam melhor como encerramento
* certas sequências podem cansar o baterista
* transições entre músicas podem ser importantes
* duração total do show é relevante
* energia das músicas pode ser relevante

Por isso, futuramente a aplicação poderá ter informações como:

* afinação
* vocalista
* duração
* BPM
* tonalidade
* observações
* dificuldade
* energia
* posição recomendada
* instrumentos envolvidos

---

# 4. Stack escolhida

O projeto utiliza:

* Next.js
* React
* JavaScript
* CSS tradicional
* ESLint
* App Router
* Turbopack
* React Compiler

Não utilizar TypeScript inicialmente.

Não utilizar Tailwind CSS inicialmente.

Motivo:

O usuário está voltando a estudar desenvolvimento web depois de aproximadamente 3 anos afastado.

Ele quer reaprender os fundamentos enquanto constrói o projeto.

Por isso, a complexidade deve ser introduzida gradualmente.

---

# 5. Configuração escolhida do Next.js

Durante a criação do projeto foram escolhidas estas opções:

```text
TypeScript: No
ESLint: Yes
React Compiler: Yes
Tailwind CSS: No
src/ directory: Yes
App Router: Yes
Turbopack: Yes
Customize import alias: No
```

---

# 6. Estrutura inicial

A estrutura inicial esperada é semelhante a:

```text
setlist.exe/
├── public/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       ├── page.js
│       └── page.module.css
├── package.json
├── package-lock.json
├── next.config.*
└── ...
```

A estrutura será reorganizada conforme o projeto crescer.

Uma estrutura futura possível:

```text
src/
└── app/
    ├── page.js
    ├── globals.css
    │
    ├── components/
    │   ├── Window.js
    │   ├── SongRow.js
    │   ├── Setlist.js
    │   └── Button.js
    │
    └── data/
        └── songs.js
```

Não criar todos esses arquivos imediatamente.

Os componentes devem ser criados conforme forem necessários.

---

# 7. Estado atual

O projeto acabou de ser criado com Next.js.

O `src/app/page.js` ainda contém o template padrão gerado pelo `create-next-app`.

Conteúdo inicial:

```js
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>
            To get started, edit the{" "}
            <code className={styles.code}>page.js</code> file.
          </h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
```

Esse template ainda não foi modificado.

---

# 8. Primeiro objetivo de desenvolvimento

Antes de implementar funcionalidades, o usuário quer entender a estrutura do projeto.

A sequência inicial planejada é:

```text
1. Entender o template do Next.js
2. Entender page.js
3. Entender JSX
4. Entender componentes React
5. Remover o template padrão
6. Criar a primeira interface do SETLIST.EXE
7. Criar as entidades
8. Criar a primeira lista de músicas
9. Renderizar as músicas na interface
10. Criar interação
```

O usuário quer aprender construindo.

Não entregar grandes blocos de código sem explicação quando o conceito ainda não foi estudado.

---

# 9. Entidades

A primeira entidade planejada é `Song`.

Uma música será representada inicialmente como um objeto JavaScript:

```js
const song = {
  id: 1,
  title: "My Own Summer",
  artist: "Deftones",
  tuning: "Drop C",
  vocalist: "Vocal 1",
  duration: "3:35",
  notes: ""
};
```

As propriedades iniciais são:

```text
id
title
artist
tuning
vocalist
duration
notes
```

Uma coleção de músicas será um array:

```js
const songs = [
  {
    id: 1,
    title: "My Own Summer",
    artist: "Deftones",
    tuning: "Drop C",
    vocalist: "Vocal 1",
    duration: "3:35",
    notes: ""
  },
  {
    id: 2,
    title: "Freak on a Leash",
    artist: "Korn",
    tuning: "A Standard",
    vocalist: "Vocal 2",
    duration: "4:15",
    notes: ""
  }
];
```

A entidade `Setlist` será implementada posteriormente.

Estrutura conceitual:

```js
const setlist = {
  id: 1,
  name: "Show 01",
  songs: []
};
```

Inicialmente, a setlist poderá armazenar IDs de músicas:

```js
const setlist = {
  id: 1,
  name: "Show 01",
  songs: [1, 2, 3]
};
```

Não é necessário implementar isso imediatamente.

---

# 10. Conceitos que o usuário está reaprendendo

O usuário está voltando ao desenvolvimento web.

Deve-se explicar conceitos de maneira progressiva.

Conceitos importantes:

## JavaScript

* variáveis
* `const`
* `let`
* objetos
* propriedades
* arrays
* funções
* métodos
* `map`
* `filter`
* eventos
* módulos
* import/export

## React

* componentes
* JSX
* props
* state
* eventos
* renderização de listas
* `useState`
* `useEffect` quando necessário

## Next.js

* App Router
* `page.js`
* `layout.js`
* componentes
* rotas
* CSS Modules
* arquivos estáticos
* Server Components e Client Components quando forem relevantes

Não antecipar conceitos avançados sem necessidade.

---

# 11. Design planejado

O visual deve parecer um programa de computador dos anos 2000.

Referências conceituais:

```text
Windows XP
Guitar Hero 3
players de música
programas antigos
interfaces desktop
setlists impressas
```

Características possíveis:

* barras de título
* botões com aparência física
* bordas
* sombras
* gradientes
* elementos com relevo
* painéis
* tabs
* pequenas janelas
* tipografia apropriada
* aparência de software desktop
* aparência de papel para a setlist final

Uma possibilidade para a janela principal:

```text
┌──────────────────────────────────────────┐
│ SETLIST.EXE                        _ □ X │
├──────────────────────────────────────────┤
│                                          │
│  MINHA SETLIST                           │
│                                          │
│  01  Song A       Drop C     Vocal 1     │
│  02  Song B       Drop D     Vocal 2     │
│  03  Song C       Drop C     Vocal 1     │
│                                          │
│        [ + ADICIONAR MÚSICA ]            │
│                                          │
└──────────────────────────────────────────┘
```

Isso é apenas uma referência visual, não uma implementação definitiva.

---

# 12. Roadmap

## Fase 1 — Fundação

* criar projeto Next.js
* entender estrutura
* remover template padrão
* criar primeira página

## Fase 2 — Interface

* criar janela principal
* criar título SETLIST.EXE
* criar navegação
* criar área da setlist
* criar componentes visuais

## Fase 3 — Músicas

* criar entidade `Song`
* criar array de músicas
* renderizar músicas
* criar `SongRow`
* adicionar informações musicais

## Fase 4 — Edição

* adicionar música
* editar música
* remover música
* formulário

## Fase 5 — Setlists

* criar setlist
* adicionar músicas à setlist
* remover músicas
* reorganizar ordem

## Fase 6 — Persistência

Inicialmente:

```text
LocalStorage
```

Não usar banco de dados ainda.

## Fase 7 — Recursos musicais

Possíveis recursos:

* BPM
* tonalidade
* afinação
* vocalista
* duração
* observações
* energia
* dificuldade

## Fase 8 — Organização avançada

* drag and drop
* filtros
* busca
* agrupamento por afinação
* análise da duração
* duração total do show

## Fase 9 — Apresentação

* modo show
* setlist limpa
* visualização para palco
* impressão
* exportação

## Fase 10 — Futuro

Somente se houver necessidade:

* backend
* banco de dados
* login
* múltiplos usuários
* compartilhamento
* armazenamento de áudio
* sincronização online

---

# 13. Princípios de desenvolvimento

1. Priorizar aprendizado.

2. Explicar conceitos antes de introduzir abstrações complexas.

3. Não transformar o projeto em um tutorial gigantesco sem necessidade.

4. Evitar dependências externas desnecessárias.

5. Preferir JavaScript simples inicialmente.

6. Usar CSS tradicional.

7. Criar componentes somente quando fizer sentido.

8. Não criar arquitetura excessivamente complexa para uma aplicação pequena.

9. Fazer o projeto funcionar antes de tentar torná-lo perfeito.

10. Manter o visual retrô como parte importante da identidade do projeto.

11. Sempre que houver uma decisão técnica importante, explicar o motivo.

12. Se houver mais de uma abordagem válida, explicar brevemente as diferenças antes de escolher.

---

# 14. Estilo de ensino desejado

O usuário está estudando programação.

A assistência deve funcionar como uma combinação de:

* professor
* parceiro de programação
* revisor de código
* arquiteto quando necessário

Não simplesmente fornecer código pronto.

Quando o usuário estiver aprendendo um conceito novo:

1. explicar o conceito
2. mostrar um exemplo pequeno
3. explicar o exemplo
4. aplicar ao SETLIST.EXE
5. deixar o projeto evoluir gradualmente

Evitar assumir conhecimento de tecnologias que o usuário acabou de começar a usar.

---

# 15. Estado atual exato

O projeto está no ponto em que:

* Next.js já foi criado
* React já está configurado
* ESLint está configurado
* React Compiler foi habilitado
* TypeScript não foi habilitado
* Tailwind não foi habilitado
* `src/` foi habilitado
* App Router foi habilitado
* Turbopack foi habilitado
* import alias personalizado não foi habilitado
* `page.js` ainda é o template padrão
* o projeto ainda não possui entidades implementadas
* nenhuma interface própria foi implementada
* nenhuma persistência foi implementada
* nenhuma funcionalidade de setlist foi implementada

O próximo passo recomendado é continuar o estudo de `page.js`, entender o template do Next.js e então substituí-lo gradualmente pela primeira versão do SETLIST.EXE.

---

# 16. Regra principal

Este projeto é tanto uma aplicação quanto um projeto de estudo.

Não otimizar apenas para velocidade de implementação.

O objetivo é que o usuário entenda o código que está escrevendo e consiga posteriormente desenvolver novas funcionalidades sozinho.
