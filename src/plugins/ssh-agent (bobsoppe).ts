const plugin: Fig.Plugin = {
  name: "ssh-agent (bobsoppe)",
  type: "shell",
  description: "Ssh-agent management for zsh",
  github: "bobsoppe/zsh-ssh-agent",
  shells: ["zsh"],
  tags: [
    "zsh",
    "ssh",
    "oh-my-zsh",
    "zplug",
    "antibody",
    "antigen",
    "ssh-agent",
    "zsh-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
