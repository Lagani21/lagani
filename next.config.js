// next.config.js
const path = require("path");

const nextConfig = {
  // Use this directory as the workspace root (fixes "connection failed" when parent has package.json)
  turbopack: {
    root: path.resolve(__dirname),
  },
};

module.exports = nextConfig;