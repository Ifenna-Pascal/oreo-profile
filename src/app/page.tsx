import Image from 'next/image'
import { AboutUs, BestServices, Choice, Hero, OurTeam } from './(public)'
import Contact from './(public)/landingPage/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <BestServices />
      <OurTeam />
      <Choice />
      <Contact />
      <br />
      <br />
      <br />
    </main>
  )
}
