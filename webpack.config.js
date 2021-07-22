/// <binding BeforeBuild='Run - Development' ProjectOpened='Watch - Development' />
"use strict";

const fs = require("fs");
const path = require("path");

// Naming and path settings
const exportPath = path.resolve(__dirname, "dist");
const staticDir = path.resolve(__dirname, "static");
module.exports = configEnv => {
  const isDev = !!configEnv.dev;

  return {
    entry: {
      app:"./src/app.js",
    },
    mode: isDev ? "development" : "production",
    devtool: isDev ? "inline-source-map" : "source-map",
    devServer: {
      allowedHosts: ["localhost:8904"],
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "*",
      },
      static: {
        directory: staticDir,
        publicPath: "/",
        serveIndex: true,
      },
      host: 'localhost',
      port: 8904,
      historyApiFallback: true,
      hot: false,
      compress: false,
      https: true,
      webSocketServer: "sockjs",
    },
    output: {
      path: exportPath,
      publicPath: "/",
      filename: "[name].js",
      chunkFilename: "chunks/[name].js",
    },
  };
};
