import React from 'react';

export const iconTypes = ['compose', 'gear-a'] as const;

export interface IconProps {
  icon: typeof iconTypes[number];
}

export function Icon({ icon }: IconProps) {
  return <i className={`ion-${icon}`} />;
}
