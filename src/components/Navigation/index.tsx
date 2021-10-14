import React from 'react';
import classnames from 'classnames';

import { NavItem, NavItemProps } from './NavItem';

export interface NavigationProps extends Pick<NavItemProps, 'onClick'> {
  className?: string;
  items: Omit<NavItemProps, 'onClick'>[];
}

export function Navigation({ className, items, onClick }: NavigationProps) {
  return (
    <ul className={classnames(['nav', className])}>
      {items?.map((item, index) => (
        <NavItem key={index} {...item} onClick={onClick} />
      ))}
    </ul>
  );
}
