import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {
  EpisodeInterface,
  EpisodeListItem,
} from "../components/EpisodeListItem";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ListWrapper from "../components/ListWrapper/ListWrapper";

export type EpisodesProps = {
  episodes: {
    results: EpisodeInterface[];
    info: {
      count: number;
      pages: number;
      next: string;
    };
  };
};

const Episodes: NextPage<EpisodesProps> = ({ episodes }) => {
  return (
    <>
      <Head>
        <title>Episodes</title>
      </Head>
      <Header />
      <ListWrapper title="Episode List">
        <EpisodeListItem episodes={episodes} />
      </ListWrapper>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const episodes = await fetch(
    `https://rickandmortyapi.com/api/episode/?page=1`
  ).then((response) => response.json());

  return {
    props: {
      episodes,
    },
    revalidate: 60 * 60 * 24 * 30, // 1 month
  };
};

export default Episodes;
