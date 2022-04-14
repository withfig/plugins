const plugin: Fig.Plugin = {
  icon: "⌨️",
  name: "dotpyvenv_jeanpantoja",
  displayName: "DotPyVenv",
  type: "shell",
  description: "A simple oh-my-zsh plugin",
  authors: [
    {
      name: "jeanpantoja",
      github: "jeanpantoja",
    },
  ],
  github: "jeanpantoja/dotpyvenv",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh", "online_installer.sh"],
    },
    zsh: {
      sourceFiles: ["dotpyvenv.plugin.zsh"],
    },
  },
};

export default plugin;
