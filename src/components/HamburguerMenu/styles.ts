import styled from "styled-components";

export const MenuToggle = styled.div`
  width: 40px;
  height: 30px;
`;

export const MenuToggleBar = styled.div`
  background-color: var(--text-title);
  height: 5px;
  width: 100%;
  margin: 6px auto;
`;

export const Logo = styled.img``;

export const Container = styled.div`
  a {
    color: var(--text);
    text-decoration: none;
    font-size: 2.5rem;
  }
`;

export const Navigation = styled.nav`
  text-align: center;
  margin-top: 10rem;
`;

export const UnorganizedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
`;

export const ListItem = styled.li`
  font-weight: ${(props) => (props.isSelected ? "600" : "400")};
`;
