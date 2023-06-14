const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:8000",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/test", {
      target: "http://47.92.244.196:80",
      changeOrigin: true,
    })
  );
};
