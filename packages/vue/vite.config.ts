import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
const config = defineConfig({
    plugins: [vue()],
    build: {
        outDir: path.resolve(__dirname, './dist'),
        lib: {
            entry: path.resolve(__dirname, './index.ts'),
            name: 'HectoUI'
        },
        rollupOptions: {
            context: 'globalThis',
            preserveEntrySignatures: 'strict',
            external: ['vue'],
            output: [
                {
                    format: 'umd',
                    exports: 'named',
                    sourcemap: false,
                    entryFileNames: 'hecto-ui.js',
                    chunkFileNames: '[name].js',
                    assetFileNames: '[name].[ext]',
                    namespaceToStringTag: true,
                    inlineDynamicImports: false,
                    manualChunks: undefined,
                    globals: { vue: 'Vue' }
                },
                {
                    format: 'es',
                    exports: 'named',
                    sourcemap: false,
                    entryFileNames: 'hecto-ui.esm.js',
                    chunkFileNames: '[name].js',
                    assetFileNames: '[name].[ext]',
                    namespaceToStringTag: true,
                    inlineDynamicImports: false,
                    manualChunks: undefined,
                    globals: { vue: 'Vue' }
                }
            ]
        }
    },
    resolve: {
        alias: {
            'hecto-ui': path.resolve(__dirname, './components')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
});

export default config;
