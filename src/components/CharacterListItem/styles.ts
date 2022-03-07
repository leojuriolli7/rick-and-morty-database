import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 667px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 523px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--shape);
  border-radius: 10px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  transition: all 400ms ease;
  cursor: pointer;

  p {
    font-size: 1rem;

    ::first-letter {
      text-transform: capitalize;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CharacterImage = styled.img`
  max-width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CharacterName = styled.h2`
  padding-top: 1rem;
  font-size: 1.3rem;
  line-height: 30px;
  text-align: center;
  color: var(--text);
`;

interface CharacterStatusProps {
  activeStatus: "Alive" | "Dead";
}

const colors = {
  Alive: "#209020",
  Dead: "#dc1a22",
};

export const CharacterStatus = styled.p<CharacterStatusProps>`
  color: ${(props) => colors[props.activeStatus]};
  font-weight: 600;
`;
