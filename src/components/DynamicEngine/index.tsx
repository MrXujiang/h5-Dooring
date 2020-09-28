import { dynamic } from 'umi';
import Loading from '../LoadingCp';
import { useMemo, memo, FC, useContext } from 'react';
import React from 'react';
import { dooringContext, dooringContextType } from '@/layouts';
// import { AllTemplateType } from './schema';

export type componentsType = 'media' | 'base' | 'visible';

const DynamicFunc = (type: string, componentsType: string, context: dooringContextType) => {
  const prefix = context === 'pc' ? 'Pc' : '';
  return dynamic({
    loader: async function() {
      let Component: FC<{ isTpl: boolean }>;

      if (componentsType === 'base') {
        const { default: Graph } = await import(
          `@/components/Basic${prefix}Shop/BasicComponents/${type}`
        );
        Component = Graph;
      } else if (componentsType === 'media') {
        const { default: Graph } = await import(
          `@/components/Basic${prefix}Shop/MediaComponents/${type}`
        );
        Component = Graph;
      } else {
        const { default: Graph } = await import(
          `@/components/Basic${prefix}Shop/VisualComponents/${type}`
        );
        Component = Graph;
      }
      return (props: DynamicType) => {
        const { config, isTpl } = props;
        return <Component {...config} isTpl={isTpl} />;
      };
    },
    loading: () => (
      <div style={{ paddingTop: 10, textAlign: 'center' }}>
        <Loading />
      </div>
    ),
  });
};

type DynamicType = {
  isTpl: boolean;
  config: { [key: string]: any };
  type: string;
  componentsType: componentsType;
  category: string;
};
const DynamicEngine = memo((props: DynamicType) => {
  const { type, config, category } = props;
  const context = useContext(dooringContext);
  const Dynamic = useMemo(() => {
    return (DynamicFunc(type, category, context.theme) as unknown) as FC<DynamicType>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, context.theme]);

  return <Dynamic {...props} />;
});

export default DynamicEngine;
