import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    esbuild: {
        loader: "tsx",
        include: /src\/.*\.tsx?$/, // Only apply on TypeScript files in src/
        exclude: /node_modules/, // Exclude node_modules to speed up
    },
    build: {
        rollupOptions: {
            external: ['tslib']
        },
        minify: false
    }
});
