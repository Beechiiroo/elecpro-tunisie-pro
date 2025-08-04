import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Zap, Clock, Shield, Star } from "lucide-react"
import { useLanguage } from "@/components/ui/language-provider"
import heroImage from "@/assets/hero-electrician.jpg"

export default function Hero() {
  const { t } = useLanguage()

  const features = [
    { icon: Clock, text: "24h/24 - 7j/7", color: "text-green-500" },
    { icon: Shield, text: "Assuré & Certifié", color: "text-blue-500" },
    { icon: Zap, text: "Intervention rapide", color: "text-yellow-500" },
    { icon: Star, text: "10+ ans d'expérience", color: "text-purple-500" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Électricien professionnel au travail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/60 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-slide-up">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
              <Zap className="w-3 h-3 mr-1" />
              Électricien Expert Certifié
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            {t("hero.title")}
            <br />
            <span className="gradient-text bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {t("hero.subtitle")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-fade-in-delayed">
            {t("hero.description")}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-delayed">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className={`w-6 h-6 mb-2 ${feature.color}`} />
                <p className="text-white text-sm font-medium">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-white shadow-glow animate-pulse-glow text-lg px-8 py-4"
            >
              <Zap className="w-5 h-5 mr-2" />
              {t("hero.cta")}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t("hero.emergency")}
            </Button>
            
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-white/80 animate-fade-in-delayed">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+216 XX XXX XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp 24h/24</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Intervention d'urgence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}