import { EpisodeListItem } from "../EpisodeListItem";
import * as S from "./styles";
import { MainHeading } from "../MainHeading";

export function EpisodeList() {
  return (
    <S.Container>
      <MainHeading title={"Episode List"} />
      <EpisodeListItem />
    </S.Container>
  );
}
