import Head from 'next/head'
import { Header } from '../components/Header'
import { CharacterList } from '../components/CharacterList'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Header />
      <CharacterList />
      <Footer />
    </>
  )
}
