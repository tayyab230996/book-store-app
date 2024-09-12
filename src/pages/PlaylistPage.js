import React from "react";
import PlayList from "../components/PlayList";

const PlaylistPage = ({ playlist, onRemoveFromPlaylist }) => {
  return (
    <PlayList playlist={playlist} onRemoveFromPlaylist={onRemoveFromPlaylist} />
  );
};

export default PlaylistPage;
