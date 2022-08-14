import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { CardComponent } from '..';

export function CardPreviewComponent(props: any) {
  const { data } = props;

  return (
    <div>
      {data.map((item: any) => (
        <CardComponent key={item.id} item={item} />

      ))}
    </div>
  );
}

export default CardPreviewComponent;
