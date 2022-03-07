import styled from "styled-components";

export const Container = styled.header`
  background: var(--shape);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--text);
    font-size: 1.1rem;

    &:hover {
      filter: brightness(2);
    }
  }

  @media (max-width: 366px) {
    justify-content: center;
    padding: 1.2rem 0;
  }
`;

export const ImageContainer = styled.div`
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 1000px) {
    padding-left: 50px;
  }

  @media (max-width: 425px) {
    padding-left: 20px;
  }

  @media (max-width: 366px) {
    display: none;
  }
`;

export const Navigation = styled.nav``;
export const UnorganizedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;

  @media (max-width: 1000px) {
    padding-right: 50px;
  }

  @media (max-width: 349px) {
    padding: 0;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

export const MenuOption = styled.a`
  font-weight: ${(props) => (props.isSelected ? "600" : "400")};
`;
