// Central string table for the bilingual site.
//
// Editing rule: every key must exist in both `en` and `fr` with the same
// shape. TypeScript will yell at you if you forget one. French copy is
// Québécois — written for a Quebec-based CPG audience.

import type { Locale } from './routes';

export const strings = {
  en: {
    meta: {
      defaultTitle: 'RippleHouse — Home of impactful business growth',
      defaultDescription:
        'RippleHouse helps CPG brands scale profitably through operator-led execution. Built by operators. Designed for growth.',
      contactTitle: 'Get in touch — RippleHouse',
      contactDescription:
        "Tell us about your brand. Let's build your growth plan together.",
      thanksTitle: 'Thanks — RippleHouse',
      thanksDescription: "We've got your note.",
    },

    nav: {
      whatWeDo: 'What we do',
      ourHouse: 'Our House',
      letsTalk: "Let's talk",
      home: 'home',
      toggleMenu: 'Toggle menu',
    },

    hero: {
      eyebrow: 'Company · Est. Montréal',
      headlineLine1: 'Home of',
      headlineHighlight: 'impactful',
      headlineLine2: 'business growth.',
      lede:
        'We help CPG brands scale profitably through operator-led execution for impactful growth.',
    },

    about: {
      eyebrow: 'About us',
      blurb:
        'RippleHouse exists for brands — and the people behind them — who want to scale with intention and create meaningful impact.',
      heading: 'We are operators first — not just advisors.',
      paragraph1:
        "Most brands don't fail because of product. They fail because they can't scale correctly. Growth exposes every weakness in a business — strategy gaps, operational strain, weak margins, misaligned partnerships, poor retail execution and cultural cracks.",
      paragraph2:
        "We understand that reality because we've lived it — together, we can solve this problem. Our founder-to-founder methodology is built on experience, precision, and execution.",
    },

    whatWeDo: {
      eyebrow: 'The RippleHouse Effect',
      heading: 'What do we actually do?',
      serviceTag: 'service',
      services: [
        {
          number: '01',
          title: 'Commercial Growth Plan',
          outcome:
            'Turn your unfair advantage into scalable & impactful growth.',
          summary: 'A clear, actionable path to profitable scale.',
        },
        {
          number: '02',
          title: 'On-Demand Consulting',
          outcome: 'World class support where it actually matters.',
          summary:
            'Where strategy & execution intersect for support across sales, operations, finance & marketing.',
        },
        {
          number: '03',
          title: 'Fractional Country Manager',
          outcome: 'Embedded across all functions.',
          summary: 'Operations, Marketing, Finance & Sales.',
        },
      ],
    },

    howItWorks: {
      eyebrow: 'How it works?',
      blurb:
        "We don't stop at strategy — we build it through until it works. We combine analytical rigor with a strategy-first, execution-driven mindset.",
      // The big editorial sentence is split into chunks so the <Reveal>
      // highlight spans can sit on the right words.
      sentence: {
        before: 'We identify your ',
        reveal1: 'unfair advantage',
        middle1: ', align it with a real market need, structure it strategically, and ',
        reveal2: 'activate it',
        middle2: ' commercially — so it drives measurable growth and ',
        reveal3: 'lasting',
        spacer: ' ',
        reveal4: 'impact',
        after: '.',
      },
    },

    team: {
      eyebrow: 'Our House',
      headingLine1: "We've built & scaled brands before.",
      headingLine2: 'We build now, with you.',
      previouslyLabel: 'Previously',
      members: [
        {
          name: 'Victor-Antoine Gauthier',
          role: 'Founder',
          quote:
            "I'm deeply passionate about people. Understanding how we can scale brands while positively impacting the humans & the ecosystem behind them is what motivates me most. Helping scale brands the right way—sustainably, thoughtfully, and with intention—is what genuinely excites me every day.",
          previously: 'Flirt, Dose, Sea Tales, Recap Products…',
        },
        {
          name: 'Thibaud Joubert',
          role: 'Senior Consultant - Head of Impact and Strategy',
          quote:
            "After decades working across CPG brands, value chains, and purpose-driven ventures, I'm ready to jump in where my experience can help bring real, lasting impact. For me, it's about helping founders grow responsibly while shaping a more resilient and forward-thinking industry.",
          previously: 'Group Bel, Ecotierra, Boulart, Toucan, 20+ food startups',
        },
        {
          name: "Stéphan O'Reilly",
          role: 'Senior Consultant - Commercial Development & Strategy',
          quote:
            "I'm passionate about working alongside entrepreneurs who challenge the status quo. Helping them refine their go-to-market strategy, strengthen execution, and build sustainable retail momentum is where I add the most value. For me, long-term success is always built through collaboration and trust.",
          previously: 'White Wave, Danone, Dose Juice, Remedy Drink, Grazy…',
        },
        {
          name: 'Grazianni Tsiory',
          role: 'Executive Assistant - Project Coordinator',
          quote:
            'I am dedicated to building the structures that simplify the everyday. I find great purpose in transforming complex tasks into fluid systems that help teams thrive. For me, creating a seamless and supportive environment is the key to driving collective success and moving forward with confidence with real impact.',
          previously: null as string | null,
        },
      ],
    },

    clients: {
      eyebrow: 'Trusted by',
    },

    ctaBanner: {
      eyebrow: 'Get in touch',
      headingLine1: 'Ready to scale',
      headingLine2: 'the right way?',
      cta: "Let's talk",
    },

    footer: {
      tagline: 'Home of impactful business growth',
      blurb:
        'We help CPG brands scale profitably through operator-led execution for impactful growth.',
      siteLabel: 'Site',
      links: {
        about: 'About us',
        whatWeDo: 'What we do',
        team: 'Our House',
        contact: 'Get in touch',
      },
      copyright: '© {year} RippleHouse. All rights reserved.',
      kicker: 'Built by operators · designed for growth.',
    },

    contact: {
      eyebrow: 'Get in touch',
      heading: "Let's talk.",
      lede:
        "Tell us a little about your brand and what you're hoping to do next.",
      tagline: 'Home of impactful business growth',
      form: {
        nameLabel: 'Your name',
        emailLabel: 'Email',
        brandLabel: 'Brand or company',
        stageLabel: 'Stage',
        stagePlaceholder: 'Select your stage…',
        stageOptions: [
          'Pre-revenue / launching',
          'Under $500K revenue',
          '$500K – $2M revenue',
          '$2M – $10M revenue',
          '$10M+ revenue',
        ],
        interestLabel: "What you're hoping to do",
        interestPlaceholder: 'Pick one…',
        interestOptions: [
          'Build a commercial growth plan',
          'On-demand consulting',
          'Fractional Country Manager engagement',
          "Not sure yet — let's discuss",
        ],
        messageLabel: 'Anything else (optional)',
        submit: 'Send it',
      },
    },

    thanks: {
      eyebrow: 'Got it',
      heading: "Thanks — we'll be in touch.",
      body:
        "Victor will read your note personally and get back to you within two business days. In the meantime, if anything urgent comes up, his line is open.",
      tagline: 'Home of impactful business growth',
      backHome: 'Back to home',
      emailVictor: 'Email Victor directly',
    },
  },

  fr: {
    meta: {
      defaultTitle:
        'RippleHouse — La maison de la croissance d’affaires impactante',
      defaultDescription:
        'RippleHouse aide les marques de produits de consommation à croître de façon rentable, avec une exécution menée par des opérateurs. Bâti par des opérateurs. Conçu pour la croissance.',
      contactTitle: 'Nous joindre — RippleHouse',
      contactDescription:
        'Parlez-nous de votre marque. Bâtissons votre plan de croissance ensemble.',
      thanksTitle: 'Merci — RippleHouse',
      thanksDescription: 'On a bien reçu votre message.',
    },

    nav: {
      whatWeDo: 'Ce qu’on fait',
      ourHouse: 'Notre Maison',
      letsTalk: 'Parlons-en',
      home: 'accueil',
      toggleMenu: 'Ouvrir le menu',
    },

    hero: {
      eyebrow: 'Entreprise · Fondée à Montréal',
      headlineLine1: 'La maison de la',
      headlineHighlight: 'croissance',
      headlineLine2: 'd’affaires impactante.',
      lede:
        'On aide les marques de produits de consommation à croître de façon rentable, grâce à une exécution menée par des opérateurs.',
    },

    about: {
      eyebrow: 'À propos',
      blurb:
        'RippleHouse existe pour les marques — et les personnes derrière elles — qui veulent croître avec intention et créer un impact véritable.',
      heading: 'Avant tout, on est des opérateurs — pas juste des conseillers.',
      paragraph1:
        'La plupart des marques n’échouent pas à cause de leur produit. Elles échouent parce qu’elles n’arrivent pas à croître correctement. La croissance met à nu toutes les faiblesses d’une entreprise — lacunes stratégiques, tensions opérationnelles, marges fragiles, partenariats mal alignés, exécution déficiente en magasin et fissures culturelles.',
      paragraph2:
        'On comprend cette réalité parce qu’on l’a vécue — ensemble, on peut régler ce problème. Notre méthode de fondateur à fondateur repose sur l’expérience, la précision et l’exécution.',
    },

    whatWeDo: {
      eyebrow: 'L’effet RippleHouse',
      heading: 'Qu’est-ce qu’on fait au juste?',
      serviceTag: 'service',
      services: [
        {
          number: '01',
          title: 'Plan de croissance commerciale',
          outcome:
            'Transformez votre avantage distinctif en croissance évolutive et impactante.',
          summary: 'Un chemin clair et actionnable vers une croissance rentable.',
        },
        {
          number: '02',
          title: 'Consultation à la demande',
          outcome: 'Du soutien de calibre mondial, là où ça compte vraiment.',
          summary:
            'Là où la stratégie et l’exécution se rencontrent — ventes, opérations, finances et marketing.',
        },
        {
          number: '03',
          title: 'Directeur national fractionnaire',
          outcome: 'Intégré dans toutes les fonctions.',
          summary: 'Opérations, marketing, finances et ventes.',
        },
      ],
    },

    howItWorks: {
      eyebrow: 'Comment ça marche?',
      blurb:
        'On ne s’arrête pas à la stratégie — on la déploie jusqu’à ce qu’elle fonctionne. On combine la rigueur analytique à une mentalité axée sur la stratégie et l’exécution.',
      sentence: {
        before: 'On identifie votre ',
        reveal1: 'avantage distinctif',
        middle1: ', on l’aligne avec un vrai besoin du marché, on le structure de façon stratégique, puis on l’',
        reveal2: 'active',
        middle2: ' commercialement — pour qu’il génère une croissance mesurable et un ',
        reveal3: 'impact',
        spacer: ' ',
        reveal4: 'durable',
        after: '.',
      },
    },

    team: {
      eyebrow: 'Notre Maison',
      headingLine1: 'On a déjà bâti et fait croître des marques.',
      headingLine2: 'Maintenant, on les bâtit avec vous.',
      previouslyLabel: 'Auparavant',
      members: [
        {
          name: 'Victor-Antoine Gauthier',
          role: 'Fondateur',
          quote:
            'Les gens sont au cœur de tout ce que je fais. Comprendre comment on peut faire croître des marques tout en ayant un impact positif sur les humains et l’écosystème qui les portent, c’est ce qui me motive le plus. Aider à faire croître des marques de la bonne façon — durablement, avec réflexion et intention — c’est ce qui m’allume chaque jour.',
          previously: 'Flirt, Dose, Sea Tales, Recap Products…',
        },
        {
          name: 'Thibaud Joubert',
          role: 'Consultant principal — Responsable de l’impact et de la stratégie',
          quote:
            'Après des décennies dans les marques de produits de consommation, les chaînes de valeur et les entreprises à mission, je suis prêt à mettre l’épaule à la roue là où mon expérience peut générer un impact réel et durable. Pour moi, il s’agit d’aider les fondateurs à croître de façon responsable tout en façonnant une industrie plus résiliente et tournée vers l’avenir.',
          previously: 'Groupe Bel, Ecotierra, Boulart, Toucan, 20+ startups alimentaires',
        },
        {
          name: 'Stéphan O’Reilly',
          role: 'Consultant principal — Développement commercial et stratégie',
          quote:
            'Je suis passionné par le travail aux côtés d’entrepreneurs qui remettent en question le statu quo. Les aider à raffiner leur stratégie de mise en marché, à renforcer leur exécution et à bâtir une traction durable au détail, c’est là que j’apporte le plus de valeur. Pour moi, le succès à long terme se construit toujours par la collaboration et la confiance.',
          previously: 'White Wave, Danone, Dose Juice, Remedy Drink, Grazy…',
        },
        {
          name: 'Grazianni Tsiory',
          role: 'Adjointe à la direction — Coordonnatrice de projets',
          quote:
            'Je me consacre à bâtir les structures qui simplifient le quotidien. Je trouve un grand sens à transformer des tâches complexes en systèmes fluides qui font rayonner les équipes. Pour moi, créer un environnement harmonieux et soutenant, c’est la clé du succès collectif et d’une avancée confiante, avec un impact réel.',
          previously: null as string | null,
        },
      ],
    },

    clients: {
      eyebrow: 'Ils nous font confiance',
    },

    ctaBanner: {
      eyebrow: 'Nous joindre',
      headingLine1: 'Prêt à croître',
      headingLine2: 'de la bonne façon?',
      cta: 'Parlons-en',
    },

    footer: {
      tagline: 'La maison de la croissance d’affaires impactante',
      blurb:
        'On aide les marques de produits de consommation à croître de façon rentable, grâce à une exécution menée par des opérateurs.',
      siteLabel: 'Site',
      links: {
        about: 'À propos',
        whatWeDo: 'Ce qu’on fait',
        team: 'Notre Maison',
        contact: 'Nous joindre',
      },
      copyright: '© {year} RippleHouse. Tous droits réservés.',
      kicker: 'Bâti par des opérateurs · conçu pour la croissance.',
    },

    contact: {
      eyebrow: 'Nous joindre',
      heading: 'Parlons-en.',
      lede:
        'Parlez-nous brièvement de votre marque et de ce que vous souhaitez accomplir.',
      tagline: 'La maison de la croissance d’affaires impactante',
      form: {
        nameLabel: 'Votre nom',
        emailLabel: 'Courriel',
        brandLabel: 'Marque ou entreprise',
        stageLabel: 'Stade',
        stagePlaceholder: 'Choisissez votre stade…',
        stageOptions: [
          'Pré-revenu / en lancement',
          'Moins de 500 K$ de revenus',
          '500 K$ – 2 M$ de revenus',
          '2 M$ – 10 M$ de revenus',
          '10 M$+ de revenus',
        ],
        interestLabel: 'Ce que vous souhaitez accomplir',
        interestPlaceholder: 'Choisissez une option…',
        interestOptions: [
          'Bâtir un plan de croissance commerciale',
          'Consultation à la demande',
          'Mandat de directeur national fractionnaire',
          'Pas encore certain — discutons-en',
        ],
        messageLabel: 'Autre chose à ajouter (facultatif)',
        submit: 'Envoyer',
      },
    },

    thanks: {
      eyebrow: 'Bien reçu',
      heading: 'Merci — on vous revient sous peu.',
      body:
        'Victor lira votre message personnellement et vous répondra dans les deux jours ouvrables. Entre-temps, si quelque chose d’urgent survient, sa ligne est ouverte.',
      tagline: 'La maison de la croissance d’affaires impactante',
      backHome: 'Retour à l’accueil',
      emailVictor: 'Écrire à Victor directement',
    },
  },
} as const;

export type Strings = typeof strings.en;
