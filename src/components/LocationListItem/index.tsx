import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import * as S from "./styles";

export function LocationListItem() {
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page || 1));

  const { data } = useQuery(
    ["locations", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/location/?page=${page}`
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`/locations/?page=${value}`, undefined, { shallow: true });
  }

  return (
    <>
      <S.Container>
        {data?.results?.map((location) => {
          return (
            <S.Content key={location.id}>
              <S.LocationName>{location.name}</S.LocationName>
              <S.LocationInfo>Type: {location.type}</S.LocationInfo>
              <S.LocationInfo>
                Dimension:{" "}
                {location.dimension !== "" ? location.dimension : "Unknown"}
              </S.LocationInfo>
            </S.Content>
          );
        })}
      </S.Container>
      <Pagination
        count={data?.info.pages}
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
    </>
  );
}
