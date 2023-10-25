import React, { useState } from 'react';
import styles from './card.module.css';

//Styles
const ImgStyles = {
  Alive: styles.img_alive,
  Dead: styles.img_dead,
  unknown: styles.img_unknown,
};
const textStyles = {
  Alive: styles.alive,
  Dead: styles.dead,
  unknown: styles.unknown,
};

const Cards = ({
  charactersList,
  favorite,
  setFavorite,
}) => {
  //handlerEvent
  const onFavorite = (characterId) => {
    if (favorite.includes(characterId)) {
      setFavorite(favorite.filter((id) => id !== characterId));
    } else {
      setFavorite([...favorite, characterId]);
    }
  };
  return (
    <>
      <ul className={styles.card_container}>
        {charactersList.map((items, index) => {
          return (
            <div key={items.id}>
              <li className={styles.card_style}>
                <div>
                  <img className={ImgStyles[items.status]} src={items.image} />
                </div>
                <div className={styles.text_container}>
                  <p className={styles.text}>
                    <strong>{items.name}</strong>
                  </p>
                  <p className={styles.text}>Especies: {items.species}</p>
                  <p className={textStyles[items.status]}>{items.status}</p>
                </div>
                <div className={styles.btn_container}>
                  <button
                    className={styles.btn_styles}
                    onClick={() => onFavorite(items)}
                  >
                    f
                  </button>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Cards;
