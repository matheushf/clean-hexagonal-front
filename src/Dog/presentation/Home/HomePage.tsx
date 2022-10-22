import React from 'react';
import { useHomeContext } from '../../application/homeContext';
import { FavoriteButton } from './components/FavoriteButton';

function HomePage() {
  const { dogs } = useHomeContext();

  console.log('oi', dogs);
  return (
    <div>
      <div>HomePage</div>
      <br />
      Dogs
      <br />
      {dogs?.map((dog) => {
        return (
          <div>
            <div>Breed name: {dog.name}</div>
            <div>
              <img src={dog.image.url} alt="Dog" height={200} width={200} />
            </div>
            <div>
              <FavoriteButton dog={dog} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
