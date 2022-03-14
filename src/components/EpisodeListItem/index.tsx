import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import { EpisodeDetailsModal } from "../Modals/EpisodeDetailsModal";
import * as S from "./styles";

interface EpisodeInterface {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: any;
}

export function EpisodeListItem() {
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page || 1));
  const [episodes, setEpisodes] = useState<EpisodeInterface[]>([]);
  const [episodePackageInfo, setEpisodePackageInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const fetchEpisodes = async () => {
    await api
      .get(`episode/?page=${page}`)
      .then((response) => setEpisodes(response.data.results));
  };

  const fetchData = async () => {
    await api
      .get(`episode/?page=${page}`)
      .then((response) => setEpisodePackageInfo(response));
  };

  const fetchEpisodesOnPageChange = async (value) => {
    await api
      .get(`episode/?page=${value}`)
      .then((response) => setEpisodes(response.data.results));
  };

  useEffect(() => {
    fetchEpisodes();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        count={episodePackageInfo?.data?.info.pages}
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
    </>
  );
}
