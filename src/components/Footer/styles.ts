import styled from "styled-components";

export const Container = styled.footer`
  background: var(--shape);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  color: var(--text);
  font-size: 1.2rem;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: var(--text);
  font-size: 1.2rem;
  margin: 0;

  &:hover {
    color: var(--text);
    filter: brightness(2.3);
    cursor: pointer;
  }
`;
