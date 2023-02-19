import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ListWrapper from "../components/ListWrapper/ListWrapper";
import {
  LocationInterface,
  LocationListItem,
} from "../components/LocationListItem";

export type LocationsProps = {
  locations: {
    results: LocationInterface[];
    info: {
      count: number;
      pages: number;
      next: string;
    };
  };
};

const Episodes: NextPage<LocationsProps> = ({ locations }) => {
  return (
    <>
      <Head>
        <title>Locations</title>
      </Head>
      <Header />
      <ListWrapper title="Locations List">
        <LocationListItem locations={locations} />
      </ListWrapper>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const locations = await fetch(
    `https://rickandmortyapi.com/api/location/?page=1`
  ).then((response) => response.json());

  return {
    props: {
      locations,
    },
    revalidate: 60 * 60 * 24 * 30, // 1 month
  };
};

export default Episodes;
