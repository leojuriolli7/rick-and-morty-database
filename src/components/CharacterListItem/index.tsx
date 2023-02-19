/* eslint-disable @next/next/no-img-element */
import { Button, Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import { CharacterDetailsModal } from "../Modals/CharacterDetailsModal";
import { SearchInput } from "../SearchInput";
import * as S from "./styles";
import { LoadingLottie } from "../LoadingLottie";
import { CharactersProps } from "../../pages";

export interface CharacterInterface {
  includes(searchTerm: string): unknown;
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  episode: [];
}

export function CharacterListItem({ characters }: CharactersProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(Number(router.query.page || 1));
  const [characterInfo, setCharacterInfo] = useState<CharacterInterface[]>(
    characters.results || []
  );
  const [characterPackageInfo, setCharacterPackageInfo] = useState(
    characters?.info
  );
  const [characterDetailsModal, setCharacterDetailsModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(false);

  const [searchValues, setSearchValues] = useState("");

  const fetchCharactersOnPageChange = async (value) => {
    setLoading(true);
    await api
      .get(`character/?page=${value}`)
      .then((response) => setCharacterInfo(response.data.results));
    setLoading(false);
  };

  const fetchSearchedCharactersOnPageChange = async (value) => {
    setLoading(true);
    await api
      .get(`character/?page=${value}&name=${searchValues.search}`)
      .then((response) => setCharacterInfo(response.data.results));
    setLoading(false);
  };

  const setCurrentCharacterAndOpenModal = (character: any) => {
    setCurrentCharacter(character);
    setCharacterDetailsModal(true);
  };

  function handlePaginationChange(e, value) {
    setPage(value);
    if (searchValues == "") {
      router.push(`/?page=${value}`, undefined, { shallow: true });
      fetchCharactersOnPageChange(value);
    } else {
      router.push(`/?page=${value}&name=${searchValues.search}`, undefined, {
        shallow: true,
      });
      fetchSearchedCharactersOnPageChange(value);
    }
  }

  return (
    <>
      {loading ? (
        <LoadingLottie />
      ) : (
        <>
          <SearchInput
            setPage={setPage}
            setCharacterInfo={setCharacterInfo}
            setCharacterPackageInfo={setCharacterPackageInfo}
            setSearchValues={setSearchValues}
          />
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
            count={characterPackageInfo?.pages}
            color="primary"
            page={page}
            onChange={handlePaginationChange}
          />
        </>
      )}
    </>
  );
}
