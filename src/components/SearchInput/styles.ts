import styled from "styled-components";

export const Container = styled.div`
  input {
    border: white 1px solid;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
  }

  button {
    background: #37b0ca;
    color: white;
    border-radius: 12px;
    border: #37b0ca 1px solid;
    padding: 0.3rem 0.8rem;
    box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
    transition: 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;
