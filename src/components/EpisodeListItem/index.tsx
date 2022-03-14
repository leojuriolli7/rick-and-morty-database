import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

import { EpisodeDetailsModal } from "../Modals/EpisodeDetailsModal";
import * as S from "./styles";

export function EpisodeListItem() {
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page || 1));
  const [openModal, setOpenModal] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const { data } = useQuery(
    ["episodes", page],
    async () =>
      await fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`).then(
        (result) => result.json()
      ),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`/episodes/?page=${value}`, undefined, { shallow: true });
  }

  const setCurrentEpisodeAndOpenModal = (episode) => {
    setCurrentEpisode(episode);
    setOpenModal(true);
  };

  return (
    <>
      <S.Container>
        {data?.results?.map((episode) => {
          return (
            <S.Content
              key={episode.id}
              onClick={() => setCurrentEpisodeAndOpenModal(episode)}
            >
              <S.EpisodeName>{episode.name}</S.EpisodeName>
              <S.EpisodeDetails>{episode.air_date}</S.EpisodeDetails>
              <S.EpisodeDetails>{episode.episode}</S.EpisodeDetails>
            </S.Content>
          );
        })}

        <EpisodeDetailsModal
          episode={currentEpisode}
          isOpen={openModal}
          closeModal={() => setOpenModal(false)}
        />
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
