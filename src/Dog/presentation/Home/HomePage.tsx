import React, { useEffect, useState } from 'react';
import { DogServices } from '../../application';

function HomePage() {
  const [dogs, setDogs] = useState();

  async function init() {
    const response = await DogServices().home.getDogs();
    console.log('oi ', response);
    setDogs(response);
  }

  useEffect(() => {
    init();
  }, []);

  return <div>HomePage</div>;
}

export default HomePage;
