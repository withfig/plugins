const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "zsh-yarn-autocompletions_g-plane",
  displayName: "Zsh Yarn Autocompletions",
  type: "shell",
  description: "Zsh plugin for Yarn autocompletions.",
  authors: [
    {
      name: "g-plane",
      github: "g-plane",
      twitter: "g3plane",
    },
  ],
  github: "g-plane/zsh-yarn-autocompletions",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Completion"],
  keywords: ["zsh-plugin", "yarn"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["install.sh"],
    },
    zsh: {
      sourceFiles: ["yarn-autocompletions.plugin.zsh"],
    },
  },
};

export default plugin;
