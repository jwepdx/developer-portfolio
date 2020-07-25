import React from 'react';
import styled from 'styled-components';

const AccountContainer = styled.a`
  border-radius: 50vh;
  padding: 0.5em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  text-decoration: none;
  color: #000000;

  &:hover {
    background-color: #ccc;
  }
`;

export default function Account({ icon, name, link, ...props }) {
  return (
    <AccountContainer target='_blank' href={link}>
      {icon ? icon : null}
      <h3>{name}</h3>
    </AccountContainer>
  );
}
