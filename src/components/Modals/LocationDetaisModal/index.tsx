import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { api } from "../../../pages/api/api";
import * as S from "./styles";

interface LocationDetailsModalProps {
  location: any;
  isOpen: boolean;
  closeModal: () => void;
}

interface ResidentsInterface {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export function LocationDetailsModal({
  location,
  isOpen,
  closeModal,
}: LocationDetailsModalProps) {
  const [residents, setResidents] = useState<ResidentsInterface[]>([]);

  const fetchResidents = async () => {
    await location?.residents?.map((resident) => {
      api
        .get(resident)
        .then((response) =>
          setResidents((resident) => [...resident, response.data])
        );
    });
  };

  useEffect(() => {
    if (isOpen) {
      fetchResidents();
    }

    if (!isOpen) {
      setResidents([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Modal show={isOpen} onHide={closeModal} keyboard={true}>
      <S.Container>
        <Modal.Header closeButton>
          <Modal.Title>Location: {location?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center flex-column">
          <S.Title>Residents:</S.Title>
          <S.DetailsContainer>
            {residents.length !== 0 ? (
              residents?.map((resident) => (
                <S.Resident key={resident.name}>
                  <S.ResidentPhoto src={resident.image} alt="Resident" />
                  <S.ResidentName>{resident.name}</S.ResidentName>
                </S.Resident>
              ))
            ) : (
              <>
                <S.Resident>
                  <S.NoResidentsMessage>
                    No Known Residents
                  </S.NoResidentsMessage>
                </S.Resident>
              </>
            )}
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
