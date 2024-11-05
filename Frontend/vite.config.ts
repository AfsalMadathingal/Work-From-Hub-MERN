import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    esbuild: {
        loader: "tsx",
        include: /src\/.*\.tsx?$/,
        exclude: /node_modules/,
    },
    build: {
        minify: false,
        // Remove the rollupOptions.external configuration
    },
    resolve: {
        // Add this to help Vite resolve packages
        dedupe: ['react', 'react-dom'],
        alias: {
            // Add any aliases you might need
            '@': '/src'
        }
    }
});