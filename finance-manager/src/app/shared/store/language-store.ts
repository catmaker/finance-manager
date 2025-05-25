import { create } from "zustand";

type Language = "ko" | "en";

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  initializeLanguage: () => void;
}

// 브라우저 언어 감지 함수
const getBrowserLanguage = (): Language => {
  if (typeof window === "undefined") return "ko";

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("ko")) return "ko";
  if (browserLang.startsWith("en")) return "en";

  return "ko";
};

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "ko",

  setLanguage: (language) => set({ language }),

  toggleLanguage: () => {
    const currentLang = get().language;
    const newLang = currentLang === "ko" ? "en" : "ko";
    set({ language: newLang });
  },

  initializeLanguage: () => {
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith("ko") ? "ko" : "en";
      set({ language: detectedLang });
    }
  },
}));
