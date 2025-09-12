import { useI18n } from "@/lib/i18n";

export const LanguageToggle = () => {
  const { language, setLanguage } = useI18n();

  const baseBtn =
    "px-3 py-1 rounded-full text-sm flex items-center gap-2 transition-colors";
  const inactive = "text-muted-foreground hover:bg-accent/10";
  const active = "bg-brand-blue text-white";

  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-background p-1"
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`${baseBtn} ${language === "en" ? active : inactive}`}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
      >
        <img src={`${import.meta.env.BASE_URL}flags/gb.svg`} alt="English" className="h-3.5 w-5" />
        <span className="hidden sm:inline">EN</span>
      </button>
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        className={`${baseBtn} ${language === "fr" ? active : inactive}`}
        aria-pressed={language === "fr"}
        aria-label="Passer en français"
      >
        <img src={`${import.meta.env.BASE_URL}flags/fr.svg`} alt="Français" className="h-3.5 w-5" />
        <span className="hidden sm:inline">FR</span>
      </button>
    </div>
  );
};


