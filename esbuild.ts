import { build } from 'esbuild';

const buildOptions: Parameters<typeof build>[0] = {
  entryPoints: [
    './src/index.ts',
  ],
  bundle: true,
  outdir: 'dist',
};

console.log({ buildOptions });

build(buildOptions).then((buildResult) => {
  console.log({ buildResult });
});
