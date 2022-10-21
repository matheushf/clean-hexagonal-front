import React from 'react';
import { useHomeService } from '../../application/homeHook';

function HomePage() {
  const { dogs } = useHomeService();

  console.log('oi ', dogs);

  return <div>HomePage</div>;
}

export default HomePage;
