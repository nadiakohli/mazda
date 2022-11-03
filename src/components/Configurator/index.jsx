import React from 'react';
import { useParams } from 'react-router-dom';

const Configurator = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>Configurator</div>
  );
};

export default Configurator;
