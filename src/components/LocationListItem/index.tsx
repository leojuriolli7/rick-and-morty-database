import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import * as S from "./styles";

interface LocationInterface {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export function LocationListItem() {
  const [locationInfo, setLocationInfo] = useState<LocationInterface[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`location/?page=${page}`)
      .then((response) => setLocationInfo(response.data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      {locationInfo?.map((location) => {
        return (
          <S.Content key={location.id}>
            <S.LocationName>{location.name}</S.LocationName>
            <S.LocationInfo>Type: {location.type}</S.LocationInfo>
            <S.LocationInfo>Dimension: {location.dimension}</S.LocationInfo>
          </S.Content>
        );
      })}
    </S.Container>
  );
}
