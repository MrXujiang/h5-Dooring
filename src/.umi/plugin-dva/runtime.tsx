// @ts-nocheck
import React from 'react';
import { _DvaContainer, getApp, _onCreate } from './dva';

export function rootContainer(container) {
  return React.createElement(_DvaContainer, null, container);
}

