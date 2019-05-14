import React from 'react';

export default function Color() {
  const color = {
    name: 'Limey',
    Hex: '#76ff03',
    rgb: '118, 255, 3'
  };   

  return (
    <dl>
      <dt>Color Name: </dt>
      <dd>{color.name}</dd>

      <dt>Hex Code: </dt>
      <dd>{color.hex}</dd>

      <dt>RGB: </dt>
      <dd>{color.rgb}</dd>
    </dl>
  );
}
