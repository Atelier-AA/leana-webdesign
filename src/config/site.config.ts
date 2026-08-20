import { SiteConfigSchema, type SiteConfig } from "@/types/config";

/**
 * Single content & theming source for the entire site.
 * Swap the values below to re-skin this boilerplate for any client —
 * no component code needs to change. Sections can be toggled off
 * entirely via `features`.
 */
const rawConfig: SiteConfig = {
  business: {
    name: "Leana",
    legalName: "Leana",
    tagline: "Frische Webseiten für dein Unternehmen.",
    description:
      "Leana gestaltet moderne, übersichtliche Webseiten für kleine Unternehmen und Selbstständige in der Region — persönlich, unkompliziert und mit vollem Einsatz für dein Projekt.",
    url: "https://www.leana-me.ch",
    locale: "de-CH",
    jsonLdType: "Person",
  },

  contact: {
    email: "hallo@leana-me.ch",
    address: {
      city: "Jonen",
      region: "AG",
      country: "Schweiz",
      countryCode: "CH",
    },
    socials: [],
  },

  theme: {
    colors: {
      background: "#fafaf9",
      foreground: "#16181c",
      primary: "#16181c",
      primaryForeground: "#fafaf9",
      accent: "#0f8b78",
      accentForeground: "#fafaf9",
      muted: "#eef1ef",
      mutedForeground: "#63696b",
      border: "#e1e4e1",
      ring: "#0f8b78",
    },
    radius: "0.5rem",
  },

  features: {
    services: true,
    about: true,
    projects: true,
    reasons: true,
    contact: true,
  },

  navigation: [
    { label: "Leistungen", href: "/leistungen" },
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Projekte", href: "/projekte" },
    { label: "Kontakt", href: "/kontakt" },
  ],

  hero: {
    eyebrow: "Webdesign von einer engagierten Schülerin",
    headline: "Deine Website, frisch gedacht.",
    subheadline:
      "Ich bin Schülerin und gestalte in meiner Freizeit moderne, übersichtliche Webseiten für kleine Unternehmen in der Region. Nach dem Launch zeige ich dir, wie du sie ganz einfach selbst weiterführen kannst.",
    ctaPrimary: { label: "Projekt anfragen", href: "/kontakt" },
    ctaSecondary: { label: "Beispielprojekte ansehen", href: "/projekte" },
    media: {
      type: "image",
      src: "/images/hero-workspace.jpg",
      alt: "Gemütlicher Schreibtisch mit Laptop, Lichterkette, einer kleinen Pflanze und einer Tasse Kakao",
      aspectRatio: "4 / 5",
    },
  },

  services: {
    eyebrow: "Leistungen",
    title: "Was ich für dich umsetzen kann",
    subtitle:
      "Jedes Projekt ist anders — deshalb bespreche ich Umfang und Angebot immer persönlich mit dir, statt pauschale Preise online zu nennen.",
    items: [
      {
        icon: "layout",
        title: "Neue Website",
        description:
          "Eine komplette, moderne Webseite für dein Unternehmen — von der ersten Idee bis zur fertigen Seite.",
      },
      {
        icon: "rocket",
        title: "Landingpage",
        description:
          "Eine fokussierte Seite für ein einzelnes Angebot, ein Event oder eine Aktion, die schnell online gehen soll.",
      },
      {
        icon: "refresh-cw",
        title: "Redesign",
        description:
          "Deine bestehende Webseite wirkt veraltet? Ich überarbeite Struktur, Gestaltung und Texte.",
      },
      {
        icon: "graduation-cap",
        title: "Einführung & Übergabe",
        description:
          "Nach dem Launch zeige ich dir Schritt für Schritt, wie du Texte, Bilder und kleine Inhalte selbst anpassen kannst — damit du danach unabhängig bist.",
      },
    ],
    process: [
      {
        title: "Kurzes Kennenlernen",
        description:
          "Wir klären per E-Mail, was du brauchst und was dir bei deiner Website wichtig ist.",
      },
      {
        title: "Angebot & Konzept",
        description:
          "Du bekommst ein unverbindliches, persönliches Angebot und einen ersten Gestaltungsvorschlag.",
      },
      {
        title: "Umsetzung",
        description: "Ich setze die Webseite um und halte dich laufend auf dem Laufenden.",
      },
      {
        title: "Übergabe",
        description:
          "Du erhältst deine fertige Webseite inklusive einer persönlichen Einführung, damit du sie danach eigenständig pflegen kannst.",
      },
    ],
    note: "Alle Angebote sind individuell — schreib mir einfach, und ich melde mich mit einem passenden Vorschlag.",
  },

  about: {
    eyebrow: "Über mich",
    title: "Eine Schülerin mit Freude am Gestalten",
    body: [
      "Ich heisse Leana, bin Schülerin und gestalte in meiner Freizeit Websites für kleine Unternehmen in der Region — mit diesem kleinen Nebenprojekt spare ich mir etwas für mein späteres Studium dazu.",
      "Weil ich noch am Anfang meines Wegs in die Gestaltung stehe, bekommst du bei mir keine anonyme Agentur, sondern volle Aufmerksamkeit, ehrliche Beratung und eine Website, die du danach ganz einfach selbst weiterführen kannst.",
    ],
    media: {
      type: "image",
      src: "/images/leana-portrait.jpg",
      alt: "Porträt von Leana",
      aspectRatio: "4 / 5",
    },
    values: [
      {
        title: "Persönlich",
        description: "Du hast während des ganzen Projekts eine feste Ansprechperson — mich.",
      },
      {
        title: "Unkompliziert",
        description: "Klare Kommunikation, kurze Wege, keine unnötige Bürokratie.",
      },
      {
        title: "Mit vollem Einsatz",
        description: "Dein Projekt bekommt meine volle Aufmerksamkeit und Sorgfalt.",
      },
    ],
  },

  projects: {
    eyebrow: "Projekte",
    title: "Beispielprojekte",
    subtitle:
      "Diese Konzepte zeigen, wie ich arbeite und welchen Stil ich für unterschiedliche Branchen entwickle.",
    note: "Diese Projekte sind Konzeptarbeiten zur Veranschaulichung meines Stils, keine realen Kundenaufträge.",
    items: [
      {
        slug: "cafe-sonnenblick",
        title: "Café Sonnenblick",
        category: "Gastronomie",
        description:
          "Konzept für ein kleines Quartier-Café mit Fokus auf Speisekarte und Öffnungszeiten.",
        content: [
          "Für dieses Konzept stand eine warme, einladende Bildsprache im Vordergrund, kombiniert mit einer klar strukturierten Speisekarte und gut sichtbaren Öffnungszeiten.",
          "Ziel war eine Seite, die auch mobil in Sekunden zeigt, was das Café ausmacht — und wie man es findet.",
        ],
        media: {
          type: "image",
          src: "/images/project-cafe.jpg",
          alt: "Laptop mit einer Café-Webseiten-Vorschau auf einem Holztisch",
          aspectRatio: "4 / 5",
        },
      },
      {
        slug: "coiffeur-haarwerk",
        title: "Coiffeur Haarwerk",
        category: "Beauty & Coiffeur",
        description:
          "Konzept für einen Coiffeursalon mit Leistungsübersicht und einfachem Kontaktweg für Terminanfragen.",
        content: [
          "Im Zentrum stand ein reduziertes, elegantes Erscheinungsbild, das die Leistungen klar gliedert, ohne überladen zu wirken.",
          "Eine gut sichtbare Kontaktmöglichkeit sorgt dafür, dass Terminanfragen ohne Umwege ankommen.",
        ],
        media: {
          type: "image",
          src: "/images/project-coiffeur.jpg",
          alt: "Laptop mit einer Coiffeur-Webseiten-Vorschau auf einer hellen Ablage",
          aspectRatio: "4 / 5",
        },
      },
      {
        slug: "handwerk-meier",
        title: "Handwerk Meier",
        category: "Handwerk",
        description:
          "Konzept für einen kleinen Handwerksbetrieb mit Leistungsübersicht und Kontaktformular.",
        content: [
          "Die Gestaltung setzt auf erdige Töne und klare Strukturen, damit Leistungen und Erreichbarkeit sofort auffindbar sind.",
          "Ein einfaches Kontaktformular ersetzt lange Anfahrtsbeschreibungen und macht die erste Kontaktaufnahme leicht.",
        ],
        media: {
          type: "image",
          src: "/images/project-handwerk.jpg",
          alt: "Laptop mit einer Handwerksbetrieb-Webseiten-Vorschau auf einer Werkbank",
          aspectRatio: "4 / 5",
        },
      },
    ],
  },

  reasons: {
    eyebrow: "Warum mit mir?",
    title: "Das bekommst du bei einer Zusammenarbeit",
    items: [
      {
        title: "Schnelle Rückmeldung",
        description: "Ich antworte in der Regel innerhalb von 1–2 Tagen auf deine Anfrage.",
      },
      {
        title: "Faire, individuelle Angebote",
        description:
          "Kein Standardpreis von der Stange — du bekommst ein Angebot, das zu deinem Projekt passt.",
      },
      {
        title: "Moderne Technik",
        description:
          "Deine Website ist schnell, gut lesbar auf dem Handy und für Suchmaschinen vorbereitet.",
      },
      {
        title: "Direkter Kontakt",
        description: "Du sprichst während des ganzen Projekts direkt mit mir — ohne Umwege.",
      },
    ],
  },

  contactSection: {
    eyebrow: "Kontakt",
    title: "Erzähl mir von deinem Projekt",
    subtitle:
      "Schreib mir kurz, worum es geht — ich melde mich mit einer ersten Einschätzung und einem unverbindlichen Vorschlag.",
    responseTime: "Antwort in der Regel innerhalb von 1–2 Tagen",
  },

  footer: {
    legalLinks: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
    copyrightName: "Leana",
  },

  seo: {
    twitterHandle: undefined,
    keywords: [
      "Webdesign Aargau",
      "Website erstellen lassen",
      "Webseite für kleine Unternehmen",
      "Landingpage erstellen",
    ],
  },

  legal: {
    impressum: {
      title: "Impressum",
      updated: "August 2026",
      sections: [
        {
          heading: "Anbieterin",
          paragraphs: ["Leana", "Jonen AG, Schweiz"],
        },
        {
          heading: "Kontakt",
          paragraphs: ["E-Mail: hallo@leana-me.ch"],
        },
        {
          heading: "Art des Angebots",
          paragraphs: [
            "Dieses Angebot ist ein privates Nebenprojekt einer Einzelperson und keine eingetragene Firma.",
          ],
        },
        {
          heading: "Haftungshinweis",
          paragraphs: [
            "Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.",
          ],
        },
      ],
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      updated: "August 2026",
      sections: [
        {
          heading: "Verantwortliche Person",
          paragraphs: [
            "Verantwortlich für die Datenverarbeitung auf dieser Website ist Leana, Jonen AG, hallo@leana-me.ch.",
          ],
        },
        {
          heading: "Erhebung und Verarbeitung von Daten",
          paragraphs: [
            "Ich erhebe personenbezogene Daten nur, wenn du mir diese im Rahmen einer Anfrage über das Kontaktformular freiwillig mitteilst. Dazu zählen Name, E-Mail-Adresse und der Inhalt deiner Nachricht.",
            "Diese Angaben werden ausschliesslich zur Bearbeitung deiner Anfrage sowie für eine mögliche Anschlusskommunikation verwendet und nicht an Dritte weitergegeben.",
          ],
        },
        {
          heading: "Cookies und Tracking",
          paragraphs: [
            "Diese Website verwendet keine Cookies für Analyse- oder Marketingzwecke und bindet keine externen Tracking-Dienste ein. Es kommen ausschliesslich technisch notwendige Funktionen zum Einsatz.",
          ],
        },
        {
          heading: "Deine Rechte",
          paragraphs: [
            "Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner bei mir gespeicherten Daten. Wende dich hierzu an die oben genannte Kontaktadresse.",
          ],
        },
      ],
    },
  },
};

export const siteConfig = SiteConfigSchema.parse(rawConfig);
