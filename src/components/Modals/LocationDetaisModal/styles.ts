import styled from "styled-components";

export const Container = styled.div`
  .modal-header {
    div::first-letter {
      text-transform: capitalize;
    }
  }
`;

export const Title = styled.h2`
  color: var(--text);
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 1rem;

  @media (max-width: 423px) {
    gap: 1rem;
  }

  @media (max-width: 423px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Details = styled.p`
  font-size: 22px;
  color: #000;
  text-transform: capitalize;
  text-align: center;
`;

export const Resident = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResidentPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;
export const ResidentName = styled.p`
  font-size: 1.2rem;
  margin-top: 6px;
  color: var(--text-title);
  text-align: center;
`;

export const NoResidentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  font-weight: 500;
  color: var(--text);
  font-size: 1.5rem;
`;

export const NoResidentsMessage = styled.p`
  text-align: center;
`;
