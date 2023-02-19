import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import { EpisodesProps } from "../../pages/episodes";
import { LoadingLottie } from "../LoadingLottie";
import { EpisodeDetailsModal } from "../Modals/EpisodeDetailsModal";
import * as S from "./styles";

export interface EpisodeInterface {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: any;
}

export function EpisodeListItem({ episodes: initialEpisodes }: EpisodesProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(Number(router.query.page || 1));
  const [episodes, setEpisodes] = useState<EpisodeInterface[]>(
    initialEpisodes?.results || []
  );
  const episodePackageInfo = initialEpisodes?.info;
  const [openModal, setOpenModal] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const fetchEpisodesOnPageChange = async (value) => {
    setLoading(true);
    await api
      .get(`episode/?page=${value}`)
      .then((response) => setEpisodes(response.data.results));
    setLoading(false);
  };

  const setCurrentEpisodeAndOpenModal = (episode) => {
    setCurrentEpisode(episode);
    setOpenModal(true);
  };

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`/episodes/?page=${value}`, undefined, { shallow: true });
    fetchEpisodesOnPageChange(value);
  }

  return (
    <>
      {loading ? (
        <LoadingLottie />
      ) : (
        <>
          <S.Container>
            {episodes?.map((episode) => {
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
            count={episodePackageInfo?.pages}
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
