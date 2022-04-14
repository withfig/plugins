const plugin: Fig.Plugin = {
  name: "ant-zsh_anthraxx",
  displayName: "Ant Zsh",
  icon: "🐜",
  type: "shell",
  description:
    "Tiny and lightweight zsh configuration environment for special customization needs. It includes plugins, themes and a basic convenient setup.",
  authors: [
    {
      name: "anthraxx",
      github: "anthraxx",
      twitter: "anthraxx42",
    },
  ],
  github: "anthraxx/ant-zsh",
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["ant-zsh.zsh"],
  },
};

export default plugin;
