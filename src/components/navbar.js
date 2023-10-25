import React from 'react';
import Logout from '../features/logout';
import FavoriteBtn from '../features/favoritesbtn';

const Navbar = ({ isAuth, setIsAut }) => {
  //handlerEvent

  return (
    <header>
      <section>
        <h1>Rick and Morty</h1>
      </section>
      <section>
        {isAuth === true ? (
          <>
            <Logout setIsAut={setIsAut} /> <FavoriteBtn />{' '}
          </>
        ) : (
          ''
        )}
      </section>
    </header>
  );
};

export default Navbar;
