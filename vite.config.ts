import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(), // <-- Must be FIRST before react() or other plugins
    react(),
  ],
})

// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { defineConfig } from 'vite';

// export default defineConfig(() => {
//   return {
//     base: '/portfolio-/', // Configured for https://Arjun64594.github.io/portfolio-/
//     plugins: [react(), tailwindcss()],
//     resolve: {
//       alias: {
//         '@': path.resolve(import.meta.dirname, '.'),
//       },
//     },
//   };
// });