import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

export function Header() {
  const navigate = useNavigate();

  const handleClick = (pathname: string) => {
    navigate(pathname);
  };

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
          onClick={handleClick}
        />
      </Container>
    </nav>
  );
}
