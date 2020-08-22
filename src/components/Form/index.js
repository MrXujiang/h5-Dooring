import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
import data from './data';

const XArea = (props) => {
  const { configData: { title, description } } = props
  const config = {
    title: {
      visible: true,
      text: title || '',
    },
    description: {
      visible: true,
      text: description || '',
    },
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    }
  };
  return <Area {...config} />;
};

export default XArea;