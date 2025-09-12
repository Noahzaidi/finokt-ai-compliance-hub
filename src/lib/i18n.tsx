import { createContext, useContext, useMemo, useState, useEffect, ReactNode } from "react";

export type AppLanguage = "en" | "fr";

type TranslationDict = Record<string, string>;

type Translations = Record<AppLanguage, TranslationDict>;

interface I18nContextValue {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const STORAGE_KEY = "app_language";

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<AppLanguage>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as AppLanguage | null;
      if (saved === "en" || saved === "fr") {
        setLanguageState(saved);
        return;
      }
      const navLang = navigator.language?.toLowerCase() || "en";
      if (navLang.startsWith("fr")) setLanguageState("fr");
    } catch {}
  }, []);

  const setLanguage = (lang: AppLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  };

  const t = useMemo(() => (key: string) => {
    const dict = translations[language] as TranslationDict | undefined;
    const enDict = translations.en;
    if (dict && key in dict) return dict[key];
    if (key in enDict) return enDict[key];
    return key;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

// Translations
const translations: Translations = {
  en: {
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.about": "About",
    "nav.bookDemo": "Book a Demo",

    "hero.title.prefix": "AI-Powered KYC &",
    "hero.title.highlight": "Compliance Automation",
    "hero.subtitle": "FinoktAI helps banks and financial institutions streamline onboarding, reduce costs, and stay compliant with intelligent document processing, biometric face matching, and automated risk checks.",
    "hero.benefit.faster": "90% faster onboarding",
    "hero.benefit.accuracy": "99.9% accuracy",
    "hero.benefit.compliance": "Full compliance",
    "hero.cta.book": "Book a Demo",
    "hero.cta.learn": "Learn More",

    "features.header": "Powerful Features for Modern Compliance",
    "features.description": "Everything you need to automate KYC processes, reduce manual work, and maintain regulatory compliance with cutting-edge AI technology.",
    "features.1.title": "Automated Document Verification",
    "features.1.desc": "Advanced OCR, ID parsing, and MRZ validation for instant document processing with 99.9% accuracy.",
    "features.2.title": "Biometric Face Matching",
    "features.2.desc": "Advanced facial recognition technology compares live selfies with document photos for identity verification with 99.8% accuracy.",
    "features.3.title": "Liveness Detection",
    "features.3.desc": "Sophisticated anti-spoofing technology detects live faces versus photos, masks, or videos for enhanced security.",
    "features.4.title": "Dynamic Compliance Checks",
    "features.4.desc": "Real-time PEP, Sanctions, FATCA/CRS screening with country-specific regulatory rules.",
    "features.5.title": "Real-time Risk Scoring",
    "features.5.desc": "Intelligent risk assessment with low, medium, and high risk categorization for informed decisions.",
    "features.6.title": "Comprehensive Audit Trails",
    "features.6.desc": "Complete audit trails and compliance documentation with automated timestamping and user tracking for regulatory requirements.",
    "features.7.title": "Powerful Analytics & Reports",
    "features.7.desc": "Advanced reporting dashboard with custom analytics, compliance metrics, and executive summaries for data-driven decisions.",
    "features.8.title": "Enterprise Security",
    "features.8.desc": "Bank-grade encryption, GDPR compliance, and audit trails for complete data protection.",

    "how.header": "How It Works",
    "how.description": "Comprehensive KYC automation with biometric verification, risk monitoring and reporting in five steps",
    "how.1.title": "Upload Documents",
    "how.1.desc": "Customers upload identity documents through your secure portal or mobile app interface.",
    "how.2.title": "Biometric Verification",
    "how.2.desc": "Advanced face matching and liveness detection verify customer identity against document photos with 99.8% accuracy.",
    "how.3.title": "AI Processing",
    "how.3.desc": "Our AI extracts data fields, validates authenticity, and runs comprehensive compliance checks instantly.",
    "how.4.title": "Real-Time Monitoring",
    "how.4.desc": "Powerful risk monitoring tools track compliance in real-time with comprehensive reports and audit trails.",
    "how.5.title": "Review & Approve",
    "how.5.desc": "Compliance officers review flagged cases in the dashboard and approve verified customers.",

    "about.header": "About FinoktAI",
    "about.subheader": "Founded by compliance experts to revolutionize how financial institutions handle KYC and regulatory requirements.",
    "about.mission.title": "Our Mission",
    "about.mission.desc": "To make compliance faster, smarter, and more affordable for financial institutions worldwide. We believe AI can eliminate the tedious manual work while improving accuracy and regulatory adherence.",
    "about.why.title": "Why Choose Us",
    "about.why.1": "Built by compliance professionals who understand real-world challenges",
    "about.why.2": "Enterprise-grade security and regulatory compliance built-in",
    "about.why.3": "Proven track record in AI, Fintech, and Trade Finance",
    "about.cta": "Schedule a Demo",
    "about.founder.role": "Co-founder & CEO",
    "about.founder.pmp": "PMP Certified Project Manager",
    "about.badge.pm": "AI Project Manager",
    "about.badge.ce": "Compliance Expert",
    "about.badge.ai": "AI Specialist",
    "about.badge.fintech": "Fintech",
    "about.badge.trade": "Trade Finance",
    "about.founder.bio": "With extensive experience in compliance consulting, AI project management, and fintech innovation, Noah brings deep industry knowledge to solve real compliance challenges with cutting-edge AI technology.",
    "about.linkedin": "Connect on LinkedIn",

    "footer.tagline": "AI for Smarter Compliance",
    "footer.bookDemo": "Book a Demo",
    "footer.quickLinks": "Quick Links",
    "footer.features": "Features",
    "footer.howItWorks": "How It Works",
    "footer.about": "About Us",
    "footer.scheduleDemo": "Schedule Demo",
    "footer.cookieSettings": "Cookie Settings",
    "footer.contact": "Contact",
    "footer.linkedinProfile": "LinkedIn Profile",
    "footer.copyright": "© 2024 FinoktAI. All rights reserved.",
    "footer.bottomTag": "Built for the future of financial compliance",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.address": "5 Parv. Alan Turing, 75013 Paris, France",

    "demo.title": "Book Your Personalized Demo",
    "demo.subtitle": "See how FinoktAI can transform your KYC and compliance processes. Schedule a personalized demo with our founder, Noah Zaidi.",
    "demo.expect": "What to Expect",
    "demo.expect.1.title": "Discovery Meeting (30 minutes)",
    "demo.expect.1.desc": "Initial consultation to understand your specific problems and compliance challenges",
    "demo.expect.2.title": "Tailored Demo (30 minutes)",
    "demo.expect.2.desc": "Customized product demonstration focused on solving your identified challenges",
    "demo.expect.3.title": "Solution Mapping",
    "demo.expect.3.desc": "Direct alignment of our AI platform features to your compliance requirements",
    "demo.expect.4.title": "ROI Analysis & Next Steps",
    "demo.expect.4.desc": "Projected savings and clear implementation roadmap for your organization",
    "demo.details": "Demo Details",
    "demo.details.duration": "Duration",
    "demo.details.duration.value": "30 minutes",
    "demo.details.format": "Format",
    "demo.details.format.value": "Video call",
    "demo.details.presenter": "Presenter",
    "demo.details.presenter.value": "Noah Zaidi, CEO",
    "demo.details.followUp": "Follow-up",
    "demo.details.followUp.value": "Included",
    "demo.selectTime": "Select Your Preferred Time",

    "privacy.title": "Privacy Policy",
    "privacy.subtitle": "How we collect, use, and protect your information",
    "privacy.lastUpdated": "Last updated",
    "privacy.cookieInfo": "Cookie Information",
    "privacy.cookie.p1": "We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and serve personalized content. Below are the categories of cookies we use:",
    "privacy.cookie.strict": "Strictly Necessary",
    "privacy.cookie.strict.desc": "Essential cookies required for the website to function properly. These cannot be disabled and include session management, security features, and consent preferences.",
    "privacy.cookie.pref": "Preferences",
    "privacy.cookie.pref.desc": "Cookies that remember your choices and settings to provide enhanced features and personalized experience across visits.",
    "privacy.cookie.analytics": "Analytics",
    "privacy.cookie.analytics.desc": "Cookies that help us understand how visitors interact with our website by collecting anonymous information about usage patterns and performance metrics.",
    "privacy.cookie.marketing": "Marketing",
    "privacy.cookie.marketing.desc": "Cookies used to deliver relevant advertisements and measure the effectiveness of our marketing campaigns across different platforms.",
    "privacy.manageCookies": "Manage Cookie Settings",
    "privacy.dataRetention": "Data Retention",
    "privacy.dataRetention.p1": "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected:",
    "privacy.dataRetention.item1": "Cookie consent preferences: 6 months",
    "privacy.dataRetention.item2": "Analytics data: Anonymized after 26 months",
    "privacy.dataRetention.item3": "Marketing data: Until consent is withdrawn",
    "privacy.dataRetention.item4": "Essential operational data: As required by law",
    "privacy.rights": "Your Rights",
    "privacy.rights.p1": "Under GDPR and other privacy laws, you have the following rights:",
    "privacy.rights.access": "Access: Request a copy of your personal data",
    "privacy.rights.rectification": "Rectification: Correct inaccurate personal data",
    "privacy.rights.erasure": "Erasure: Request deletion of your personal data",
    "privacy.rights.portability": "Portability: Receive your data in a structured format",
    "privacy.rights.objection": "Objection: Object to processing of your personal data",
    "privacy.rights.withdraw": "Withdraw consent: Withdraw consent at any time",
    "privacy.rights.contactPreface": "To exercise these rights or ask questions about our privacy practices:",
    "privacy.rights.contact": "Contact Privacy Team",
    "privacy.contactInfo": "Contact Information",
    "privacy.contactInfo.p1": "If you have questions about this Privacy Policy or our data practices, please contact us:",
    "privacy.contactInfo.email": "Email:",
    "privacy.contactInfo.dpo": "Data Protection Officer:",
    "privacy.contactInfo.response": "Response Time:",
    "privacy.contactInfo.response.value": "Within 30 days of receipt",
    "privacy.footer": "This privacy policy is effective as of the date listed above and may be updated from time to time. We will notify you of any significant changes.",

    "404.title": "404",
    "404.subtitle": "Oops! Page not found",
    "404.home": "Return to Home"
  },
  fr: {
    "nav.features": "Fonctionnalités",
    "nav.howItWorks": "Fonctionnement",
    "nav.about": "À propos",
    "nav.bookDemo": "Réserver une démo",

    "hero.title.prefix": "KYC alimenté par l’IA et",
    "hero.title.highlight": "Automatisation de la conformité",
    "hero.subtitle": "FinoktAI aide les banques et institutions financières à optimiser l’onboarding, réduire les coûts et rester conformes grâce au traitement intelligent des documents, à l’appariement biométrique du visage et aux contrôles de risque automatisés.",
    "hero.benefit.faster": "Onboarding 90% plus rapide",
    "hero.benefit.accuracy": "Précision de 99,9%",
    "hero.benefit.compliance": "Conformité totale",
    "hero.cta.book": "Réserver une démo",
    "hero.cta.learn": "En savoir plus",

    "features.header": "Des fonctionnalités puissantes pour une conformité moderne",
    "features.description": "Tout ce dont vous avez besoin pour automatiser les processus KYC, réduire le travail manuel et maintenir la conformité réglementaire avec une technologie d’IA de pointe.",
    "features.1.title": "Vérification automatisée des documents",
    "features.1.desc": "OCR avancée, analyse d’ID et validation MRZ pour un traitement instantané des documents avec une précision de 99,9%.",
    "features.2.title": "Correspondance biométrique du visage",
    "features.2.desc": "La reconnaissance faciale avancée compare les selfies en direct aux photos des documents pour la vérification d’identité avec une précision de 99,8%.",
    "features.3.title": "Détection de vivacité",
    "features.3.desc": "Une technologie anti-usurpation sophistiquée détecte les visages réels par rapport aux photos, masques ou vidéos pour une sécurité renforcée.",
    "features.4.title": "Contrôles de conformité dynamiques",
    "features.4.desc": "PEP, sanctions, FATCA/CRS en temps réel avec des règles réglementaires spécifiques aux pays.",
    "features.5.title": "Notation des risques en temps réel",
    "features.5.desc": "Évaluation intelligente des risques avec catégorisation faible, moyenne et élevée pour des décisions éclairées.",
    "features.6.title": "Pistes d’audit complètes",
    "features.6.desc": "Traçabilité complète et documentation de conformité avec horodatage automatisé et suivi des utilisateurs pour les exigences réglementaires.",
    "features.7.title": "Analyses et rapports puissants",
    "features.7.desc": "Tableau de bord avancé avec analyses personnalisées, métriques de conformité et synthèses exécutives pour des décisions fondées sur les données.",
    "features.8.title": "Sécurité d’entreprise",
    "features.8.desc": "Chiffrement de niveau bancaire, conformité RGPD et pistes d’audit pour une protection complète des données.",

    "how.header": "Fonctionnement",
    "how.description": "Automatisation KYC complète avec vérification biométrique, suivi des risques et reporting en cinq étapes",
    "how.1.title": "Téléverser les documents",
    "how.1.desc": "Les clients téléversent leurs pièces d’identité via votre portail sécurisé ou application mobile.",
    "how.2.title": "Vérification biométrique",
    "how.2.desc": "Appariement du visage et détection de vivacité pour vérifier l’identité par rapport aux photos des documents avec 99,8% de précision.",
    "how.3.title": "Traitement par IA",
    "how.3.desc": "Notre IA extrait les champs, valide l’authenticité et exécute instantanément des contrôles de conformité complets.",
    "how.4.title": "Suivi en temps réel",
    "how.4.desc": "Des outils puissants suivent la conformité en temps réel avec rapports complets et pistes d’audit.",
    "how.5.title": "Revue et approbation",
    "how.5.desc": "Les responsables conformité examinent les cas signalés dans le tableau de bord et approuvent les clients vérifiés.",

    "about.header": "À propos de FinoktAI",
    "about.subheader": "Fondée par des experts en conformité pour révolutionner la gestion du KYC et des exigences réglementaires des institutions financières.",
    "about.mission.title": "Notre mission",
    "about.mission.desc": "Rendre la conformité plus rapide, plus intelligente et plus abordable pour les institutions financières dans le monde entier. Nous pensons que l’IA peut éliminer les tâches manuelles fastidieuses tout en améliorant la précision et le respect réglementaire.",
    "about.why.title": "Pourquoi nous choisir",
    "about.why.1": "Conçue par des professionnels de la conformité qui comprennent les défis réels",
    "about.why.2": "Sécurité de niveau entreprise et conformité réglementaire intégrées",
    "about.why.3": "Expérience prouvée en IA, Fintech et Trade Finance",
    "about.cta": "Planifier une démo",
    "about.founder.role": "Co-fondateur & CEO",
    "about.founder.pmp": "Chef de projet certifié PMP",
    "about.badge.pm": "Chef de projet IA",
    "about.badge.ce": "Expert conformité",
    "about.badge.ai": "Spécialiste IA",
    "about.badge.fintech": "Fintech",
    "about.badge.trade": "Trade Finance",
    "about.founder.bio": "Avec une grande expérience en conseil conformité, gestion de projets IA et innovation fintech, Noah apporte une connaissance approfondie du secteur pour résoudre des défis de conformité réels avec une technologie IA de pointe.",
    "about.linkedin": "Se connecter sur LinkedIn",

    "footer.tagline": "L’IA au service d’une conformité plus intelligente",
    "footer.bookDemo": "Réserver une démo",
    "footer.quickLinks": "Liens rapides",
    "footer.features": "Fonctionnalités",
    "footer.howItWorks": "Fonctionnement",
    "footer.about": "À propos",
    "footer.scheduleDemo": "Planifier une démo",
    "footer.cookieSettings": "Paramètres des cookies",
    "footer.contact": "Contact",
    "footer.linkedinProfile": "Profil LinkedIn",
    "footer.copyright": "© 2024 FinoktAI. Tous droits réservés.",
    "footer.bottomTag": "Conçu pour l’avenir de la conformité financière",
    "footer.privacyPolicy": "Politique de confidentialité",
    "footer.address": "5 Parv. Alan Turing, 75013 Paris, France",

    "demo.title": "Réservez votre démo personnalisée",
    "demo.subtitle": "Découvrez comment FinoktAI peut transformer vos processus KYC et de conformité. Planifiez une démo personnalisée avec notre fondateur, Noah Zaidi.",
    "demo.expect": "À quoi vous attendre",
    "demo.expect.1.title": "Réunion de découverte (30 minutes)",
    "demo.expect.1.desc": "Consultation initiale pour comprendre vos problèmes spécifiques et défis de conformité",
    "demo.expect.2.title": "Démo adaptée (30 minutes)",
    "demo.expect.2.desc": "Démonstration personnalisée axée sur la résolution de vos défis identifiés",
    "demo.expect.3.title": "Cartographie de la solution",
    "demo.expect.3.desc": "Alignement direct des fonctionnalités de notre plateforme IA sur vos exigences de conformité",
    "demo.expect.4.title": "Analyse du ROI et prochaines étapes",
    "demo.expect.4.desc": "Économies prévues et feuille de route claire de mise en œuvre pour votre organisation",
    "demo.details": "Détails de la démo",
    "demo.details.duration": "Durée",
    "demo.details.duration.value": "30 minutes",
    "demo.details.format": "Format",
    "demo.details.format.value": "Appel vidéo",
    "demo.details.presenter": "Présentateur",
    "demo.details.presenter.value": "Noah Zaidi, CEO",
    "demo.details.followUp": "Suivi",
    "demo.details.followUp.value": "Inclus",
    "demo.selectTime": "Sélectionnez votre horaire préféré",

    "privacy.title": "Politique de confidentialité",
    "privacy.subtitle": "Comment nous collectons, utilisons et protégeons vos informations",
    "privacy.lastUpdated": "Dernière mise à jour",
    "privacy.cookieInfo": "Informations sur les cookies",
    "privacy.cookie.p1": "Nous utilisons des cookies et technologies similaires pour améliorer votre expérience de navigation, analyser le trafic du site et proposer du contenu personnalisé. Voici les catégories de cookies que nous utilisons :",
    "privacy.cookie.strict": "Strictement nécessaires",
    "privacy.cookie.strict.desc": "Cookies essentiels au bon fonctionnement du site. Ils ne peuvent pas être désactivés et incluent la gestion de session, les fonctions de sécurité et les préférences de consentement.",
    "privacy.cookie.pref": "Préférences",
    "privacy.cookie.pref.desc": "Cookies mémorisant vos choix et paramètres pour offrir des fonctionnalités améliorées et une expérience personnalisée.",
    "privacy.cookie.analytics": "Analyse",
    "privacy.cookie.analytics.desc": "Cookies nous aidant à comprendre comment les visiteurs interagissent avec notre site en collectant des informations anonymes sur l’usage et les performances.",
    "privacy.cookie.marketing": "Marketing",
    "privacy.cookie.marketing.desc": "Cookies utilisés pour diffuser des publicités pertinentes et mesurer l’efficacité de nos campagnes sur différentes plateformes.",
    "privacy.manageCookies": "Gérer les paramètres des cookies",
    "privacy.dataRetention": "Conservation des données",
    "privacy.dataRetention.p1": "Nous conservons vos informations personnelles uniquement le temps nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées :",
    "privacy.dataRetention.item1": "Préférences de consentement aux cookies : 6 mois",
    "privacy.dataRetention.item2": "Données d’analyse : anonymisées après 26 mois",
    "privacy.dataRetention.item3": "Données marketing : jusqu’au retrait du consentement",
    "privacy.dataRetention.item4": "Données opérationnelles essentielles : conformément à la loi",
    "privacy.rights": "Vos droits",
    "privacy.rights.p1": "Au titre du RGPD et d’autres lois sur la vie privée, vous disposez des droits suivants :",
    "privacy.rights.access": "Accès : demander une copie de vos données personnelles",
    "privacy.rights.rectification": "Rectification : corriger des données personnelles inexactes",
    "privacy.rights.erasure": "Effacement : demander la suppression de vos données personnelles",
    "privacy.rights.portability": "Portabilité : recevoir vos données dans un format structuré",
    "privacy.rights.objection": "Opposition : s’opposer au traitement de vos données personnelles",
    "privacy.rights.withdraw": "Retrait du consentement : retirer votre consentement à tout moment",
    "privacy.rights.contactPreface": "Pour exercer ces droits ou poser des questions sur nos pratiques de confidentialité :",
    "privacy.rights.contact": "Contacter l’équipe confidentialité",
    "privacy.contactInfo": "Informations de contact",
    "privacy.contactInfo.p1": "Si vous avez des questions sur cette politique de confidentialité ou nos pratiques de données, veuillez nous contacter :",
    "privacy.contactInfo.email": "E-mail :",
    "privacy.contactInfo.dpo": "Délégué à la protection des données :",
    "privacy.contactInfo.response": "Délai de réponse :",
    "privacy.contactInfo.response.value": "Sous 30 jours à compter de la réception",
    "privacy.footer": "Cette politique de confidentialité prend effet à la date indiquée ci-dessus et peut être mise à jour de temps à autre. Nous vous informerons de tout changement significatif.",

    "404.title": "404",
    "404.subtitle": "Oups ! Page introuvable",
    "404.home": "Retour à l’accueil"
  }
};


