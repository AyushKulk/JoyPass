import React from 'react';

const ArtistCard = ({ artist, onClick }) => {
  return (
    <div>
      <button onClick={() => onClick(artist)}>Play {artist.name}</button>
    </div>
  );
};

export default ArtistCard;