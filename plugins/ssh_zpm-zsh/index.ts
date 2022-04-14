const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "ssh_zpm-zsh",
  displayName: "Ssh (zpm)",
  type: "shell",
  description: "Zsh plugin for ssh",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/ssh",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["ssh.plugin.zsh"],
  },
};

export default plugin;
