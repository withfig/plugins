const plugin: Fig.Plugin = {
  name: "sshukh",
  type: "shell",
  description: "Plugin to update known hosts automatically if needed",
  github: "anatolykopyl/sshukh",
  shells: ["zsh"],
  tags: [
    "zsh",
    "ssh",
    "oh-my-zsh",
    "zsh-plugin",
    "oh-my-zsh-plugin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
