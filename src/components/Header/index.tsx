import React from 'react';

import { ROUTES } from '../../constants';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

export interface HeaderProps {
  onClick?: (pathname: string) => void;
}

export function Header({ onClick }: HeaderProps) {
  return (
    <nav className="navbar navbar-light">
      <Container>
        <Logo isBrand />

        <Navigation
          className="navbar-nav pull-xs-right"
          items={[
            { id: ROUTES.HOME, text: 'Home', isActive: true },
            { id: ROUTES.ARTICLE, text: 'New Article', icon: 'compose' },
            { id: ROUTES.SETTING, text: 'Settings', icon: 'gear-a' },
            { id: ROUTES.LOGIN, text: 'Sign in' },
            { id: ROUTES.REGISTER, text: 'Sign up' },
          ]}
          onClick={onClick}
        />
      </Container>
    </nav>
  );
}