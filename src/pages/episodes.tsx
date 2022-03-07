import Head from "next/head";
import { EpisodeList } from "../components/EpisodeList";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Episodes() {
  return(
    <>
      <Head>
        <title>Episodes</title>
      </Head>
      <Header />
      <EpisodeList />
      <Footer />
    </>
  )
}