import React from 'react';
import Container from './container';

export default function Header() {
  return (
    <header>
      <Container>
        <div className="py-8">
          <img
            src="./setymedia-brandmark-black-on-red.svg"
            className="w-20"
            alt="SetyMedia logo"
          />
        </div>
      </Container>
    </header>
  );
}
