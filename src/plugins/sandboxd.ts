const plugin: Fig.Plugin = {
  name: "sandboxd",
  type: "shell",
  description: "speeds up your bashrc by running (slow) setup commands on the fly",
  github: "benvan/sandboxd",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
