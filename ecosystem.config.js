module.exports = {
  apps: [
    {
      name: "nextjs-oblivion",
      script: "npm",
      args: "run serve",
      exec_mode: "fork",
      watch: false,
    },
  ],
};
