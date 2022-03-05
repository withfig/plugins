const plugin: Fig.Plugin = {
  name: "hadoop-plugin",
  type: "shell",
  description: "Useful aliases for Hadoop",
  github: "julienchamp/zsh-hadoop-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
