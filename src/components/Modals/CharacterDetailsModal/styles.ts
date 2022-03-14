import styled from "styled-components";

export const Container = styled.div`
  img {
  }

  .modal-header {
    div::first-letter {
      text-transform: capitalize;
    }
  }
`;

export const CharacterImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  margin-top: 1rem;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 298px) {
    width: 200px;
    height: 200px;
  }
`;

export const DetailsContainer = styled.div`
  margin-top: 2rem;
`;

export const Details = styled.p`
  font-size: 22px;
  color: #000;
  text-transform: capitalize;
  text-align: center;
`;

export const DetailsTitle = styled.span`
  display: inline;
  font-size: 22px;
  font-weight: 600;
`;

interface CharacterStatusProps {
  activeStatus: "Alive" | "Dead";
}

const colors = {
  Alive: "#209020",
  Dead: "#dc1a22",
};

export const CharacterStatus = styled(DetailsTitle)<CharacterStatusProps>`
  color: ${(props) => colors[props.activeStatus]};
  font-weight: 500;
`;
