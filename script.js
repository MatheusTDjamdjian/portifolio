/* =========================================================
   Matheus Tasso · Portfolio
   ========================================================= */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* -------- theme toggle -------- */
  const html = document.documentElement;
  const themeToggle = $('#themeToggle');
  const langToggle = $('#langToggle');
  const LANG_KEY = 'portfolio-language';

  const translations = {
    en: {
      pageTitle: 'Matheus Tasso · Web Developer',
      langToggle: 'Switch to Portuguese',
      navHome: 'Home',
      navAbout: 'About',
      navStack: 'Stack',
      navProjects: 'Projects',
      navContact: 'Contact',
      heroBadge: 'Available for new projects',
      heroRole: '<span class="hero__role-tag">&lt;dev&gt;</span> Full-Stack Web Developer <span class="hero__role-divider"></span> Software Engineering Student · FIAP <span class="hero__role-tag">&lt;/dev&gt;</span>',
      heroDesc: 'Building modern, scalable and high-performance web applications with <strong>React</strong>, <strong>Next.js</strong> and <strong>TypeScript</strong>.',
      heroProjects: 'View projects',
      heroContact: 'Get in touch',
      heroMetaYears: 'years<br>of coding',
      heroMetaProjects: 'projects<br>built',
      heroMetaLearn: 'continuous<br>learning',
      heroScrollLabel: 'Scroll to next section',
      aboutSectionNum: '01 / About',
      aboutTitle: 'Who <span class="text-grad">am I?</span>?',
      aboutSubtitle: 'A bit of my story and what moves me as a developer.',
      aboutText1: 'My name is <strong>Matheus Tasso</strong>, I am 18 years old and I study Software Engineering at <strong>FIAP</strong>. I currently work at <strong>Envoy</strong>, a technology company located in São Paulo\'s North Zone, where I develop modern web applications with React, Next.js, JavaScript and TypeScript, and work daily with API integration and consumption to deliver scalable and high-performance solutions. On a daily basis, I use Git for version control, apply automated testing and continuous integration practices, and strive to keep clean, typed and sustainable code. I also work on accounting-related tasks, which gives me a broader view of how technology connects to real business processes and creates strategic value for companies.',
      aboutText2: 'I consider myself a <strong>communicative, curious and driven by challenges</strong> person, with a strong interest in growing both technical skills and soft skills. I enjoy working in a team, discussing architecture, solving complex problems and optimizing code whenever possible. I have solid experience with responsive design, mobile-first development, web performance and SEO best practices, always aligned with market trends and standards. Passionate about technology, games and sports, my goal is to build a career as a <strong>full-stack developer</strong>, combining dedication, continuous learning and innovation to deliver projects that really make a difference.',
      aboutHighlightWorkLabel: 'Working at',
      aboutHighlightWorkValue: 'Envoy',
      aboutHighlightStudyLabel: 'Studying at',
      aboutHighlightStudyValue: 'FIAP',
      aboutHighlightLocationLabel: 'Location',
      aboutHighlightLocationValue: 'São Paulo, BR',
      aboutCv: 'Download CV',
      skillsSectionNum: '02 / Stack',
      skillsTitle: 'Technologies I use',
      skillsSubtitle: 'Tools I use to build from front to back.',
      skillsFrontHeading: 'Front-end',
      skillsFrontText: 'Modern, performant and responsive interfaces.',
      skillsBackHeading: 'Back-end',
      skillsBackText: 'APIs, business logic and data.',
      skillsToolsHeading: 'Tools',
      skillsToolsText: 'Workflow, design and productivity.',
      projectsSectionNum: '03 / Projects',
      projectsTitle: 'Featured <span class="text-grad">Projects</span>',
      projectsSubtitle: 'Personal projects and challenges that helped shape my journey.',
      projectWisedev: 'A landing page for a client, designed to showcase the company’s main project.',
      projectBrazilData: 'Zero-LLM deterministic agent that queries Brazilian public data via MCP server: CNPJ - CEP - Simples Nacional - Fiscal deadlines.',
      projectSaas: 'SaaS management system for bakeries and confectioneries: Recipes - Orders - Costs - Control.',
      projectInvestorAnalysis: 'Real-time cryptocurrency monitoring dashboard: Price - Conversion - Variation - Chart - Statistics.',
      projectConverter: 'Tool for file conversion — images, documents and PDFs — with two interfaces: a robust CLI for automation and a modern local web interface for casual use.',
      projectWonGames: 'A digital games e-commerce focused on performance, strong typing and reusable components: Filters - Authentication - Flow.',
      projectDevLinks: 'Simple virtual business card to present a professional portfolio.',
      projectLoginScreen: 'Responsive login screen.',
      projectFlappyBird: 'Recreation of the Flappy Bird game, including a menu and additional features.',
      projectGoogleKeep: 'A simplified recreation of Google Keep.',
      projectViewSite: 'View site',
      projectCode: 'Code',
      contactSectionNum: '04 / Contact',
      contactTitle: 'Let\'s <span class="text-grad">talk?</span>',
      contactSubtitle: 'I\'m open to new opportunities, freelance work and collaborative projects.',
      contactCardTitle: 'Talk to me',
      contactCardText: 'You can send a message here or through my networks — I usually reply quickly.',
      contactEmailLabel: 'Email',
      contactLocationLabel: 'Location',
      contactLocationValue: 'São Paulo, Brazil',
      contactAvailabilityLabel: 'Availability',
      contactAvailabilityValue: 'Open to opportunities',
      contactNameLabel: 'Your name',
      contactEmailFormLabel: 'Your best email',
      contactMessageLabel: 'How can I help you?',
      contactSubmit: 'Send message',
      backToTopLabel: 'Back to top',
      footerCopy: 'Made by <strong>Matheus Tasso</strong> <img src="./img/bussola.svg" alt="" aria-hidden="true"><span>· All rights reserved</span>'
    },
    pt: {
      pageTitle: 'Matheus Tasso · Desenvolvedor Web',
      langToggle: 'Alternar para inglês',
      navHome: 'Início',
      navAbout: 'Sobre',
      navStack: 'Stack',
      navProjects: 'Projetos',
      navContact: 'Contato',
      heroBadge: 'Disponível para novos projetos',
      heroRole: '<span class="hero__role-tag">&lt;dev&gt;</span> Desenvolvedor Web <span class="hero__role-divider"></span> Eng. de Software · FIAP <span class="hero__role-tag">&lt;/dev&gt;</span>',
      heroDesc: 'Construindo experiências web modernas, escaláveis e performáticas com <strong>React</strong>, <strong>Next.js</strong> e <strong>TypeScript</strong>.',
      heroProjects: 'Ver projetos',
      heroContact: 'Entrar em contato',
      heroMetaYears: 'anos<br>codando',
      heroMetaProjects: 'projetos<br>construídos',
      heroMetaLearn: 'vontade<br>de aprender',
      heroScrollLabel: 'Rolar para a próxima seção',
      aboutSectionNum: '01 / Sobre',
      aboutTitle: 'Quem é o <span class="text-grad">Matheus</span>?',
      aboutSubtitle: 'Um pouco da minha história e do que me move como desenvolvedor.',
      aboutText1: 'Me chamo <strong>Matheus Tasso</strong>, tenho 18 anos e curso Engenharia de Software na <strong>FIAP</strong>. Atualmente integro o time da <strong>Envoy</strong>, empresa de tecnologia situada na Zona Norte de São Paulo, onde desenvolvo aplicações web modernas com React, Next.js, JavaScript e TypeScript, além de trabalhar diariamente com integração e consumo de APIs para entregar soluções escaláveis e performáticas. No dia a dia, utilizo Git para versionamento, aplico práticas de testes automatizados e integração contínua, e busco manter um código limpo, tipado e sustentável. Também atuo em demandas ligadas à área contábil, o que me proporciona uma visão mais ampla sobre como a tecnologia se conecta a processos reais de negócio e gera valor estratégico para as empresas.',
      aboutText2: 'Me considero uma pessoa <strong>comunicativa, curiosa e movida a desafios</strong>, com forte interesse em evoluir tanto na parte técnica quanto nas soft skills. Gosto de trabalhar em equipe, discutir arquitetura, resolver problemas complexos e otimizar código sempre que possível. Tenho experiência sólida com design responsivo, desenvolvimento mobile-first, performance web e boas práticas de SEO, sempre alinhado às tendências e padrões do mercado. Apaixonado por tecnologia, jogos e esportes, meu objetivo é consolidar uma carreira como desenvolvedor <strong>full-stack</strong>, somando dedicação, aprendizado contínuo e inovação para entregar projetos que realmente façam diferença.',
      aboutHighlightWorkLabel: 'Trabalhando na',
      aboutHighlightWorkValue: 'Envoy',
      aboutHighlightStudyLabel: 'Estudando na',
      aboutHighlightStudyValue: 'FIAP',
      aboutHighlightLocationLabel: 'Localização',
      aboutHighlightLocationValue: 'São Paulo, BR',
      aboutCv: 'Download do CV',
      skillsSectionNum: '02 / Stack',
      skillsTitle: 'Tecnologias que <span class="text-grad">utilizo</span>',
      skillsSubtitle: 'Ferramentas com as quais construo do front ao back.',
      skillsFrontHeading: 'Front-end',
      skillsFrontText: 'Interfaces modernas, performáticas e responsivas.',
      skillsBackHeading: 'Back-end',
      skillsBackText: 'APIs, lógica de negócio e dados.',
      skillsToolsHeading: 'Ferramentas',
      skillsToolsText: 'Workflow, design e produtividade.',
      projectsSectionNum: '03 / Projetos',
      projectsTitle: 'Projetos <span class="text-grad">realizados</span>',
      projectsSubtitle: 'Projetos pessoais e desafios que ajudaram a moldar minha trajetória.',
      projectWisedev: 'Uma landing page para um cliente, projetada para apresentar o principal projeto da empresa.',
      projectBrazilData: 'Agente determinístico zero-LLM que consulta dados públicos brasileiros via servidor MCP: CNPJ - CEP - Simples Nacional - Prazos fiscais.',
      projectSaas: 'Sistema de gestão SaaS para confeitarias e doceiras de encomenda: Receitas - Encomendas - Custos - Controle.',
      projectInvestorAnalysis: 'Dashboard de monitoramento de criptomoedas em tempo real: Preço - Conversão - Variação - Gráfico - Estatística.',
      projectConverter: 'Ferramenta para conversão de arquivos — imagens, documentos e PDFs — com duas interfaces: uma CLI robusta para automação e uma interface web local com design moderno para uso casual.',
      projectWonGames: 'Um e-commerce de jogos digitais com foco em performance, tipagem forte e componentes reutilizáveis: Filtros - Autenticação - Fluxo.',
      projectDevLinks: 'Cartão de visita virtual simples para apresentar um portfólio profissional.',
      projectLoginScreen: 'Tela de login responsiva.',
      projectFlappyBird: 'Recriação do jogo Flappy Bird, incorporando um menu e outros recursos adicionais.',
      projectGoogleKeep: 'Um projeto com o objetivo de recriar, de forma simplificada, o site do Google.',
      projectViewSite: 'Ver site',
      projectCode: 'Código',
      contactSectionNum: '04 / Contato',
      contactTitle: 'Vamos <span class="text-grad">conversar?</span>',
      contactSubtitle: 'Tenho interesse em novas oportunidades, freelas e projetos colaborativos.',
      contactCardTitle: 'Fale comigo',
      contactCardText: 'Pode mandar uma mensagem por aqui ou pelas minhas redes — costumo responder rápido.',
      contactEmailLabel: 'E-mail',
      contactLocationLabel: 'Localização',
      contactLocationValue: 'São Paulo, Brasil',
      contactAvailabilityLabel: 'Disponibilidade',
      contactAvailabilityValue: 'Aberto a oportunidades',
      contactNameLabel: 'Seu nome',
      contactEmailFormLabel: 'Seu melhor e-mail',
      contactMessageLabel: 'Como posso te ajudar?',
      contactSubmit: 'Enviar mensagem',
      backToTopLabel: 'Voltar para o topo',
      footerCopy: 'Feito por <strong>Matheus Tasso</strong> <img src="./img/bussola.svg" alt="" aria-hidden="true"><span>· Todos os direitos reservados</span>'
    }
  };

  const applyTheme = (theme) => {
    html.dataset.theme = theme;
    localStorage.setItem('theme', theme);

    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
      );
    }
  };

  const i18nKeys = Object.keys(translations.en).filter((key) => key !== 'pageTitle' && key !== 'langToggle');

  const applyI18n = (lang) => {
    document.title = translations[lang].pageTitle;
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';

    i18nKeys.forEach((key) => {
      const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
      elements.forEach((element) => {
        const value = translations[lang][key];
        if (value != null) {
          if (value.includes('<')) {
            element.innerHTML = value;
          } else {
            element.textContent = value;
          }
        }
      });
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      const attrKey = element.dataset.i18nAttr;
      const attrValue = translations[lang][attrKey];
      if (attrValue) element.setAttribute('aria-label', attrValue);
    });

    if (langToggle) {
      langToggle.setAttribute('aria-label', translations[lang].langToggle);
    }
  };

  const setLanguage = (lang) => {
    localStorage.setItem(LANG_KEY, lang);
    html.dataset.lang = lang;
    applyI18n(lang);
  };

  const initLanguage = () => {
    const savedLanguage = localStorage.getItem(LANG_KEY);
    const initialLanguage = savedLanguage || 'en';
    setLanguage(initialLanguage);
  };

  const initTheme = () => {
    const saved = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = saved || (prefersLight ? 'light' : 'dark');
    applyTheme(theme);

    if (!saved) {
      window
        .matchMedia('(prefers-color-scheme: light)')
        .addEventListener('change', (e) => {
          if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'light' : 'dark');
        });
    }
  };
  initTheme();
  initLanguage();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = html.dataset.lang || 'en';
      setLanguage(currentLang === 'en' ? 'pt' : 'en');
    });
  }

  /* -------- mobile menu -------- */
  const menuTrigger = $('#menuTrigger');
  const navMenu = $('#navMenu');

  const closeMenu = () => {
    if (!menuTrigger || !navMenu) return;
    menuTrigger.classList.remove('is-open');
    navMenu.classList.remove('is-open');
    menuTrigger.setAttribute('aria-expanded', 'false');
  };

  if (menuTrigger && navMenu) {
    menuTrigger.addEventListener('click', () => {
      const open = navMenu.classList.toggle('is-open');
      menuTrigger.classList.toggle('is-open', open);
      menuTrigger.setAttribute('aria-expanded', String(open));
    });

    $$('a', navMenu).forEach((a) => a.addEventListener('click', closeMenu));

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuTrigger.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* -------- nav scroll state + active section + scroll progress + back-to-top -------- */
  const nav = $('#nav');
  const progress = $('.scroll-progress span');
  const backToTop = $('.back-to-top');
  const navLinks = $$('[data-nav]');
  const sections = navLinks
    .map((a) => $(a.getAttribute('href')))
    .filter(Boolean);

  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (y / docH) * 100 : 0;

    if (nav) nav.classList.toggle('is-scrolled', y > 16);
    if (progress) progress.style.width = `${pct}%`;
    if (backToTop) backToTop.classList.toggle('is-visible', y > 600);

    /* active section: pick the one whose top is closest above viewport center */
    if (sections.length) {
      const offset = window.innerHeight * 0.35;
      let activeIdx = 0;
      sections.forEach((sec, i) => {
        const top = sec.getBoundingClientRect().top;
        if (top - offset <= 0) activeIdx = i;
      });
      navLinks.forEach((l, i) => l.classList.toggle('is-active', i === activeIdx));
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  onScroll();

  /* -------- reveal on scroll -------- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('is-revealed'), Number(delay));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  }

  /* -------- magnetic effect on primary buttons (subtle) -------- */
  const magnets = $$('.btn--primary');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    magnets.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* -------- footer year -------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
