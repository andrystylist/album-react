import React from 'react';
import Main from '../components/Main/Main';
import Album from '../components/Album/Album';
import data from '../services/data';

function App() {
  // const song = data[0];
  return (
    <Main>
      {data.map((song) => (
        <Album
          key={`song-${song.id}`}
          image={song.cover_url}
          name={song.name}
          artist={song.artist}
          album={song.album}
          year={song.year}
          like={song.like}
          genre={song.genre}
        />
      ))}
    </Main>
  );
}

export default App;
