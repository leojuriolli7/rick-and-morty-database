/* eslint-disable @next/next/no-img-element */
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
  const [characterInfo, setCharacterInfo] = useState<CharacterInterface[]>([]);
  const [characterDetailsModal, setCharacterDetailsModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`character/?page=${page}`)
      .then((response) => setCharacterInfo(response.data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCurrentCharacterAndOpenModal = (character: any) => {
    setCurrentCharacter(character);
    setCharacterDetailsModal(true);
  };

  return (
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
  );
}
