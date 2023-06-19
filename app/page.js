import Image from 'next/image'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Drops from './component/Drops'
import Wearables from './component/Wearables'
import Stories from './component/Stories'
import Socials from './component/Socials'
import Partners from './component/Partners'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">

      <Hero />
      <Drops />
      <Wearables />
      <Stories />
      <Socials />
      <Partners />

    </main>
  )
}
