/* eslint-disable @next/next/no-img-element */
import { Button, Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import { CharacterDetailsModal } from "../Modals/CharacterDetailsModal";
import { SearchInput } from "../SearchInput";
import * as S from "./styles";
import Lottie from "react-lottie";
import * as animationData from "../../assets/portalAnimation.json";
import { LoadingLottie } from "../LoadingLottie";

interface CharacterInterface {
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

export function CharacterListItem() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(Number(router.query.page || 1));
  const [characterInfo, setCharacterInfo] = useState<CharacterInterface[]>([]);
  const [characterPackageInfo, setCharacterPackageInfo] = useState(null);
  const [characterDetailsModal, setCharacterDetailsModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(false);

  const [searchValues, setSearchValues] = useState("");

  const fetchCharacters = async () => {
    await api
      .get(`character/?page=${page}`)
      .then((response) => setCharacterInfo(response.data.results));
    setLoading(false);
  };

  const fetchData = async () => {
    await api
      .get(`character/?page=${page}`)
      .then((response) => setCharacterPackageInfo(response));
    characterPackageInfo;
  };

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
            count={characterPackageInfo?.data?.info?.pages}
            color="primary"
            page={page}
            onChange={handlePaginationChange}
          />
        </>
      )}
    </>
  );
}
