import React from 'react';
import classnames from 'classnames';

export interface ContainerProps {
  isPage?: boolean;
  children?: React.ReactNode;
}

export function Container({ isPage, children }: ContainerProps) {
  return (
    <div className={classnames(['container', { page: isPage }])}>
      {children}
    </div>
  );
}
