import React from 'react';
import { Link } from 'react-router-dom';
import { useHomeContext } from '../../application/home/homeContext';
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
              <Link to={`/dog/${dog.id}`}>
                <img src={dog.image.url} alt="Dog" height={200} width={200} />
              </Link>
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
