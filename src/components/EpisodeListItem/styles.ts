import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2rem;

  @media (max-width: 848px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 545px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem;
  margin: 1rem;
  height: 12rem;
  background-color: var(--shape);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: all 400ms ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const EpisodeName = styled.h2`
  padding-top: 1rem;
  font-size: 1.5rem;
  color: var(--text);
`;

export const EpisodeDetails = styled.p`
  font-size: 1.3rem;
  color: var(--text-title);
`;
