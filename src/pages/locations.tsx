import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LocationList } from "../components/LocationList";

export default function Locations() {
  return(
    <>
      <Head>
        <title>Locations</title>
      </Head>
      <Header />
      <LocationList />
      <Footer />
    </>
  )
}