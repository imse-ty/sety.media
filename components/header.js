import React from 'react';
import Brandmark from './brandmark';
import Container from './container';
import Navigation from './navigation';

export default function Header() {
  return (
    <header>
      <Container>
        <div className="py-8">
          <Brandmark />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
