import * as S from "./styles";

export function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.FooterText>
          Powered by{" "}
          <S.FooterLink href="https://www.rickandmortyapi.com" target="_blank">
            Rick and Morty API
          </S.FooterLink>
        </S.FooterText>
      </S.Content>
    </S.Container>
  );
}
