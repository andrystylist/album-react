/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Album.scss';

function Album({
  image, name, artist, album, year, genre, like,
}) {
  const [iLike, setILike] = useState(like);
  const likeStyle = iLike ? 'fa-solid' : 'fa-regular';

  const handleLikeClick = () => {
    setILike((current) => !current);
  };

  return (
    <section className="album">
      <img
        className="album__img"
        src={image}
        alt={`${album} Album`}
        aria-label="Album Image"
      />
      <section className="album__info">
        <section className="artist__info">
          <h2 className="artist__name">
            {artist}
          </h2>
          <p className="artist__album">
            {album}
          </p>
        </section>
        <section className="song__info">
          <h3 className="song__name">
            {name}
          </h3>
          <p className="song__year">
            (
            {year}
            )
          </p>
        </section>
        <section className="song__bottom">
          <div className="song__genre">
            {genre}
          </div>
          <div className="song__like">
            <button type="button" className="song__like-button" onClick={handleLikeClick}>
              <i className={`fa-heart ${likeStyle}`} />
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Album;
