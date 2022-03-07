import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import Episodes from "../../pages/episodes";
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
  const [episodes, setEpisodes] = useState<EpisodeInterface[]>([]);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const setCurrentEpisodeAndOpenModal = (episode) => {
    setCurrentEpisode(episode);
    setOpenModal(true);
  };

  useEffect(() => {
    api
      .get(`episode/?page=1`)
      .then((response) => setEpisodes(response.data.results));
  }, []);

  return (
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
  );
}
