export default {
  optimizeDeps: {
    exclude: ['url', 'http', 'path', 'buffer', 'events']
  },
  define: {
    global: 'window'  // Ensure global objects are set correctly for the browser
  },
};