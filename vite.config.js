import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/',
    server: {
        host: true,
        port: 4004
    },
    resolve: {
        alias: {
            pages: path.resolve(__dirname, 'src/pages'),
            components: path.resolve(__dirname, 'src/components'),
            GlobalStyle: path.resolve(__dirname, 'src/global-style.jsx'),
        }
    }
});