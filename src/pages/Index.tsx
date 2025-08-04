import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Chatbot from "@/components/Chatbot"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { LanguageProvider } from "@/components/ui/language-provider"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="elecpro-theme">
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Contact />
          <Footer />
          <Chatbot />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
