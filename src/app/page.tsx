import Image from 'next/image'
import { AboutUs, BestServices, Hero } from './(public)'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <BestServices />
      <br />
      <br />
      <br />
    </main>
  )
}
