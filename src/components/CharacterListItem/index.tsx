/* eslint-disable @next/next/no-img-element */
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import { CharacterDetailsModal } from "../Modals/CharacterDetailsModal";
import * as S from "./styles";

interface CharacterInterface {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export function CharacterListItem() {
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page || 1));
  const [characterInfo, setCharacterInfo] = useState<CharacterInterface[]>([]);
  const [characterPackageInfo, setCharacterPackageInfo] = useState(null);
  const [characterDetailsModal, setCharacterDetailsModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(false);

  const fetchCharacters = async () => {
    await api
      .get(`character/?page=${page}`)
      .then((response) => setCharacterInfo(response.data.results));
  };

  const fetchData = async () => {
    await api
      .get(`character/?page=${page}`)
      .then((response) => setCharacterPackageInfo(response));
    characterPackageInfo;
  };

  const fetchCharactersOnPageChange = async (value) => {
    await api
      .get(`character/?page=${value}`)
      .then((response) => setCharacterInfo(response.data.results));
  };

  useEffect(() => {
    fetchCharacters();
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCurrentCharacterAndOpenModal = (character: any) => {
    setCurrentCharacter(character);
    setCharacterDetailsModal(true);
  };

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`/?page=${value}`, undefined, { shallow: true });
    fetchCharactersOnPageChange(value);
  }

  return (
    <>
      <S.Container>
        {characterInfo?.map((character) => {
          return (
            <S.Content
              key={character.id}
              onClick={() => setCurrentCharacterAndOpenModal(character)}
            >
              <S.CharacterImage
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
        count={characterPackageInfo?.data?.info.pages}
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
    </>
  );
}
