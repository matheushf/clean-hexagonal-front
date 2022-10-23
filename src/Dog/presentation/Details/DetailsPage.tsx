import React from 'react';
import { useDetails } from '../../application/details/detailsHook';

function DetailsPage() {
  const { dog } = useDetails();

  return (
    <div>
      <div>DetailsPage</div>
      <div>{dog?.name}</div>
    </div>
  );
}

export default DetailsPage;
