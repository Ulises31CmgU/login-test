/* eslint-disable camelcase */
import React from 'react';

function CardComponent({ item }:{item:any}) {
  const {
    email, first_name, last_name, avatar,
  } = item;

  return (
    <div>
      <img src={avatar} alt="avatar" />
      <h3>{first_name}</h3>
      <h3>{last_name}</h3>
      <h4>{email}</h4>
    </div>
  );
}

export default CardComponent;
