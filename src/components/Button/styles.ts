import styled from 'styled-components'

export const Button = styled.button`
    background: #37b0ca;
    color: white;
    border-radius: 20px;
    border: #37b0ca 1px solid;
    padding: 0.3rem 0.8rem;
    transition: 0.2s;
    box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.04);

    &:hover {
      filter: brightness(1.2);
    }
`