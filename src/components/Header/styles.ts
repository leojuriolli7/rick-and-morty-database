import styled from "styled-components";

export const Container = styled.header`
  background: var(--shape);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--text);
    font-size: 1.3rem;

    &:hover {
      filter: brightness(2.3);
    }
  }
`;

export const ImageContainer = styled.div`
  transition: transform 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 1000px) {
    padding-left: 50px;
  }

  @media (max-width: 445px) {
    padding-left: 20px;
  }
`;

export const Navigation = styled.nav`
  .Menu {
    display: none;

    @media (max-width: 445px) {
      display: block;
      margin-right: 20px;
    }
  }
`;
export const UnorganizedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;

  @media (max-width: 1000px) {
    padding-right: 50px;
  }

  @media (max-width: 445px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: ${(props) => (props.isSelected ? "600" : "400")};
`;
