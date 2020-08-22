// @ts-nocheck
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import Provider from './Provider';

export function rootContainer(container: React.ReactNode) {
  return React.createElement(
    Provider,
    null,
    container,
  );
}
