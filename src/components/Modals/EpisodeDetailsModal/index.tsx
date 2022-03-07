/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { api } from "../../../pages/api/api";
import * as S from "./styles";

interface EpisodeDetailsModalProps {
  episode: any;
  isOpen: boolean;
  closeModal: () => void;
}

interface CharacterInterface {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export function EpisodeDetailsModal({
  episode,
  isOpen,
  closeModal,
}: EpisodeDetailsModalProps) {
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);

  useEffect(() => {
    if (isOpen) {
      episode?.characters?.map((character) => {
        api
          .get(character)
          .then((response) =>
            setCharacters((characters) => [...characters, response.data])
          );
      });
    }

    if (!isOpen) {
      setCharacters([]);
    }
  }, [isOpen]);

  return (
    <Modal show={isOpen} onHide={closeModal} keyboard={true}>
      <S.Container>
        <Modal.Header closeButton>
          <Modal.Title>{episode?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center flex-column">
          <S.Title>Characters:</S.Title>
          <S.DetailsContainer>
            {characters?.map((character) => (
              <S.Character key={character.name}>
                <S.CharacterPhoto src={character.image} alt="Character" />
                <S.CharacterName>{character.name}</S.CharacterName>
              </S.Character>
            ))}
          </S.DetailsContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} variant="dark">
            Close
          </Button>
        </Modal.Footer>
      </S.Container>
    </Modal>
  );
}
