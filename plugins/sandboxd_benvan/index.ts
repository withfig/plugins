const plugin: Fig.Plugin = {
  name: "sandboxd_benvan",
  type: "shell",
  description: "speeds up your bashrc by running (slow) setup commands on the fly",
  authors: [
    {
      name: "benvan",
      github: "benvan",
    }
  ],
  github: "benvan/sandboxd",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["sandboxd.plugin.zsh"],
  },
};

export default plugin;
