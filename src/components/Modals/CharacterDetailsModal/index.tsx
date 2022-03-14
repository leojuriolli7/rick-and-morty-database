/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Modal, Button, ModalTitle } from "react-bootstrap";
import { api } from "../../../pages/api/api";
import * as S from "./styles";

interface CharacterDetailsModalProps {
  character: any;
  isOpen: boolean;
  closeModal: () => void;
}

interface EpisodesProps {
  name: string;
}

export function CharacterDetailsModal({
  character,
  isOpen,
  closeModal,
}: CharacterDetailsModalProps) {
  const [episodes, setEpisodes] = useState<EpisodesProps[]>([]);

  const fetchEpisodes = async () => {
    api
      .get(character?.episode[0])
      .then((response) =>
        setEpisodes((episode) => [...episode, response.data])
      );
    api
      .get(character?.episode[character?.episode.length - 1])
      .then((response) =>
        setEpisodes((episode) => [...episode, response.data])
      );
  };

  useEffect(() => {
    if (isOpen) {
      fetchEpisodes();
    }

    if (!isOpen) {
      setEpisodes([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Modal show={isOpen} onHide={closeModal} backdrop="static" keyboard={true}>
      <S.Container>
        <Modal.Header closeButton>
          <ModalTitle>{character.name}</ModalTitle>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center flex-column">
          <S.CharacterImage src={character.image} alt="Character picture." />
          <S.DetailsContainer>
            <S.Details>
              <S.DetailsTitle>Status:</S.DetailsTitle>{" "}
              <S.CharacterStatus activeStatus={character.status}>
                {character.status}
              </S.CharacterStatus>
            </S.Details>
            <S.Details>
              <S.DetailsTitle>Species:</S.DetailsTitle> {character.species}
            </S.Details>
            <S.Details>
              <S.DetailsTitle>Gender:</S.DetailsTitle> {character.gender}
            </S.Details>
            <S.Details>
              <S.DetailsTitle>Origin:</S.DetailsTitle> {character.origin?.name}
            </S.Details>
            <S.Details>
              <S.DetailsTitle>Last Known Location:</S.DetailsTitle>{" "}
              {character.location?.name}
            </S.Details>
            <S.Details>
              <S.DetailsTitle>First seen in:</S.DetailsTitle>{" "}
              {episodes[0]?.name}
            </S.Details>
            <S.Details>
              <S.DetailsTitle>Last seen in:</S.DetailsTitle>{" "}
              {episodes.slice(-1).pop()?.name}
            </S.Details>
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
