import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
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
  const [locationPackageInfo, setLocationPackageInfo] = useState(null);
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page || 1));

  const fetchLocations = async () => {
    await api
      .get(`location/?page=${page}`)
      .then((response) => setLocationInfo(response.data.results));
  };

  const fetchData = async () => {
    await api
      .get(`location/?page=${page}`)
      .then((response) => setLocationPackageInfo(response));
  };

  const fetchLocationsOnPageChange = async (value) => {
    await api
      .get(`location/?page=${value}`)
      .then((response) => setLocationInfo(response.data.results));
  };

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`/locations/?page=${value}`, undefined, { shallow: true });
    fetchLocationsOnPageChange(value);
  }

  useEffect(() => {
    fetchLocations();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
      <Pagination
        count={locationPackageInfo?.data?.info.pages}
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
    </>
  );
}
