import { defineConfig } from 'unocss';
import presetWind from '@unocss/preset-wind';
import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerDirectives from '@unocss/transformer-directives';

import { fontSize, breakpoints, colors } from './configs';

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetWind({
      preflight: false,
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    fontSize,
    breakpoints,
    colors,
  },
  safelist: [],
});
