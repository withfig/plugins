const plugin: Fig.Plugin = {
  name: "zsh-ssh-agent_bobsoppe",
  type: "shell",
  description: "Ssh-agent management for zsh",
  authors: [
    {
      name: "bobsoppe",
      github: "bobsoppe",
    },
  ],
  github: "bobsoppe/zsh-ssh-agent",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  keywords: [
    "zsh",
    "zsh-plugin",
    "oh-my-zsh",
    "antigen",
    "antibody",
    "zplug",
    "ssh",
    "ssh-agent",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["ssh-agent.plugin.zsh"],
  },
};

export default plugin;
