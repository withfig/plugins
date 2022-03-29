const plugin: Fig.Plugin = {
  name: "ssh_zpm-zsh",
  type: "shell",
  description: "Zsh plugin for ssh",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    }
  ],
  github: "zpm-zsh/ssh",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Compleation"],
  installation: {
    origin: "github",
    sourceFiles: ["ssh.plugin.zsh"],
  },
};

export default plugin;
