/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { CharacterDetailsModal } from "../Modals/CharacterDetailsModal";
import * as S from "./styles";
import { useQuery } from "react-query";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";

export function CharacterListItem() {
  const [characterDetailsModal, setCharacterDetailsModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(false);
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page || 1));

  const { data } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`/?page=${value}`, undefined, { shallow: true });
  }

  const setCurrentCharacterAndOpenModal = (character: any) => {
    setCurrentCharacter(character);
    setCharacterDetailsModal(true);
  };

  return (
    <>
      <S.Container>
        {data?.results?.map((character) => {
          return (
            <S.Content
              key={character.id}
              onClick={() => setCurrentCharacterAndOpenModal(character)}
            >
              <S.CharacterImage
                loading="lazy"
                src={character.image}
                alt={`Photo of ${character.name}`}
              />
              <S.CharacterName>{character.name}</S.CharacterName>
              <S.CharacterStatus activeStatus={character.status}>
                {character.status}
              </S.CharacterStatus>
            </S.Content>
          );
        })}

        <CharacterDetailsModal
          character={currentCharacter}
          isOpen={characterDetailsModal}
          closeModal={() => setCharacterDetailsModal(false)}
        />
      </S.Container>
      <Pagination
        count={data?.info.pages}
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
    </>
  );
}
