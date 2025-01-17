import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: ['@emotion/react', '@emotion/styled', '@mui/material'],
      },
    esbuild: {
        loader: "tsx",
        include: /src\/.*\.tsx?$/,
        exclude: /node_modules/,
    },
    build: {
        minify: false,
        chunkSizeWarningLimit: 500,  // Smaller limit to avoid memory spikes
        rollupOptions: {
            output: {
                manualChunks: undefined,  // Reduces the number of chunks
            },
        },
    },
    resolve: {
        dedupe: ['react', 'react-dom'],
        alias: {
            '@': '/src'
        }
    }
});
