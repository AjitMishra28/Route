import Hero from "../components/Home"
import Features from "../components/Works"
import Contact from"../components/Contact"
import Navbar from "../components/Navbar"
import Feature from "../components/features"
import PricingPlans from"../components/Pricing"

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
       <Features />
       <Contact/>
       <Feature/>
    </>
  )
}
