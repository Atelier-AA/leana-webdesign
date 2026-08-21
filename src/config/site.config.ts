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
    tagline: "Ich probiere aus, was mit KI heute wirklich möglich ist.",
    description:
      "Leana ist Schülerin und experimentiert mit künstlicher Intelligenz — sie testet Werkzeuge, baut kleine Projekte und teilt, was dabei wirklich funktioniert.",
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
    areas: true,
    about: true,
    experiments: true,
    learning: true,
    reasons: true,
    contact: true,
  },

  navigation: [
    { label: "Experimente", href: "/experimente" },
    { label: "Was ich lerne", href: "/was-ich-lerne" },
    { label: "Warum ich das mache", href: "/warum-ich-das-mache" },
    { label: "Kontakt", href: "/kontakt" },
  ],

  hero: {
    headline: "Ich probiere aus, was mit KI heute wirklich möglich ist.",
    subheadline:
      "Ich heisse Leana, bin Schülerin und beschäftige mich mit künstlicher Intelligenz, neuen digitalen Werkzeugen und der Frage, was man damit tatsächlich selbst machen kann. Ich teste, lerne, baue kleine Projekte und teile hier, was dabei herauskommt.",
    tagline: "KI ausprobieren. Verstehen. Und zeigen, was damit wirklich möglich ist.",
    ctaPrimary: { label: "Schreib mir", href: "/kontakt" },
    ctaSecondary: { label: "Meine Experimente ansehen", href: "/experimente" },
    media: {
      type: "image",
      src: "/images/hero-workspace.jpg",
      alt: "Gemütlicher Schreibtisch mit Laptop, Lichterkette, einer kleinen Pflanze und einer Tasse Kakao",
      aspectRatio: "4 / 5",
    },
  },

  areas: {
    eyebrow: "Was ich ausprobiere",
    title: "Was ich mit KI ausprobiere",
    subtitle:
      "KI ist viel mehr als nur ChatGPT. Deshalb probiere ich unterschiedliche Dinge aus und schaue, was davon im echten Leben wirklich brauchbar ist.",
    items: [
      {
        icon: "layout",
        title: "Websites bauen",
        description:
          "Kann man mit KI eine moderne Website erstellen, auch wenn man keine Webagentur ist? Genau damit habe ich angefangen — ich probiere aus, wie weit KI beim Design, bei Texten, Bildern und der technischen Umsetzung helfen kann, und wo man trotzdem selbst Entscheidungen treffen muss.",
      },
      {
        icon: "image",
        title: "Bilder & Gestaltung",
        description:
          "Ich teste, wie man mit KI Bilder erstellen, Ideen visualisieren oder bestehende Designs weiterentwickeln kann. Besonders spannend finde ich, wie viel Einfluss ein guter Auftrag an die KI auf das Ergebnis hat.",
      },
      {
        icon: "pen-line",
        title: "Texte & Ideen",
        description:
          "Wie gut kann KI beim Schreiben, Strukturieren oder Entwickeln von Ideen helfen? Ich probiere verschiedene Methoden aus und schaue, wann KI wirklich hilfreich ist — und wann ein Text plötzlich einfach nach KI klingt.",
      },
      {
        icon: "bot",
        title: "Kleine digitale Helfer",
        description:
          "Manchmal entsteht aus einer Idee ein kleines Tool, eine Automatisierung oder eine andere digitale Lösung. Mich interessiert dabei weniger, wie kompliziert die Technik dahinter ist, sondern ob sie am Ende tatsächlich etwas einfacher macht.",
      },
    ],
    note: "Und wahrscheinlich noch einiges mehr. Ich weiss selbst noch nicht genau, wohin mich dieses Projekt führt — und eigentlich ist genau das der spannende Teil.",
  },

  about: {
    eyebrow: "Warum ich das mache",
    title: "Warum ich das mache",
    subtitle: "Ich bin keine KI-Expertin. Ich möchte verstehen, was damit möglich ist.",
    excerpt:
      "Ich bin Schülerin und probiere aus, was mit künstlicher Intelligenz heute wirklich möglich ist — und teile ehrlich, was ich dabei lerne, ohne so zu tun, als wäre ich Expertin.",
    body: [
      "Ich heisse Leana, bin Schülerin und versuche gerade herauszufinden, was mit künstlicher Intelligenz wirklich möglich ist.",
      "Nicht theoretisch, sondern indem ich Dinge damit mache.",
      "Ich probiere verschiedene KI-Werkzeuge aus, baue kleine Projekte, gestalte Websites, teste Ideen und schaue, was funktioniert – und was eben nicht.",
      "Dabei geht es mir nicht darum, so zu tun, als wäre ich KI-Expertin. Im Gegenteil: Ich bin selbst noch mittendrin und lerne ständig Neues dazu.",
      "Genau daraus ist dieses Projekt entstanden.",
      "Ich möchte dokumentieren, was ich herausfinde, meine Erfahrungen teilen und anderen zeigen, wie KI heute tatsächlich genutzt werden kann – verständlich und ohne den ganzen Hype darum.",
      "Mich interessieren dabei auch die Grenzen. Wo hilft KI wirklich? Wo macht sie Fehler? Was kann sie erstaunlich gut? Und wo braucht es weiterhin den Menschen?",
      "Ich finde besonders spannend, wie viel eine einzelne Person heute mit den richtigen Werkzeugen selbst ausprobieren und umsetzen kann.",
      "Manchmal entsteht daraus eine Website. Manchmal eine Idee, ein Bild, ein kleiner digitaler Helfer oder etwas ganz anderes.",
      "Und wenn eines dieser Experimente jemand anderem weiterhilft, umso besser.",
      "Für mich ist dieses Projekt deshalb vor allem eines:\n**lernen, ausprobieren und teilen, was dabei herauskommt.**",
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

  experiments: {
    eyebrow: "Experimente",
    title: "Was ich schon ausprobiert habe",
    subtitle:
      "Am meisten lerne ich, wenn ich etwas wirklich mache. Deshalb entstehen hier immer wieder kleine Experimente — manche beginnen mit einer einfachen Frage, andere mit einer Idee, die ich unbedingt ausprobieren möchte.",
    intro: [
      "Dabei geht es nicht darum, perfekte Musterprojekte zu präsentieren. Ich möchte zeigen, **was ich ausprobiert habe, wie ich vorgegangen bin und was ich dabei gelernt habe.**",
    ],
    items: [
      {
        slug: "cafe-sonnenblick",
        title: "Café Sonnenblick",
        experimentQuestion:
          "Kann ich mit KI eine komplette Website für ein kleines Café entwickeln?",
        content: [
          "Von der ersten Idee über Texte und Gestaltung bis zur fertigen Seite.",
          "**Was ich dabei ausprobiert habe:** Struktur, Texte, Gestaltung, Bilder und Webentwicklung mit Unterstützung verschiedener KI-Werkzeuge.",
          "**Was ich gelernt habe:** KI kann unglaublich schnell Ideen liefern – aber ein gutes Ergebnis entsteht erst, wenn man auswählt, verändert und selbst Entscheidungen trifft.",
        ],
        media: {
          type: "image",
          src: "/images/project-cafe.jpg",
          alt: "Laptop mit einer Café-Webseiten-Vorschau auf einem Holztisch",
          aspectRatio: "4 / 5",
        },
        liveUrl: { label: "Live ansehen", href: "https://www.elindo.ch" },
      },
      {
        slug: "coiffeur-haarwerk",
        title: "Coiffeur Haarwerk",
        experimentQuestion:
          "Wie schnell lässt sich aus einer einfachen Geschäftsidee eine klare digitale Präsenz entwickeln?",
        content: [
          "Hier habe ich ausprobiert, wie sich Informationen über Leistungen, Stil und Kontakt so reduzieren lassen, dass eine einfache und verständliche Website entsteht.",
        ],
        media: {
          type: "image",
          src: "/images/project-coiffeur.jpg",
          alt: "Laptop mit einer Coiffeur-Webseiten-Vorschau auf einer hellen Ablage",
          aspectRatio: "4 / 5",
        },
        liveUrl: { label: "Live ansehen", href: "https://atelier-aa-ch.vercel.app" },
      },
      {
        slug: "handwerk-meier",
        title: "Handwerk Meier",
        experimentQuestion: "Kann KI auch bei einer ganz einfachen Handwerker-Website sinnvoll helfen?",
        content: [
          "Bei diesem Projekt wollte ich bewusst nichts Ausgefallenes machen.",
          "Die Frage war vielmehr: Kann KI helfen, Informationen schneller zu strukturieren und daraus eine einfache Website zu entwickeln, die ihren Zweck erfüllt?",
        ],
        media: {
          type: "image",
          src: "/images/project-handwerk.jpg",
          alt: "Laptop mit einer Handwerksbetrieb-Webseiten-Vorschau auf einer Werkbank",
          aspectRatio: "4 / 5",
        },
        liveUrl: { label: "Live ansehen", href: "http://localhost:8000/index.html" },
      },
    ],
  },

  learning: {
    eyebrow: "Was ich lerne",
    title: "Was ich lerne",
    subtitle:
      "Hier dokumentiere ich, was ich beim Ausprobieren herausfinde — nicht als Experten-Blog, sondern immer aus meiner eigenen Perspektive: Ich habe das ausprobiert, das ist passiert, das habe ich daraus gelernt.",
    items: [
      {
        title: "Was KI überraschend gut kann",
        teaser: "Eine Sammlung von Momenten, in denen mich ein KI-Werkzeug wirklich überrascht hat.",
      },
      {
        title: "Warum ein guter Prompt nicht alles löst",
        teaser: "Was ich darüber gelernt habe, wie viel Formulierung wirklich ausmacht — und wo sie an Grenzen stösst.",
      },
      {
        title: "Meine erste Website mit KI",
        teaser: "Wie das erste Experiment gelaufen ist und was ich beim nächsten Mal anders machen würde.",
      },
      {
        title: "Kann KI wirklich programmieren?",
        teaser: "Ich probiere aus, wo KI beim Programmieren wirklich hilft — und wo nicht.",
      },
      {
        title: "5 Dinge, die bei meinem ersten KI-Projekt schiefgingen",
        teaser: "Eine ehrliche Liste, damit du nicht dieselben Fehler machen musst.",
      },
      {
        title: "Wie erkenne ich, ob ein Bild mit KI erstellt wurde?",
        teaser: "Ein paar Anhaltspunkte, die ich mir beim genauen Hinschauen angewöhnt habe.",
      },
      {
        title: "Was ChatGPT weiss – und was nicht",
        teaser: "Wo ich mich zu Beginn getäuscht habe, und wie ich das heute besser einschätze.",
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
    title: "Hast du eine Idee, die ich ausprobieren sollte?",
    subtitle: "Schreib mir, wenn du eine Idee hast, die ich ausprobieren sollte.",
    body: [
      "Vielleicht hast du selbst eine Frage zu KI.",
      "Vielleicht gibt es in deinem Unternehmen etwas, bei dem du dich fragst, ob KI helfen könnte.",
      "Oder vielleicht hast du einfach eine Idee, die spannend wäre auszuprobieren.",
      "Dann schreib mir gerne.",
      "**Ich kann nicht versprechen, dass ich für alles eine Lösung habe** – aber vielleicht können wir gemeinsam herausfinden, was möglich ist.",
      "Und wenn daraus ein echtes kleines Projekt entsteht, umso besser.",
    ],
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
      "KI ausprobieren",
      "künstliche Intelligenz lernen",
      "KI für kleine Unternehmen",
      "KI-Experimente",
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
