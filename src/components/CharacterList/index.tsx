/* eslint-disable jsx-a11y/alt-text */
import { CharacterListItem } from "../CharacterListItem";
import * as S from "./styles";
import { MainHeading } from "../MainHeading";

export function CharacterList() {
  return (
    <S.Container>
      <MainHeading title={"Character List"} />
      <CharacterListItem />
    </S.Container>
  );
}
