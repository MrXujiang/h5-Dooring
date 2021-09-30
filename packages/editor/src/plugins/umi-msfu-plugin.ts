import type { IApi } from 'umi';
import { resolve } from 'path';
import { readFileSync } from 'fs';

export default (api: IApi) => {
  api.onGenerateFiles(() => {
    const path = api.env === 'production' ? './src/.umi-production/umi.ts' : './src/.umi/umi.ts';
    const buffer = readFileSync(resolve(path));
    const c = String(buffer);
    // console.log('umi-msfu-plugin', c);
    api.writeTmpFile({
      path: 'index.ts',
      content: c,
    });
    api.writeTmpFile({
      path: 'umi.ts',
      content: 'import("./index")',
    });
  });
};
