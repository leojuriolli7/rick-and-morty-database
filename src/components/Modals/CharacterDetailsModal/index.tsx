/* eslint-disable @next/next/no-img-element */
import { Modal, Button, ModalTitle } from "react-bootstrap";
import * as S from "./styles";

interface CharacterDetailsModalProps {
  character: any;
  isOpen: boolean;
  closeModal: () => void;
}

export function CharacterDetailsModal({
  character,
  isOpen,
  closeModal,
}: CharacterDetailsModalProps) {
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
              <S.DetailsTitle>Status:</S.DetailsTitle> {character.status}
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
              <S.DetailsTitle>Current Location:</S.DetailsTitle>{" "}
              {character.location?.name}
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
