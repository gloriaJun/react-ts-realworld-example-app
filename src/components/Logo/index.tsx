import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';

const logoName = 'conduit' as const;
const defaultClassName = 'logo-font' as const;

export interface LogoProps {
  isTitle?: boolean;
  isBrand?: boolean;
}

export function Logo({ isTitle, isBrand }: LogoProps) {
  return isTitle ? (
    <h1 className={defaultClassName}>{logoName}</h1>
  ) : (
    <Link
      className={isBrand ? 'navbar-brand' : defaultClassName}
      to={ROUTES.HOME}
    >
      {logoName}
    </Link>
  );
}
