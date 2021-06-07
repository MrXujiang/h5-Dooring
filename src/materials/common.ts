import { INumberConfigType, TNumberDefaultType } from '@/components/FormComponents/types';

///提取所有公用设置，传来时加到这里，约定公用类型
//公用配置需满足条件，所有组件初始值统一，否则不放公用设置

export interface ICommonBaseType {
  baseTop: TNumberDefaultType;
  baseLeft: TNumberDefaultType;
  baseRadius: TNumberDefaultType;
  baseRotate: TNumberDefaultType;
  baseScale: TNumberDefaultType;
  baseHeight: TNumberDefaultType;
  baseWidth: TNumberDefaultType;
  isTpl?: boolean;
}

export const baseConfig: INumberConfigType[] = [
  {
    key: 'baseTop',
    name: '纵向位移',
    type: 'Number',
  },
  {
    key: 'baseLeft',
    name: '横向位移',
    type: 'Number',
  },
  {
    key: 'baseRadius',
    name: '圆角',
    type: 'Number',
  },
  {
    key: 'baseRotate',
    name: '旋转',
    type: 'Number',
  },
  {
    key: 'baseScale',
    name: '缩放',
    type: 'Number',
  },
  {
    key: 'baseHeight',
    name: '容器高度%',
    type: 'Number',
  },
  {
    key: 'baseWidth',
    name: '容器宽度%',
    type: 'Number',
  },
];

export const baseDefault = {
  baseTop: 0,
  baseLeft: 0,
  baseRadius: 0,
  baseRotate: 0,
  baseScale: 100,
  baseHeight: 100,
  baseWidth: 100,
};
