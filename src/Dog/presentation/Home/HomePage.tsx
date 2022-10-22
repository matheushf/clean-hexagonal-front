import React from 'react';
import { useHome } from '../../application/homeHook';
import DogE from '../../domain/entity/dog';

function HomePage() {
  const { dogs } = useHome();

  console.log('oi ', dogs);

  return (
    <div>
      <div>HomePage</div>
      <br />
      Dogs
      <br />
      {dogs?.map((dog) => (
        <div>{new DogE(dog).dog.name}</div>
      ))}
    </div>
  );
}

export default HomePage;
