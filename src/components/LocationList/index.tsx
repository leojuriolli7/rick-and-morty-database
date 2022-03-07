import { LocationListItem } from "../LocationListItem";
import * as S from "./styles";
import { MainHeading } from "../MainHeading";

export function LocationList() {
  return (
    <S.Container>
      <MainHeading title={"Locations List"} />
      <LocationListItem />
    </S.Container>
  );
}
