const plugin: Fig.Plugin = {
  icon: "🧑‍💻",
  name: "oh-my-dogesh_keithhamilton",
  type: "shell",
  description: "Doge-themed plugin for oh-my-zsh",
  authors: [
    {
      name: "keithhamilton",
      github: "keithhamilton",
      twitter: "blackmaas",
    },
  ],
  github: "keithhamilton/oh-my-dogesh",
  license: ["BSD-3-Clause"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["oh-my-dogesh.plugin.zsh"],
  },
};

export default plugin;
