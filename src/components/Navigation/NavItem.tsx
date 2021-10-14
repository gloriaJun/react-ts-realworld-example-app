import React from 'react';
import classnames from 'classnames';

import { Icon, IconProps } from '../Icon';

export interface NavItemProps extends Partial<IconProps> {
  id: string;
  isActive?: boolean;
  text: string;
  onClick?: (id: string) => void;
}

export function NavItem({ id, isActive, icon, text, onClick }: NavItemProps) {
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onClick?.(id);
  };

  return (
    <li className="nav-item" onClick={handleClick}>
      <a className={classnames(['nav-link', { active: isActive }])} href="">
        {icon && (
          <>
            <Icon icon={icon} />
            &nbsp;
          </>
        )}
        {text}
      </a>
    </li>
  );
}
