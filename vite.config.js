import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset paths also work when deployed under a repository subpath.
  base: './',
  publicDir: 'public',
  build: { outDir: 'dist', emptyOutDir: true }
});
