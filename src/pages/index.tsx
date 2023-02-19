import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  CharacterInterface,
  CharacterListItem,
} from "../components/CharacterListItem";
import ListWrapper from "../components/ListWrapper/ListWrapper";

export type CharactersProps = {
  characters: {
    results: CharacterInterface[];
    info: {
      count: number;
      pages: number;
      next: string;
    };
  };
};

const Home: NextPage<CharactersProps> = ({ characters }) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Header />
      <ListWrapper title="Character List">
        <CharacterListItem characters={characters} />
      </ListWrapper>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const characters = await fetch(
    `https://rickandmortyapi.com/api/character/?page=1`
  ).then((response) => response.json());

  return {
    props: {
      characters: characters,
    },
    revalidate: 60 * 60 * 24 * 30, // 1 month
  };
};

export default Home;
