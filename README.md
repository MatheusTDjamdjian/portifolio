<h1 align="center">Portfólio · Matheus Tasso</h1>

<p align="center">
  Portfólio pessoal de <strong>Matheus Tasso</strong> — desenvolvedor web e estudante de
  Engenharia de Software na FIAP. Construído com foco em design moderno, performance,
  responsividade e boas práticas de front-end.
</p>

<p align="center">
  <a href="#-visão-geral">Visão geral</a> &nbsp;·&nbsp;
  <a href="#-tecnologias">Tecnologias</a> &nbsp;·&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a> &nbsp;·&nbsp;
  <a href="#-estrutura">Estrutura</a> &nbsp;·&nbsp;
  <a href="#-como-rodar">Como rodar</a> &nbsp;·&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img alt="Responsive" src="https://img.shields.io/badge/Mobile_First-FF5B1F?style=flat-square">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-49AA26?style=flat-square&labelColor=000000">
</p>

<br>

## 🌐 Visão geral

Este projeto é um portfólio one-page com identidade visual sofisticada, desenvolvido
do zero em **HTML, CSS e JavaScript puros** — sem frameworks. A proposta foi criar
uma experiência moderna que comunique competência técnica através do próprio design.

**Destaques de design:**

- Estética **dark-first** com toggle suave para modo claro
- **Glassmorphism** na navegação flutuante com `backdrop-filter`
- Background ambiente com **grid pattern**, glows animados e noise overlay
- Tipografia em três famílias variáveis: Space Grotesk (display), Inter (corpo) e JetBrains Mono (código)
- **Reveal animations** acionadas por `IntersectionObserver`
- Micro-interações: efeito magnético em botões, marquee infinito, chips orbitando, cursor piscando, gradient shine
- 100% responsivo com 5 breakpoints (≥1080, ≥860, ≥640, ≥420)

## 🚀 Tecnologias

Construído com tecnologias web nativas, sem dependências de runtime:

- **HTML5** semântico e acessível (ARIA, `aria-expanded`, `aria-label`)
- **CSS3** moderno: Custom Properties, Grid, Flexbox, `backdrop-filter`, `clamp()`, `aspect-ratio`, `mask-image`
- **JavaScript (ES6+)**: módulo IIFE, `IntersectionObserver`, `matchMedia`, `requestAnimationFrame`, `localStorage`
- **Boxicons** para ícones
- **Google Fonts**: Space Grotesk · Inter · JetBrains Mono
- **FormSubmit** para envio do formulário de contato
- **Git** e **GitHub** para versionamento

## ✨ Funcionalidades

- [x] Hero com apresentação animada e métricas pessoais
- [x] Seção "Sobre" com foto enquadrada, biografia e chips de informação
- [x] Stack categorizada em **Front-end · Back-end · Ferramentas**
- [x] Marquee horizontal infinito com as principais tecnologias
- [x] Galeria de projetos em grid responsivo com tags e links para deploy/código
- [x] Formulário de contato funcional com **floating labels** e validação nativa
- [x] **Dark / Light mode** com persistência via `localStorage` e respeito a `prefers-color-scheme`
- [x] **Scroll progress bar** com glow no topo da página
- [x] **Active section highlight** na navegação durante o scroll
- [x] Botão **back-to-top** que aparece após scroll
- [x] Menu mobile com drawer animado (fecha com `Esc` ou click externo)
- [x] Suporte a `prefers-reduced-motion` para acessibilidade

## 📁 Estrutura

```
portifolio/
├── assets/
│   └── curriculo-front-end.pdf      # CV para download
├── img/                              # Ícones de tecnologias e imagens
├── index.html                        # Markup semântico
├── style.css                         # Design system + responsivo
├── script.js                         # Theme, menu, scroll, reveal
└── README.md
```

## 🧩 Seções

| Seção         | O que tem                                                                 |
| ------------- | ------------------------------------------------------------------------- |
| **Início**    | Badge de status, título com gradiente animado, métricas, CTA, code editor |
| **Sobre**     | Foto, biografia em dois parágrafos e chips com empresa, faculdade e local |
| **Stack**     | Marquee + 3 cards categorizados com 20+ tecnologias                       |
| **Projetos**  | Grid de 9 projetos com tag, descrição e links para site/repositório       |
| **Contato**   | Card de informações + formulário com floating labels                      |

## 💻 Como rodar

O projeto é totalmente estático — basta um servidor HTTP simples para visualizar.

```bash
# clone o repositório
git clone https://github.com/MatheusTDjamdjian/portifolio.git
cd portifolio

# opção 1 — abrir diretamente no navegador
open index.html      # macOS
start index.html     # Windows

# opção 2 — servidor local (recomendado)
npx serve .
# ou
python3 -m http.server 8000
```

Acesse <http://localhost:8000> (ou a porta apresentada pelo `serve`).

## 🎨 Customização

A maior parte do visual é controlada por **CSS Custom Properties** definidas em
`:root` (tema escuro) e `html[data-theme='light']` (tema claro) no início do
[`style.css`](./style.css). Para ajustar a paleta, edite os tokens:

```css
:root {
  --accent: #ff5b1f;       /* cor de destaque */
  --accent-2: #ff8a4c;     /* tom secundário */
  --bg: #0a0a0f;           /* fundo principal */
  --text: #f5f5f7;         /* texto principal */
  /* ... */
}
```

## 📫 Contato

- **LinkedIn:** [matheustassodjam](https://www.linkedin.com/in/matheustassodjam/)
- **GitHub:** [MatheusTDjamdjian](https://github.com/MatheusTDjamdjian)

## 📝 Licença

Este projeto está sob a licença **MIT** — sinta-se livre para clonar, estudar e
adaptar. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<p align="center">
  Feito com dedicação por <strong>Matheus Tasso</strong>
  <img src="./img/bussola.svg" alt="" width="18" align="center">
</p>
