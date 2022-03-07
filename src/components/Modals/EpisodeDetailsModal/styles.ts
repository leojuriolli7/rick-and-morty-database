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
`;

export const Details = styled.p`
  font-size: 22px;
  color: #000;
  text-transform: capitalize;
  text-align: center;
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharacterPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;
export const CharacterName = styled.p`
  font-size: 1.2rem;
  margin-top: 6px;
  color: var(--text-title);
  text-align: center;
`;
