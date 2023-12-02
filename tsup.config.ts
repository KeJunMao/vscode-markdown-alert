import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'web/index': 'src/index.ts',
  },
  splitting: false,
  shims: false,
  dts: false,
  external: [
    'vscode',
  ],
  loader: {
    '.css': 'text',
  },
})
