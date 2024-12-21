import Contact from "../components/landing/Contact"
import Features from "../components/landing/Features"
import FrequentQuestions from "../components/landing/FrequentQuestions"
import Hero from "../components/landing/Hero"

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <FrequentQuestions />
      <Contact />
    </div>

  )
}

export default LandingPage