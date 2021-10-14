import React from 'react';

import { Container } from '../Container';
import { Logo } from '../Logo';

export function Footer() {
  return (
    <footer>
      <Container>
        <Logo />

        <span className="attribution">
          An interactive learning project from{' '}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </Container>
    </footer>
  );
}
