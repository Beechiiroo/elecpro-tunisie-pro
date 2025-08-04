import { createContext, useContext, useState, ReactNode } from "react"

type Language = "fr" | "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.pricing": "Tarifs",
    "nav.contact": "Contact",
    "nav.quote": "Devis gratuit",
    
    // Hero
    "hero.title": "Électricité fiable et rapide",
    "hero.subtitle": "à Tunis & ses environs",
    "hero.description": "Expert électricien avec 10+ ans d'expérience. Dépannage 24h/24, installation complète, domotique moderne. Certification NFC 15-100.",
    "hero.cta": "Demander un devis gratuit",
    "hero.emergency": "Urgence 24h/24",
    
    // About
    "about.title": "Aymen Ben Ali",
    "about.subtitle": "Électricien Expert Certifié",
    "about.experience": "10+ ans d'expérience",
    "about.certifications": "Certifié NFC 15-100",
    "about.description": "Passionné par l'électricité moderne et la domotique, je mets mon expertise au service de vos projets avec professionnalisme et réactivité.",
    
    // Services
    "services.title": "Nos Services",
    "services.subtitle": "Solutions électriques complètes",
    "services.installation": "Installation complète",
    "services.emergency": "Urgences 24h/24",
    "services.compliance": "Mises aux normes",
    "services.smart": "Domotique",
    "services.security": "Sécurité",
    "services.maintenance": "Maintenance",
    
    // Contact
    "contact.title": "Contactez-nous",
    "contact.address": "Tunis, Tunisie",
    "contact.hours": "Disponible 24h/24 pour urgences",
    
    // Footer
    "footer.developed": "Développé par"
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.about": "حولنا",
    "nav.services": "خدماتنا",
    "nav.pricing": "الأسعار",
    "nav.contact": "اتصل بنا",
    "nav.quote": "طلب عرض مجاني",
    
    // Hero
    "hero.title": "كهرباء موثوقة وسريعة",
    "hero.subtitle": "في تونس ونواحيها",
    "hero.description": "كهربائي خبير مع أكثر من 10 سنوات من الخبرة. إصلاح 24/7، تركيب كامل، أتمتة منزلية حديثة. شهادة NFC 15-100.",
    "hero.cta": "طلب عرض مجاني",
    "hero.emergency": "طوارئ 24/7",
    
    // About
    "about.title": "أيمن بن علي",
    "about.subtitle": "كهربائي خبير معتمد",
    "about.experience": "أكثر من 10 سنوات خبرة",
    "about.certifications": "معتمد NFC 15-100",
    "about.description": "شغوف بالكهرباء الحديثة والأتمتة المنزلية، أضع خبرتي في خدمة مشاريعكم بمهنية وسرعة استجابة.",
    
    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "حلول كهربائية شاملة",
    "services.installation": "تركيب كامل",
    "services.emergency": "طوارئ 24/7",
    "services.compliance": "توافق مع المعايير",
    "services.smart": "أتمتة منزلية",
    "services.security": "أمان",
    "services.maintenance": "صيانة",
    
    // Contact
    "contact.title": "اتصل بنا",
    "contact.address": "تونس، تونس",
    "contact.hours": "متاح 24/7 للطوارئ",
    
    // Footer
    "footer.developed": "تم التطوير بواسطة"
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.quote": "Free Quote",
    
    // Hero
    "hero.title": "Reliable and fast electricity",
    "hero.subtitle": "in Tunis & surroundings",
    "hero.description": "Expert electrician with 10+ years of experience. 24/7 troubleshooting, complete installation, modern home automation. NFC 15-100 certification.",
    "hero.cta": "Request free quote",
    "hero.emergency": "24/7 Emergency",
    
    // About
    "about.title": "Aymen Ben Ali",
    "about.subtitle": "Certified Expert Electrician",
    "about.experience": "10+ years experience",
    "about.certifications": "NFC 15-100 Certified",
    "about.description": "Passionate about modern electricity and home automation, I put my expertise at the service of your projects with professionalism and responsiveness.",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "Complete electrical solutions",
    "services.installation": "Complete installation",
    "services.emergency": "24/7 Emergency",
    "services.compliance": "Standards compliance",
    "services.smart": "Home automation",
    "services.security": "Security",
    "services.maintenance": "Maintenance",
    
    // Contact
    "contact.title": "Contact us",
    "contact.address": "Tunis, Tunisia",
    "contact.hours": "Available 24/7 for emergencies",
    
    // Footer
    "footer.developed": "Developed by"
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}