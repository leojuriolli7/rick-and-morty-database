import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListTitle = styled.h1`
  color: var(--text);
  font-size: 2.7rem;

  @media (max-width: 320px) {
    font-size: 2.3rem;
  }

  @media (max-width: 242px) {
    font-size: 1.7rem;
  }
`;
