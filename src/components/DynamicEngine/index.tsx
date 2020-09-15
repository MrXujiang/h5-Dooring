import { dynamic } from 'umi';
import Loading from '../LoadingCp';
import { useMemo, memo, FC } from 'react';
import React from 'react';
import { AllTemplateType } from './schema';
const needList = ['Tab', 'Carousel', 'Upload', 'Video', 'Icon', 'Chart'];

const DynamicFunc = (type: AllTemplateType) =>
  dynamic({
    loader: async function() {
      let Component: FC<{ isTpl: boolean }>;
      if (needList.includes(type)) {
        const { default: Graph } = await import(`@/components/${type}`);
        Component = Graph;
      } else {
        const Components = ((await import(`@/components/DynamicEngine/components`)) as unknown) as {
          [key: string]: FC;
        };
        Component = Components[type];
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

type DynamicType = {
  isTpl: boolean;
  config: { [key: string]: any };
  type: AllTemplateType;
};
const DynamicEngine = memo((props: DynamicType) => {
  const { type, config, isTpl } = props;
  const Dynamic = useMemo(() => {
    return (DynamicFunc(type) as unknown) as FC<DynamicType>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, config]);
  return <Dynamic type={type} config={config} isTpl={isTpl} />;
});

export default DynamicEngine;
