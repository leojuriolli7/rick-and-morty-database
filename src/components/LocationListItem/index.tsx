import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import { LocationsProps } from "../../pages/locations";
import { LoadingLottie } from "../LoadingLottie";
import { LocationDetailsModal } from "../Modals/LocationDetaisModal";
import * as S from "./styles";

export interface LocationInterface {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
}

export function LocationListItem({ locations }: LocationsProps) {
  const [locationInfo, setLocationInfo] = useState<LocationInterface[]>(
    locations?.results || []
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page || 1));
  const [openModal, setOpenModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  const locationPackageInfo = locations?.info;

  const fetchLocationsOnPageChange = async (value) => {
    setLoading(true);
    await api
      .get(`location/?page=${value}`)
      .then((response) => setLocationInfo(response.data.results));
    setLoading(false);
  };

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`/locations/?page=${value}`, undefined, { shallow: true });
    fetchLocationsOnPageChange(value);
  }

  const setCurrentLocationAndOpenModal = (location) => {
    setCurrentLocation(location);
    setOpenModal(true);
  };

  return (
    <>
      {loading ? (
        <LoadingLottie />
      ) : (
        <>
          <S.Container>
            {locationInfo?.map((location) => {
              return (
                <S.Content
                  key={location.id}
                  onClick={() => setCurrentLocationAndOpenModal(location)}
                >
                  <S.LocationName>{location.name}</S.LocationName>
                  <S.LocationInfo>
                    Type: {location.type !== "" ? location.type : "Unknown"}
                  </S.LocationInfo>
                  <S.LocationInfo>
                    Dimension:{" "}
                    {location.dimension !== ""
                      ? location.dimension
                      : "Unknown/None"}
                  </S.LocationInfo>
                </S.Content>
              );
            })}
            <LocationDetailsModal
              location={currentLocation}
              isOpen={openModal}
              closeModal={() => setOpenModal(false)}
            />
          </S.Container>
          <Pagination
            count={locationPackageInfo?.pages}
            color="primary"
            className="pagination"
            page={page}
            onChange={handlePaginationChange}
          />
        </>
      )}
    </>
  );
}
