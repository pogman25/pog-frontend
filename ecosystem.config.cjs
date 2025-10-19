module.exports = {
  apps: [
    {
      name: "pog-frontend",
      script: "./dist/server/entry.mjs",
      env: {
        HOST: "0.0.0.0",
        PORT: 4321,
      },
    },
  ],
};
